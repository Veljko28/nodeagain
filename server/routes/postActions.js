import {v4} from 'uuid';
import express from 'express';
import {pool} from '../sources/queries';

const router = express.Router();


router.post('/favorite',(req, res) => {
    const { postId, userId } = req.body;
    pool.query("SELECT * FROM favorites WHERE postId = $1 AND userId = $2",
    [postId,userId], (err, result) =>{
        if (err) throw err;
        if (result.rowCount === 1){
            pool.query("DELETE FROM favorites WHERE postId = $1 AND userId = $2",
            [postId, userId], (err2, result2) => {
                if (err2) throw err2;
                res.status(202).json(true);
            })
        }
        else {
            pool.query("INSERT INTO favorites(postId, userId) VALUES ($1,$2)",
            [postId, userId] ,(err,result) => {
                if (err) throw err;
                res.json(result.rowCount == 1);
            })
        }
    })
});

router.post('/retweet', (req,res) => {
    const { postId, userId } = req.body;
    pool.query("SELECT * FROM tweets WHERE postId = $1 AND userId = $2 AND retweet = 1",
    [postId,userId], (err, result) =>{
        if (err) throw err;
        if (result.rowCount === 1){
            pool.query("DELETE FROM tweets WHERE postId = $1 AND userId = $2",
            [postId, userId], (err2, result2) => {
                if (err2) throw err2;
                res.status(202).json(true);
            })
        }
        else {

            let post;

            pool.query("SELECT * FROM tweets WHERE id = $1", [postId] ,(err,result) => {
                if (err) throw err;
                if (!result.rowCount) res.status(404).json(false);
                else post = result.rows[0];
            })
            const id = v4();
            pool.query("INSERT INTO tweets(id,text,userId,mediaPath,timeCreated,retweet) VALUES ($1,$2,$3,$4,$5,$6)",
            [id,post.text,userId,post.mediaPath,post.timeCreated,1]  ,(err,result) => {
                if (err) throw err;
                res.json(result.rowCount == 1);
            })
        }
    })
})

router.route('/comment').get((req,res) => {
    const {postId} = req.body;
    pool.query("SELECT * FROM comments WHERE postId = $1", [postId], (err,result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
})
.post((req,res) => {
    const {postId,userId,text,timeCreated} = req.body;
    const id = v4();
    pool.query("INSERT INTO comments(id,postId,userId,text,timeCreated) VALUES ($1,$2,$3,$4,$5)",
    [id,postId,userId,text,timeCreated], (err,result) => {
        if (err) throw err;
        res.status(201).json(true);
    })
})
.delete((req,res) => {
    const {id} = req.body;
    pool.query("DELETE FROM comments WHERE id = $1",[id], (err,result) => {
        if (err) throw err;
        res.status(202).json(true);
    })
})

module.exports = router;


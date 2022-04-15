import {v4} from 'uuid';
import express from 'express';
import {pool} from '../sources/queries';
import { verifyToken } from '../sources/verifyAccessToken';

const router = express.Router();

router.get('/like/:txt', (req,res) => {
    const txt = req.params.id;
    pool.query("SELECT * FROM tweets WHERE text LIKE $1", [txt],(err,result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
})

router.route('/:id').get((req,res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM tweets WHERE id = $1", [id] ,(err,result) => {
        if (err) throw err;
        if (!result.rowCount) res.status(404).json(false);
        else res.json(result.rows[0]);
    })
}).delete(verifyToken, (req, res ) => {
    const id = req.params.id;
    pool.query("DELETE FROM tweets WHERE id = $1", [id] ,(err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
}) 

router.post('/create', verifyToken, (req, res) => {
    const { text,userId,mediaPath,timeCreated } = req.body;
    const id = v4();
    pool.query("INSERT INTO tweets(id,text,userId,mediaPath,timeCreated) VALUES ($1,$2,$3,$4,$5)",
     [id,text,userId,mediaPath,timeCreated] ,(err,result) => {
        if (err) throw err;
        res.json(result.rowCount == 1);
    })
});


module.exports = router;
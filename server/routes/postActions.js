import {v4} from 'uuid';
import express from 'express';
import {pool} from '../sources/queries';

const router = express.Router();


router.post('/favorite',(req, res) => {
    const { postId, userId } = req.body;
    pool.query("INSERT INTO favorites(postId, userId) VALUES ($1,$2)",
     [postId, userId] ,(err,result) => {
        if (err) throw err;
        res.json(result.rowCount == 1);
    })
});

module.exports = router;


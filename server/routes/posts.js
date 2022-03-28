const express = require('express');
const router = express.Router();
const pool = require('../queries');

router.get('/', (req,res) => {
    res.send("List of posts");
})

// router.get('/:id', (req,res) => {
//     const id = req.params.id;
//     res.send(`Post #${id}`);
// })

router.route('/:id').get((req,res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM posts WHERE id = @1", [id] ,(err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
}).post((res, req) => {
    const { title, text, made_by } = res.body;
    pool.query("INSERT INTO posts(title,text,made_by) VALUES (@1,@2,@3)",
     [title,text,made_by] ,(err,result) => {
        if (err) throw err;
        res.json(result.rowCount == 1);
    })
}).delete((req, res ) => {
    const id = req.params.id;
    pool.query("DELETE FROM posts WHERE id = @1", [id] ,(err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
}) 


module.exports = router;
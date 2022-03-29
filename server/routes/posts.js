const express = require('express');
const router = express.Router();
const pool = require('../sources/queries');

router.get('/', (req,res) => {
    pool.query("SELECT * FROM posts",(err,result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
})

// router.get('/:id', (req,res) => {
//     const id = req.params.id;
//     res.send(`Post #${id}`);
// })

router.route('/:id').get((req,res) => {
    const id = req.params.id;
    pool.query("SELECT * FROM posts WHERE id = $1", [id] ,(err,result) => {
        if (err) throw err;
        if (!result.rowCount) res.status(404).json(false);
        else res.json(result.rows[0]);
    })
}).delete((req, res ) => {
    const id = req.params.id;
    pool.query("DELETE FROM posts WHERE id = $1", [id] ,(err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
}) 

router.post('/create',(req, res) => {
    const { title, text, made_by } = req.body;
    pool.query("INSERT INTO posts(title,text,made_by) VALUES ($1,$2,$3)",
     [title,text,made_by] ,(err,result) => {
        if (err) throw err;
        res.json(result.rowCount == 1);
    })
});


module.exports = router;
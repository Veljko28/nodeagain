const express = require('express');
const router = express.Router();
const pool = require('../queries');

router.get('/', (req,res) => {
    pool.query("SELECT * FROM users ORDER BY id ASC",(err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
})

router.get('/:id', (req,res) => {
    const id = req.params.id;
    console.log(id);
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
        if (err) throw err;
        res.json(result.rows);
    });
});

router.post('/register',(req,res) => {
    const {name, email} = req.body;
    console.log(req.body);
    pool.query("INSERT INTO users(name,email) VALUES ($1, $2)", [name,email], (err,result) => {
        if (err) throw err;
        res.json(result.rows);
    })
})


router.post('/login', (req,res) => {
    const {email} = req.body;
    pool.query("SELECT email FROM users WHERE email = $1", [email], (err,result) => {
        if (err) throw err;
        res.json(result.rowCount == 1);
    })
})


// create login, update, and delete user and test out with postman



module.exports = router;
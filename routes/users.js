const express = require('express');
const router = express.Router();
const pool = require('../queries');

router.get('/', (req,res) => {
    pool.query("SELECT * FROM users ORDER BY id ASC",(err,result) => {
        if (err) throw err;
        res.statusCode(200).json(result.rows);
    })
})

router.get('/:id', (req,res) => {
    const id = req.query.params;
    pool.query("SELECT * FROM users WHERE id = $1", [id], (err, result) => {
        if (err) throw err;
        res.statusCode(200).json(result.rows);
    });
});

router.post('/register',(req,res) => {
    const {name, email} = req.body;
    pool.query("INSERT INTO users(name,email) VALUES ($1, $2)", [name,email], (err,result) => {
        if (err) throw err;
        res.statusCode(201).json(result.rows);
    })
})


// create login, update, and delete user and test out with postman
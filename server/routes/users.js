import {v4} from 'uuid';
import express from "express";
import * as yup from "yup";
import bycript from "bcryptjs";
import {pool} from '../sources/queries';
import {formatYupError} from '../sources/formatYupError';
import {CreateAccessToken} from '../sources/createAccessToken'; 



const router = express.Router();

const YupSchema = yup.object().shape({
    username: yup.string().min(5).max(256),
    at: yup.string().min(3).max(25),
    email: yup.string().email().max(250).min(10),
    password: yup.string().min(6).max(100),
    confirm_password: yup.string().min(6).max(100)
})

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
        res.status(200).json(result.rows);
    });
});

router.post('/register', async (req,res) => {
    try {
        await YupSchema.validate(req.body, {abortEarly: false});
    }
    catch(err) {
        res.status(400).json(formatYupError(err));
    }
    const {username, email, at, password, confirm_password} = req.body;
    if (password != confirm_password){
        res.status(400).json(false);
        return;
    }
    const hashedPass = bycript.hashSync(password, 10);
    const id = v4();
    pool.query("INSERT INTO users(id,username,at,password, email) VALUES ($1, $2, $3, $4, $5)", [id,username,at,hashedPass,email], (err,result) => {
        if (err) throw err;
        res.status(201).json(result.rows);
    })
})


router.post('/login', (req,res) => {
    // create yup validate schema for login
    const {email, password} = req.body;
    pool.query("SELECT * FROM users WHERE email = $1", [email], (err,result) => {
        if (err) throw err;
       
        if (result.rowCount == 1){
            const user = result.rows[0];
            bycript.compare(password, user.password, (err, result) => {
                if (err || !result) res.status(404).json(false);
                else {
                    res.cookie('jid',
                    CreateAccessToken(user.id,'7d', false), 
                    {
                        httpOnly: true
                    });

                res.status(200).json({accessToken: CreateAccessToken(user.id, '15m')});
                }
            })
        }
        else res.status(404).json(false);
    })
})

router.delete('/remove/:id', (req, res) => {
    //  this route should check if the user requesting has the same id as the request
    const id = req.params.id;
    pool.query("DELETE FROM users WHERE id = $1", [id], (err,result) => {
        if (err) throw err;
        res.status(201).json(result.rows);
    })
})

router.get('/search/:term', (req,res) => {
    let term = req.params.term;
    term = "%" + term + "%";
    console.log(term);
    pool.query("SELECT username,at FROM users WHERE username LIKE $1 or at LIKE $1", [term], (err,result) => {
        if (err) throw err;
        res.status(200).json(result.rows);
    })
});


module.exports = router;
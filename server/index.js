require('dotenv').config()
const express = require('express');
const app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.set('view engine', 'ejs');

app.get('/', (req,res) => {
    // res.json({first: "second"})
    // res.download('index.js') // lets the user download the given files
    res.render("index",{text: "First Text"});
})

const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(3000, () => { console.log("Server listening on port 3000")})
import express from 'express';
const app = express();
require('dotenv').config()

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

const actionsRouter = require('./routes/postActions');
app.use('/actions', actionsRouter);

app.listen(5000, () => { console.log("Server listening on port 5000")})
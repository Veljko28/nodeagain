const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send("List of posts");
})

// router.get('/:id', (req,res) => {
//     const id = req.params.id;
//     res.send(`Post #${id}`);
// })

router.route('/:id').get((req,res) => {
    const id = req.params.id;
    res.send(`Post #${id}`);
}).post((res, req) => {
    const id = req.params.id;
    res.send(`Creating Post #${id}...`);
}).delete((req, res ) => {
    const id = req.params.id;
    res.send(`Deleting Post #${id}`);
}) 


module.exports = router;
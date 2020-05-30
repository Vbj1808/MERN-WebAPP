const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');


router.get('/test', (req,res)=> res.send('book route testing!'));

router.get('/', (req,res)=>{
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json({ nobooksfound : 'No Books Found'}));
});
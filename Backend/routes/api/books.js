const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');


router.get('/test', (req,res)=> res.send('book route testing!'));

router.get('/', (req,res)=>{
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json({ nobooksfound : 'No Books Found'}));
});

router.get('/:id', (req,res)=> {
    Book.findById(req.params.id)
        .then(book => res.json(book))
        .catch(err => res.status(404).json({ nobookfound: 'No book found'}));
});

router.post('/', (req,res) => {
    Book.create(req.body)
        .then(body => res.json({msg: 'Book added successfully'}))
        .catch(err => res.status(400).json({ error: 'Unable to add this book' }));
});

router.put('/:id', (req,res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
        .then(book => res.json({ msg: 'Updated successfully'}))
        .catch(err => res.status(400).json({ error: 'Unable to update the database'}));
});

router.delete('/:id', (req,res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
        .then(book => res.json({ msgs: 'Book entry deleted successfully'}))
        .catch(err => res.status(404).json({error: 'No such a book'}));
});

module.exports = router;


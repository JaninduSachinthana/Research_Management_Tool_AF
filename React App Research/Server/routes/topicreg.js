const express = require('express');
const router = express.Router();

const Topic = require('../models/Research_Topic');

router.post('/add', (req, res) => {
    
    const topics = new Topic({
        stdID : req.body.stdID,
        grpID : req.body.grpID,
        title : req.body.title,
        email : req.body.email,
        status: "pending"
    });

    topics
    .save()
    .then(() => res.json("Research Topic Send Successfully..."))
    .catch((err) => res.json(err.message));
});

router.get('/view', (req, res) => {
    Topic
    .find()
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/views/pend', (req, res) => {
    Topic
    .find({status : "pending"})
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/views/accept', (req, res) => {
    Topic
    .find({status : "approved"})
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.get('/views/reject', (req, res) => {
    Topic
    .find({status : "rejected"})
    .then((response) => res.json(response))
    .catch((err) => res.json(err.message));
});

router.delete('/delete/:id', (req, res) => {
    Topic
    .findByIdAndDelete(req.params.id)
    .then(() => res.json("Research Topic deleted successfully..."))
    .catch((err) => res.json(err.message));
});

module.exports = router;
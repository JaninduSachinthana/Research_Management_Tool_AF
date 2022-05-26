const express = require('express');
const router = express.Router();
const transpoter = require('./../utils/mailDet');

const Topic = require('../models/Research_Topic');

router.post('/response', (req, res) => {

    const accept = Topic.findOne(req.params.id);

    const message = { 
        to: 'janindusachinthana98@gmail.com',
        subject: "Subject",
        html: "<h1>Hello SMTP Email</h1> <br/><br/>" + 
              ``
    };

    transpoter.sendMail(message, function(err, info) {
        if (err) {
          console.log(err)
        } else {
          console.log(info);
        }
    });
    
});

module.exports = router;
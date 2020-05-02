"use strict";
const express = require('express');
const router = express.Router();
//Bad place for this, just an example of  a userObject and all it has
let userObject;
router.post('/login', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    //This is where we want to run passport stuff on login
    res.sendStatus(200);
});
router.post('/signup', (req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
    //Signup logic
    //check email against database
    //Check to make sure password is strong
    //TODO send email to user for verification
    res.sendStatus(200);
});
module.exports = router;

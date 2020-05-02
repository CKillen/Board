"use strict";
const express = require('express');
const router = express.Router();
//Bad place for this, just an example of  a boardObject, cardObject and 
//GroupObject and all it has
//I think I decided that the board should include the info on the groups and
//cards
//Also These types are all just placeholders, see if Date can be a type, make 
//arrays only contain groups or cards, etc
let cardObject;
let groupObject;
let boardObject;
router.get('/:boardId', (req, res) => {
    //Grab user from session and check userHash against allowedUsers of board
    //if allowed return boardObject
    //probably will have to populate group portion with a group api call
    //not sure how this should be handled yet
    //maybe its a document inside of mongo???
    res.send({
        title: "Example Board",
        dateCreated: "3-13-2020",
        dateUpdated: "4-25-2020",
        groups: [
            {
                position: 1,
                cards: [
                    {
                        title: "card1"
                    },
                    {
                        title: "card2"
                    }
                ]
            },
            {
                posistion: 2,
                cards: [
                    {
                        title: "card3"
                    }
                ]
            }
        ]
    });
});
router.post('/:boardId', (req, res) => {
    //Can change title and groups and order of groups
    //group and card API will be used to change the data in groups and cads
    console.log(req.params.boardId);
    console.log(req.body.title);
    console.log(req.body.groups);
    res.sendStatus(200);
});
router.get('/:boardId/:groupId', (req, res) => {
    console.log(req.params.groupId);
    res.sendStatus(200);
});
module.exports = router;

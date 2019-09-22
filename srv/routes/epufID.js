// jshint esversion: 6
const router = require('express').Router();
let epufi = require('../models/epufID.model');

router.route('/').get((req, res) => {
    epufi.find()
    .then(epufID => res.json(epufID))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const epufID = req.body.epufID;
    const newEpufID = new epufi({epufID});

    newEpufID.save()
        .then(() =>  res.json('New ePUF added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
// jshint esversion: 6
const router = require('express').Router();
let epuf = require('../models/epufID.model');

router.route('/').get((req, res) => {
    epuf.find()
    .then(epufID => res.json(epufID))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const epufID = req.body.epufID;
    const newEpufID = new epuf({epufID});

    newEpufID.save()
        .then(() =>  res.json('New ePUF added'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
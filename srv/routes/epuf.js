// jshint esversion: 6
const router = require('express').Router();
let epuf = require('../models/epuf.model');

router.route('/').get((req, res) => {
    epuf.find()
        .then(epuf => res.json(epuf))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const epufID = req.body.epufID;
    const startDate = Date.parse(req.body.startDate);
    const endDate = Date.parse(req.body.endDate);
    const update = Number(req.body.update);
    const add = Number(req.body.add);
    const comments = req.body.comments;
    const audit = Boolean(req.body.audit);

    const newEpuf = new epuf ({
        epufID,
        startDate,
        endDate,
        update,
        add,
        comments,
        audit,
    });
    newEpuf.save()
    .then(() => res.json('ePUF added'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    epuf.findById(req.params.id)
    .then(epuf => res.json(epuf))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    epuf.findByIdAndDelete(req.params.id)
    .then(() => res.json('ePUF deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    epuf.findByIdAndUpdate(req.params.id)
    .then(epuf => {
        epuf.epufID = req.body.epufID;
        epuf.startDate = Date.parse(req.body.startDate);
        epuf.endDate = Date.parse(req.body.endDate);
        epuf.update = Number(req.body.update);
        epuf.add = Number(req.body.add);
        epuf.comments = req.body.comments;
        epuf.audit = Boolean(req.body.audit);

        epuf.save()
            .then(() => res.json('ePUF updated'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
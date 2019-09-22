// jshint esversion: 6
const express = require('express');
const cors = require('cors');
const mongoose = require ('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 6000;

app.use(cors());
app.use (express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Cluster connected");
});

const epufRouter = require('./routes/epuf');
const epufIDRouter = require('./routes/epufID');

app.use('/epuf', epufRouter);
app.use('/epufID', epufIDRouter);

app.listen(port,  () => {
    console.log(`Connected on port: ${port}`);
});

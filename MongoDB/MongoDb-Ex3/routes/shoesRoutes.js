const express = require('express');

const shoesModel = require('../models/shoes');

const app = express();

//[GET]

app.get('/shoes', async (req, res) => {
    const shoes = await shoesModel.find();
    try{
        res.send(shoes);
    } catch (err) {
        res.status(500).send(err);
    }
    
})

module.exports = app;
const mongoose = require('mongoose');

const calcadoModel = new mongoose.Schema({
    nome: { type: String, required: true },
    imagemUrl: { type: String, required: true }
});


module.exports = calcadoModel;
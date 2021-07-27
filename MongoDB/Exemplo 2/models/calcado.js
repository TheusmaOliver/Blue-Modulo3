const mongoose = require("mongoose");

const calcadoSchema = new mongoose.Schema({
    nome:{
        type:String,
        required:true
    },
    imagemUrl:{
        type:String,
        required:true
    },
    created_at:{
        type:Date,
        required:true,
        default:Date.now
    }
})

module.exports = mongoose.model('calcado',calcadoSchema)
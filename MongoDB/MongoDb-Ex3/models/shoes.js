const mongoose = require("mongoose");

const ShoesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true,
        lowercase: true
    },
    calories:{
        type: Number,
        default: 0,
        validate(value){
            if(value <0) throw new error("não existe calorias negativas!");
        }
    }
})

const Shoes = mongoose.model("Shoes",ShoesSchema)

module.exports = Shoes;
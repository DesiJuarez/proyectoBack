const mongoose = require ('mongoose');

const Schema = mongoose.Schema;
const pets = new Schema({
    legajo:{
        type:Number,
        required:true
    },
    nombre:{
        type:String,
        required:true
    },
    sexo:{
        type:String
    },
    especie: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true 
    },
    peso: {
        type: Number,
        required: true
    },
});

const Consultpets = mongoose.model('Consultpet', pets)
module.exports = {Consultpets}
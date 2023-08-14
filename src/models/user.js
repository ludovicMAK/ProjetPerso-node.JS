const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        validate(v){
            if(!validator.isEmail(v)) throw new Error('Email non valide!');
        }
    },
    password:{
        type:String,
        required:true,
        validate(v){
            if(!validator.isLength(v,{min:4})) throw new Error('le mdp doit être entre 4 à 20 caractère');
        }
    },
});

const user = mongoose.model('user', userSchema);




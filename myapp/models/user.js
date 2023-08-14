var mongoose = require('mongoose');
var validator = require('validator');
const {Schema} = mongoose;

const userSchema = new Schema({
    nom:{
        type:String,
        required:true,
    },
    prenom:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(v){
            if(!validator.isEmail(v)) throw new Error('mail non valide');
        }
    }
})
const User = mongoose.model('User',userSchema);

module.exports = User;

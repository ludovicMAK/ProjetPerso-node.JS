const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator')

function validatePassword(password) {
    // Vérifier la longueur minimale du mot de passe
    if (password.length < 8) {
        throw new Error("Le mot de passe doit contenir au moins 8 caractères.");
    }

    // Vérifier la présence de lettres majuscules, minuscules, chiffres et caractères spéciaux
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[!@#$%^&*]/.test(password)) {
        throw new Error("Le mot de passe doit contenir au moins une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.");
    }
};

const userSchema = new mongoose.Schema({
    nom:{
        type:String,
        required:true
    },
    prenom:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        validate(v){
            if(!validator.isEmail(v)) throw new Error('Email non valide!');
        }
        
    },
    password:{
        type:String,
        required:true,
        validate(v){
            validatePassword(v);
        }
    }
})

userSchema.statics.findUser = async(email,password)=>{
    const user = await User.findOne({email});
    if(!user) throw new Error('Erreur, pas possible de se connecter');
    const isPasswordValide = await bcrypt.compare(password,user.password);
    if(!isPasswordValide) throw new Error('Erreur, pas possible de se connecter');
    return user;
}

userSchema.pre('save', async function(){
    if (this.isModified('password')) this.password = await bcrypt.hash(this.password,8);
})

const User = mongoose.model('user',userSchema);


module.exports = User;
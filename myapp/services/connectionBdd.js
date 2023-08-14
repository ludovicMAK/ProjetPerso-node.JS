
require('dotenv').config();
const mongoose = require('mongoose');

console.log(`mongodb+srv://ludovic:${process.env.passwordMongo}@testtask.romymq1.mongodb.net/?retryWrites=true&w=majority`);
async function connectDb(){
    
   await mongoose.connect();
    console.log('Db connecté!');
}

module.exports={
    connectDb
}
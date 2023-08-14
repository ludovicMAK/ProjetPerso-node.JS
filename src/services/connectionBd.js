require('dotenv').config()
const mongoose = require('mongoose');

ConnectionBd().catch(err =>console.log(err));

async function ConnectionBd(){
    await mongoose.connect(process.env.url_bd);
    
}
module.exports = ConnectionBd();
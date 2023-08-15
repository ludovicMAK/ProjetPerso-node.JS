const mongoose = require('mongoose');
require('dotenv').config();
console.log(process.env.MONGO_URL);
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
  
}
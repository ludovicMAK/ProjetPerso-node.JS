const mongoose = require('mongoose');
require('dotenv').config();


async function connectBdd() {
    await mongoose.connect(process.env.MONGO_URL);
}

module.exports = connectBdd();
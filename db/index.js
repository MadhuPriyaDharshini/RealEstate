const mongoose = require('mongoose');

require('dotenv').config();

mongoose.set("strictQuery", false);

mongoose.connect(process.env.DATABASE,{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.once('open', () => {
    console.log('atlas started')
});

const db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'));

module.exports = db;
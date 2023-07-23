// this is for connecting to mongodb using the mongoose module
// this is similar to what we did with mysql and sequelize
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialmedia');

module.exports = mongoose.connection;
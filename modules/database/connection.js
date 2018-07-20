//mongoose is used for interacting with MongoDB
const mongoose = require('mongoose');

module.exports = () => {
    const dbHost = (process.env.MONGODB_URI);
    mongoose.connect(dbHost, {
        useMongoClient: true
    });
    return mongoose;
}
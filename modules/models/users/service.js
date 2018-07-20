const mongoose = require('./../../database/connection')();

//Create a schema for User
const userSchema = mongoose.Schema({
    name: String,
    nameFully: {
        type: String,
        index: true
    },
    email: String
});

//Create a Model by using the schema defined above
//Optionally one can provide the name of collection where the instances
//of this model get user. In this case it is "mongoose_demo". Skipping
//this value defaults the name of the collection to plural of model name i.e Users.
const user = mongoose.model('user', userSchema);

//Connecting to Mongod instance.
mongoose.connection;

module.exports.findAll = callback => {
    user.find({}, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

module.exports.findOne = (name, callback) => {
    user.findOne({
        name: name
    }, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}
module.exports.findOneByEmailOrCpf = (email, nameFully, callback) => {
    user.findOne({
        $or: [{
            email: email
        }, {
            nameFully: nameFully
        }]
    }, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

module.exports.addNewUser = (body, callback) => {
    new user({
        name: body.name,
        nameFully: body.nameFully,
        email: body.email
    }).save((err, result) => {
        if (err) throw err;
        callback({
            message: "Successfully added User",
            user: result
        });
    });
}

module.exports.editUser = (body, name, callback) => {
    user.findOne({
        name: name
    }, (err, result) => {
        if (err) throw err;

        if (!result) {
            callback({
                message: "User with name: " + name + " not found.",
            });
        }

        result.name = body.name;
        result.nameFully = body.nameFully;
        result.email = body.email;

        result.save((err, result) => {
            if (err) throw err;
            callback({
                message: "Successfully updated the User",
                user: result
            });
        });

    });
}

module.exports.deleteUser = (name, callback) => {
    user.findOneAndRemove({
        name: name
    }, (err, result) => {
        if (err) throw err;
        callback({
            message: "Successfully deleted the User",
            user: result
        });
    });
}
const mongoose = require('./../../database/connection')();

//Create a schema for Store
const storeSchema = mongoose.Schema({
    name: String,
    nameFully: {
        type: String,
        index: true
    }
});

//Create a Model by using the schema defined above
//Optionally one can provide the name of collection where the instances
//of this model get stored. In this case it is "mongoose_demo". Skipping
//this value defaults the name of the collection to plural of model name i.e Stores.
const store = mongoose.model('store', storeSchema);

//Connecting to Mongod instance.
mongoose.connection;

module.exports.findOne = (name, callback) => {
    store.findOne({
        name: name
    }, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

module.exports.findAll = callback => {
    store.find({}, (err, result) => {
        if (err) throw err;
        callback(result);
    });
}

module.exports.addNewStore = (body, callback) => {
    new store({
        name: body.name,
        nameFully: body.nameFully
    }).save((err, result) => {
        if (err) throw err;
        callback({
            messaage: "Successfully added store",
            store: result
        });
    });
}

module.exports.editStore = (body, name, callback) => {
    store.findOne({
        name: name
    }, (err, result) => {
        if (err) throw err;

        if (!result) {
            callback({
                message: "Store with name: " + name + " not found.",
            });
        }

        result.name = body.name;

        result.save((err, result) => {
            if (err) throw err;
            callback({
                message: "Successfully updated the store",
                store: result
            });
        });

    });
}

module.exports.deleteStore = (name, callback) => {
    store.findOneAndRemove({
        name: name
    }, (err, result) => {
        if (err) throw err;
        callback({
            message: "Successfully deleted the store",
            store: result
        });
    });
}
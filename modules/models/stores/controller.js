const storesService = require("./service");

module.exports.getAllStores = callback => {
    console.log("Fetching all stores");
    storesService.findAll(callback);
}

module.exports.getStoreDetails = (params, callback) => {
    console.log("Fetching details for store with name: " + params.name);
    storesService.findOne(params.name, callback);
}

module.exports.addNewStore = (body, callback) => {
    console.log("Adding new store");
    storesService.addNewStore(body, callback);
}

module.exports.editStore = (body, name, callback) => {
    console.log("Editing store");
    storesService.editStore(body, name, callback);
}
module.exports.deleteStore = (name, callback) => {
    console.log("Deleting store");
    storesService.deleteStore(name, callback);
}
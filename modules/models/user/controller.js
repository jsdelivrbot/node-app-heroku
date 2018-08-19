const usersService = require("./service");

module.exports.getAllUsers = callback => {
    console.log("Fetching all users");
    usersService.findAll(callback);
}

module.exports.getUserDetails = (params, callback) => {
    console.log("Fetching details for user with name: " + params.name);
    usersService.findOne(params.name, callback);
}

module.exports.addNewUser = (body, callback) => {
    console.log("Adding new user");
    usersService.addNewUser(body, callback);
}

module.exports.editUser = (body, name, callback) => {
    console.log("Editing user");
    usersService.editUser(body, name, callback);
}
module.exports.deleteUser = (name, callback) => {
    console.log("Deleting user");
    usersService.deleteUser(name, callback);
}
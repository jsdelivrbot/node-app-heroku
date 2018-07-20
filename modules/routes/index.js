const userRoutes = require("./../models/users/index").route;
const storeRoutes = require("./../models/stores/index").route;

module.exports = app => {
    userRoutes(app);
    storeRoutes(app);
};
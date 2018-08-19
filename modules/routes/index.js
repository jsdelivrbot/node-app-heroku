const user = require("./../models/user/");
const store = require("./../models/store/");

module.exports = app => {
    user(app);
    store(app);
};
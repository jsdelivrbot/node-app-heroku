const usersController = require("./controller");

module.exports = app => {
    const path = '/users';

    // Get all Users html parsed
    app.get(`${path}/html`, (request, response) => {
        usersController.getAllUsers((results) => {
            response.render('pages/db', {
                results: results
            });
        });
    });

    // Get all Users
    app.get(`${path}`, (req, res) => {
        usersController.getAllUsers((results) => {
            res.json(results);
        });
    });

    // Get a User
    app.get(`${path}/:name`, (req, res) => {
        usersController.getUserDetails(req.params, (results) => {
            res.json(results);
        });
    });

    // Add a new User
    app.post(`${path}`, (req, res) => {
        /*
        usersController.addNewUser(req.body, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });

    // Update a User
    app.put(`${path}/:name`, (req, res) => {
        /*
        usersController.editUser(req.body, req.params.name, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });

    // Delete a User
    app.delete(`${path}/:name`, (req, res) => {
        /*
        usersController.deleteUser(req.params.name, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });
}
const storesController = require("./controller");

module.exports = app => {
    const path = '/stores';

    // Get all Stores html parsed
    app.get(`${path}/html`, (request, response) => {
        storesController.getAllStores((results) => {
            response.render('pages/db', {
                results: results
            });
        });
    });

    // Get all Stores
    app.get(`${path}`, (req, res) => {
        storesController.getAllStores((results) => {
            res.json(results);
        });
    });

    // Get a Store
    app.get(`${path}/:name`, (req, res) => {
        storesController.getStoreDetails(req.params, (results) => {
            res.json(results);
        });
    });

    // Add a new Store
    app.post(`${path}`, (req, res) => {
        /*
        storesController.addNewStore(req.body, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });

    // Update a Store
    app.put(`${path}/:name`, (req, res) => {
        /*
        storesController.editStore(req.body, req.params.name, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });

    // Delete a Store
    app.delete(`${path}/:name`, (req, res) => {
        /*
        storesController.deleteStore(req.params.name, (results) => {
            res.json(results);
        });
        */
        return res.json([]);
    });
}

const models = require('../db/models');
const jwt = require('jsonwebtoken');
const bcrypt = require('../auth.js');


module.exports = function (app) {
    //Index
    app.get('/provider-dashboard', function (req, res) {
         // res.render('provider/:id/dashboard', {});
         res.send('Provider Dashboard');
     });

    /*****************************************
    * Pharmacy Dashboard Routes
    *****************************************/

    // SHOW
    app.get('/provider/:id/dashboard', (req, res) => {
        db.Pharmacy.findAll({ where: { include: [db.Patient] } }).then((pharmacy) => {
            res.json(pharmacy);
        })
    });
};
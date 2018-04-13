module.exports = function (app) {
    //Index
    app.get('/pharmacy-dashboard', function (req, res) {
         // res.render('pharmacy/:id/dashboard', {});
         res.send('Pharmacy Dashboard');
     });

    /*****************************************
    * Pharmacy Dashboard Routes
    *****************************************/

    // SHOW
    app.get('/pharmacy/:id/dashboard', (req, res) => {
        db.Pharmacy.findAll({ where: { include: [db.Patient] } }).then((pharmacy) => {
            res.json(pharmacy);
        })
    });

    // UPDATE
    app.put('/pharmacy/:id/dashboard/edit', (req, res) => {
        const PharmacyId = req.body.params;
        db.Pharmacy.update(pharmacyId).then((pharmacy) => {
            res.json(200);
            res.json({msg: 'successfully updated', pharmacy});
        }).catch((err) => {
            if(err) {
                res.json(err)
            }
        });
    });


  // DESTROY
    app.delete('/pharmacy/:id', (req, res) => {
        const pharmacyId = req.body.params;
        db.Pharmacy.destroy(pharmacyId).then((pharmacy) => {
            res.status(200);
            res.json({msg: 'successfully deleted', pharmacy});
        }).catch((err) => {
            if (err) {
                res.json(err);
            }
        });
    });
};
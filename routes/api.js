const db = require("../models");

module.exports = function (app) {
    app.get("/api/saved", function (req, res) {
        db.Fav.find({}, function (err, data) {
            if (data) res.json(data);
        })
    });
    app.post("/api/saved", function (req, res) {
        db.Fav.create(req.body);
    });
    app.get("/api/saved/:id", function (req, res) {
        db.Fav.deleteOne({
            _id: req.params.id
        }, function (err, data) {
            res.json(data);
        });
    });
}
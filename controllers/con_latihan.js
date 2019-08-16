const mongoose = require('mongoose'),
    Latihan = require("../models/model_latihan");

exports.create_a_task = function (req, res) {
    Latihan.create(req.body, function (err, hasilnya) {
        if (err) {
            res.send(err);
        }
        res.json(hasilnya);
    });
};

exports.get_all = function (req, res) {
    Latihan.find({}, function (err, hasilnya) {
        if (err) {
            res.json(err)
        }
        res.json(hasilnya)
    });
};
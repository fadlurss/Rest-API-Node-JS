var mongoose = require('mongoose');
var latihanSchema = new mongoose.Schema({
    nama_latihan: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model("Latihan", latihanSchema);
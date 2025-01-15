const mongoose = require("mongoose");

const OEMSpecsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    year: { type: Number, required: true },
    listPrice: { type: Number, required: true },
    availableColors: [String],
    mileage: { type: String, required: true },
    powerBHP: { type: Number, required: true },
    maxSpeed: { type: Number, required: true },
});

module.exports = mongoose.model("OEMSpecs", OEMSpecsSchema);
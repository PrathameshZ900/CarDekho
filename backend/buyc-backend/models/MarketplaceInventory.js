const mongoose = require("mongoose");

const MarketplaceInventorySchema = new mongoose.Schema({
    dealerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    carModel: { type: String, required: true },
    year: { type: Number, required: true },
    kmsDriven: { type: Number, required: true },
    majorScratches: { type: Boolean, default: false },
    originalPaint: { type: Boolean, default: true },
    accidentsReported: { type: Number, default: 0 },
    previousBuyers: { type: Number, default: 1 },
    registrationPlace: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
});

module.exports = mongoose.model("MarketplaceInventory", MarketplaceInventorySchema);
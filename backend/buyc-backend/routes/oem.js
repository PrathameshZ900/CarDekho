const express = require("express");
const OEMSpecs = require("../models/OEMSpecs");
const auth = require("../middlewares/auth");

const router = express.Router();

// Add OEM Spec
router.post("/add", auth, async (req, res) => {
    try {
        const oem = await OEMSpecs.create(req.body);
        res.status(201).json(oem);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get OEM Specs
router.get("/", async (req, res) => {
    try {
        const oems = await OEMSpecs.find();
        res.json(oems);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
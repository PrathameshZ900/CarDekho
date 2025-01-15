const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");

dotenv.config();
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(require("cors")());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/oem", require("./routes/oem"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
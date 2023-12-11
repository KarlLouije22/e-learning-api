const express = require("express");
const cors = require("cors")
const authRoute = require("./routes/auth");

const app = express();
const PORT = parseInt(process.env["PORT"] ?? "5000");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Mga routes
app.use("/auth", authRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
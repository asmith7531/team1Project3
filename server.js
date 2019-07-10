const express = require('express');

const mongoose = require("mongoose");
const routes = require("./routes");
const path = require('path');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(static("client/build"));
};

app.use(routes);

// connect to Mongo DB;
mongoose.connect(process.env.MONGODB_URI || "");

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
    console.log(`google books app is listening on ${PORT}`);
});
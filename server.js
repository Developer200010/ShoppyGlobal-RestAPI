const express = require("express");
const app = express();
require("dotenv").config()


app.listen(process.env.PORT, () => {
    console.log("port is running on 3000")
})
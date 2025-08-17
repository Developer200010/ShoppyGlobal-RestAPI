const express = require("express");
const app = express();
require("dotenv").config()
const userAuthRoute = require("./routes/userAuth.js")
//user route config
app.use("/user", userAuthRoute)


app.listen(process.env.PORT, () => {
    console.log("port is running on 3000")
})
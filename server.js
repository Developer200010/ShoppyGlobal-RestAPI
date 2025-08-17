const express = require("express");
const app = express();
require("dotenv").config()
const userAuthRoute = require("./routes/userAuth.js");
const productRoute = require("./routes/productsRoute.js");
//user route config
app.use("/user", userAuthRoute)

// product route is config
app.use("/products", productRoute);


app.listen(process.env.PORT, () => {
    console.log("port is running on 3000")
})
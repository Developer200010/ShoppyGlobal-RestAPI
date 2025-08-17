const router = require("express").Router();
const {register,login} = require("../controllers/userAuth.js")
// const Login = require("../controllers/userAuth.js")
router.post("/register",register);
router.post("/login", login)

module.exports = router;
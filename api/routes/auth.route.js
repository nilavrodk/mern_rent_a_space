const express = require("express");
const { signin } = require("../controllers/auth.controller");
const router = express.Router();
const signup = require("../controllers/auth.controller").signup;
router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;

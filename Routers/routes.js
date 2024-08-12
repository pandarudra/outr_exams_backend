const express = require("express");
const { post, get, getpaper } = require("../Controllers/paper.controller");
const router = express.Router();
//POST
router.post("/submit", post);
router.post("/get", get);
//GET
router.get("/get", getpaper);
//PUT

//DELETE
module.exports = router;

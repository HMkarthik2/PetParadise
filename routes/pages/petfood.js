const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.render("./HTML/LandingPages/petfoodLandingPage.ejs")
})

router.post("/", (req, res) => {

})

module.exports = router;
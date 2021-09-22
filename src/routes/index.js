const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
  res.render("index", { title: "Say Hello to the world, future Starminder!" });
});

router.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = router;

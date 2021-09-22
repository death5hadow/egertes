const express = require("express");
const router = express.Router();

router.get("/api/v1/users", (req, res) => {
  res.status(200).send([
    {
      email: 'john.mcclane@nakatomi.com'
    },
    {
      email: 'hans.gruber@nakatomi.com'
    }
  ])
});

module.exports = router;

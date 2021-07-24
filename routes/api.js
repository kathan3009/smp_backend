const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});
router.get("/names", (req, res) => {
  res.send({ message: "works" });
});
router.post("/class", (req, res) => {
  console.log(req.body);
  res.send({ message: "works" });
});

module.exports = router;

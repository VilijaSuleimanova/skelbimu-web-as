const express = require("express");
const router = express.Router();
const { Advertisments } = require("../models");


router.post("/register", async (req, res) => {
  const userRegisterDetails = req.body;
  await Users.create(userRegisterDetails);
  res.json(userRegisterDetails);
});

router.post("/login", async (req, res) => {
    const userLoginDetails = req.body;
    await Users.find(userLoginDetails);
    res.json(userLoginDetails);
  });

module.exports = router;

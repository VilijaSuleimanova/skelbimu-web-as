const express = require("express");
const router = express.Router();
const { Advertisments } = require("../models");

router.get("/", async (req, res) => {
  const listOfAdvertisments = await Advertisments.findAll();
  res.json(listOfPosts);
});

router.post("/newAd", async (req, res) => {
  const advertisment = req.body;
  await Advertisments.create(advertisment);
  res.json(advertisment);
});

module.exports = router;

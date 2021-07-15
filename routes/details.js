require('dotenv').config();
const express = require('express');
const router = express.Router();
const Details = require('./../models/Details');

// post , save details
router.post('/', async (req, res) => {
  let detailsText = req.body.details;

  let detail = new Details({
    details: detailsText,
  });

  // every detail , card click save to db
  await detail.save();

  console.log('Details was saved.');

  res.json({ msg: detailsText });
});

module.exports = router;

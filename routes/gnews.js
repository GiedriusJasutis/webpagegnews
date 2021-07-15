require('dotenv').config();
const express = require('express');
const router = express.Router();
const axios = require('axios');
const { body, validationResult } = require('express-validator');
const lang = 'en';
const handleErrors = require('./../utils/handleErrors');
const Searches = require('./../models/Searches');

// post gnews by search keyword
router.post(
  '/',
  [
    body('searchKeyword', 'Please enter text').not().isEmpty(),

    body('searchKeyword', 'Search text is to long').isLength({ max: 40 }),
  ],
  async (req, res) => {
    let searchKeyword = req.body.searchKeyword;
    let search = new Searches({
      searchKeyword,
    });
    // every search keyword save to db
    await search.save();

    console.log('Search keyword was saved');

    // request validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const url = `https://gnews.io/api/v4/search?q=${searchKeyword}&lang=${lang}&token=${process.env.API_TOKEN}`;

    // fetch api data
    try {
      const response = await axios.get(url);
      res.json(response.data);
    } catch (error) {
      handleErrors(res, error);
    }
  }
);

module.exports = router;

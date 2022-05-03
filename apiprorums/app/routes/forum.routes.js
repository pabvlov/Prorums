const express = require('express');
const router = express.Router();
const forums = require('../services/forum.service.js');

router.get('/forums', async function(req, res, next) {
  try {
    res.json(await forums.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting forums `, err.message);
    next(err);
  }
});

router.get('/forum/:id', async function(req, res, next) {
  try {
    res.json(await forums.getById(req.params.id));
  } catch (err) {
    console.error(`Error while getting forum `, err.message);
    next(err);
  }
});

module.exports = router;

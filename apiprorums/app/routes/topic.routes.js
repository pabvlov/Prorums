const express = require('express');
const router = express.Router();
const topic = require('../services/topic.service.js');

router.get('/topics', async function(req, res, next) {
  try {
    res.json(await topic.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting topics `, err.message);
    next(err);
  }
});

router.get('/topics/:id', async function(req, res, next) {
  try {
    res.json(await topic.getByForum(parseInt(req.params.id)));
  } catch (err) {
    console.error(`Error while getting topics from that forum `, err.message);
    next(err);
  }
});

router.get('/topic/:id', async function(req, res, next) {
  try {
    res.json(await topic.getById(parseInt(req.params.id)));
  } catch (err) {
    console.error(`Error while getting that topic `, err.message);
    next(err);
  }
});

module.exports = router;
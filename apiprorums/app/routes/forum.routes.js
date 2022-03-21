/* const express = require('express');
const app = express();
 
const forumRoute = express.Router();
let Book = require('../models/Forum');
 
// Add Book
forumRoute.route('/add-forum').post((req, res, next) => {
    Book.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
 
// Get all Book
forumRoute.route('/').get((req, res) => {
    Book.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
// Get Book
forumRoute.route('/see-forum/:id').get((req, res) => {
    Book.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
 
 
// Update Book
forumRoute.route('/update-forum/:id').put((req, res, next) => {
    Book.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('forum updated successfully!')
    }
  })
})
 
// Delete Book
forumRoute.route('/delete-forum/:id').delete((req, res, next) => {
    Book.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
 
module.exports = forumRoute; */

const express = require('express');
const router = express.Router();
const users = require('../services/forum.service.js');

router.get('/forums', async function(req, res, next) {
  try {
    res.json(await users.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting categories `, err.message);
    next(err);
  }
});

module.exports = router;
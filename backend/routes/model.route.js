const express = require('express');
const app = express();
const modelRoute = express.Router();

// Model model
let Model = require('../models/models');

// Add Model
modelRoute.route('/create').post((req, res, next) => {
  Model.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Models
modelRoute.route('/').get((req, res) => {
  Model.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Model
modelRoute.route('/read/:id').get((req, res) => {
  Model.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Model
modelRoute.route('/update/:id').put((req, res, next) => {
  Model.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

// Delete Model
modelRoute.route('/delete/:id').delete((req, res, next) => {
  Model.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = modelRoute;

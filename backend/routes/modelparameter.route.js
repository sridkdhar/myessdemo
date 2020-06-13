const express = require('express');
const app = express();
const modelparameterRoute = express.Router();

// Model model
let Modelparameter = require('../models/modelparameters');

// Add Model
modelparameterRoute.route('/create').post((req, res, next) => {
  Modelparameter.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Models
modelparameterRoute.route('/').get((req, res) => {
  Modelparameter.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single Model
modelparameterRoute.route('/read/:id').get((req, res) => {
  Modelparameter.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update Model
modelparameterRoute.route('/update/:id').put((req, res, next) => {
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
modelparameterRoute.route('/delete/:id').delete((req, res, next) => {
  Modelparameter.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = modelparameterRoute;

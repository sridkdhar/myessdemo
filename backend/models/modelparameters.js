const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Model_Parameters = new Schema({
    id: {
      type: String
   }, 
    Model_Type: {
      type: String
   },
    Parameter_Name: {
      type: String
   },
    Display_Name: {
      type: String
   },
    Min_Value : {
      type: String
   },
    Max_Value : {
      type: String
   },
    Default_Value : {
      type: String
   },
    Type: {
      type: Number
   },
    Y_Var_Type: {
      type: String
   },
    Description: {
      type: String
   },
}, {
   collection: 'Model_Parameters'
})

module.exports = mongoose.model('Model_Parameters', Model_Parameters)

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Model_Repo = new Schema({
    id: {
      type: String
   },
    Model_Type:{
      type: String
   },
    Function_Name: {
      type: String
   },
    Path: {
      type: String
   },
    Y_Var_Type: {
      type: String
   },
    Display_Name: {
      type: String
   },
    Insert_Date: {
      type: Date, default: new Date
   },
    Last_Updated_On: {
      type: Date, default: new Date
   }
}, {
   collection: 'Model_Repo'
})

module.exports = mongoose.model('Model_Repo', Model_Repo)

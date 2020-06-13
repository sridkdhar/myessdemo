const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let User = new Schema({
   User_Name: {
      type: String
   },
   Password: {
      type: String
   },
   First_Name: {
      type: String
   },
   Last_Name: {
      type: String
   },
   Email: {
       type: String
   },
   Phone: {
       type: Number
   },
   Role: {
       type: String
   },
   Token: {
       type: String
   }

}, {
   collection: 'Users'
})

module.exports = mongoose.model('Users', User)

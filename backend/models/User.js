const { model, Schema } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  entryUpdateHistory: [{
    type: Schema.Types.ObjectId,
    ref: 'vEntry'
  }]
})

// adding this later
// User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
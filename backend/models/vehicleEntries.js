const { model, Schema } = require('mongoose')

const vEntry = new Schema({
    year: {
        type: Number,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    trim: {
        type: String,
        required: false
    },
    engine: {
        type: String,
        required: false
    },
    transmission: {
        type: String,
        required: false
    }
  }, {timestamps: true})

  module.exports = model('vEntry', vEntry)
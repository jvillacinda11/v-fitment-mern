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
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    transmission: {
        type: String,
        required: false
    }
  }, {timestamps: true})

  module.exports = model('vEntry', vEntry)
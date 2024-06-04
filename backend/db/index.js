module.exports = require('mongoose').connect(process.env.MONGODB_URI || 'mongodb://localhost/memeMonarch_db', {
    // next three lines of code have been depreciated
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false
})
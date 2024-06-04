const router = require('express').Router()

// All functionality is going to be behind a login. The following routes will be
// used as the skeleton to follow later in development


// router.use('/api', require('./loginRoutes.js'))
// router.use('/api', require('./searchRoutes.js'))
// router.use('/api', require('./managerRoutes.js'))
// router.use('/api', require('./adminRoutes.js'))

// This is my temporary route for the current stage in development.
router.use('/api', require('./tempRoutes.js'))

module.exports = router
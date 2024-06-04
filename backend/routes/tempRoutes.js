const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({mssg: 'GET'})
})

router.post('/', (req, res) => {
    res.json({mssg: 'POST'})
})

router.delete('/', (req, res) => {
    res.json({mssg: 'DELETE'})
})

router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE'})
})


module.exports = router
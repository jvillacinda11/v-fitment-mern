const router = require('express').Router()
const {createEntry,
    getAllVEs,
    deleteVEntry
} = require('../controllers')

router.get('/', getAllVEs)

router.post('/', createEntry)

router.delete('/:id', deleteVEntry)

router.patch('/', (req, res) => {
    res.json({mssg: 'UPDATE'})
})


module.exports = router
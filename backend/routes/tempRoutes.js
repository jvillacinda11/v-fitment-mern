const router = require('express').Router()
const {
    createEntry,
    getAllVEs,
    deleteVEntry,
    updateVEntry
    } = require('../controllers')

router.get('/all', getAllVEs)

router.post('/', createEntry)

router.delete('/:id', deleteVEntry)

router.patch('/:id', updateVEntry)


module.exports = router
require('dotenv').config()
const express = require ('express')

const app = express()

app.listen(4000, () => {
    console.log('listening to port 4000')
})

process.env
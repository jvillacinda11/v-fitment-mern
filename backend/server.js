require('dotenv').config()

const express = require ('express')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use(require('./routes'))

require('./db')
.then(() => { 
    app.listen(process.env.PORT, () => {
        console.log('connected to db and listening on port', process.env.PORT)
    })
})
.catch(err => console.log(err))


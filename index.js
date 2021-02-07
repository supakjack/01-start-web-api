const express = require('express')

const app = express()

const indexRouter = require('./routes/index.route')

app.use('/', indexRouter)

app.listen(3001, () => console.log('run at http://localhost:3001'))

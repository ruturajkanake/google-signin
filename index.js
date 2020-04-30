const express = require('express')
const Router = require('./routes')
const app = express()

app.use(express.json())
app.use(Router)
app.use(express.urlencoded({ extended: false }))

const port = process.env.PORT

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
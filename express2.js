const express = require('express')
const app = express()
const peopleR = require('./routes/people')
const authR = require('./routes/auth')

//middleware to show static assets
app.use(express.static('./methods-public'))
//middleware to parse form data
app.use(express.urlencoded({extended:false}))
//middleware to parse json
app.use(express.json())
//middleware to get router
app.use('/api/people',peopleR)
app.use('/login',authR)

app.listen(5001,() => {
    console.log("server is up and running")
})
const express = require('express')
const app = express()
const port = 5000 || process.env.PORT
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')

if (mongoose.connect("mongodb://localhost:27017/expense",{ useNewUrlParser: true, useUnifiedTopology: true })) {
    console.log("Connected to Database");
}


app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//app.use('/api',require('./routes/user.routes'))

const userRouter = require('./routes/user.routes')
app.use('/api/user',userRouter)

app.listen(port,()=>{
    console.log('Port running on '+port)
})
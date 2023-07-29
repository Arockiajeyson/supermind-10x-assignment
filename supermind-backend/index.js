const express =require('express')
const app =express()
const mongoose =require('mongoose')
const cors =require('cors')
app.use(cors())
app.use(express.json())
app.use('/login',require('./Login'))
app.use('/register',require('./register'))
app.use('/upload',require('./Blog'))

app.listen(3004,async()=>{
    await mongoose.connect('mongodb+srv://Aro:aro123@arockiajeyson.aswzaya.mongodb.net/?retryWrites=true&w=majority')
    console.log('dbconnented')
    console.log('port')
})
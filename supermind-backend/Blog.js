const express =require('express')

const app =express()
const Schema =require('./PostSchema')
const JWT =require('./JWT')
app.post('/geting',JWT,async(req,res)=>{
    try {
        const find =await Schema.find({Detail:req.user})
        return res.json(find)
    } catch (error) {
        return res.json(error.message)
    }
})

app.post('/checking',JWT,async(req,res)=>{
    try {
        const find =await Schema.find({Detail:req.user})
        if(find.length==0){
            return res.json('No data available')
        }else{
            return res.json('Successful')
        }
    } catch (error) {
        return res.json(error.message)
    }
})

app.post('/posting',JWT,async(req,res)=>{
    try {
        req.body.Detail=req.user  
        const create =await Schema.create(req.body)
        return res.json('uploaded')
    } catch (error) {
        return res.json(error.message)
    }
})
module.exports=app
const express =require('express')
const bcrypt = require('bcrypt');
const app =express()

const Shema =require('./SchemaCre')

app.post('/',async (req,res)=>{
    try {
        console.log(req.body)
        const find =await Shema.findOne({Email:req.body.Email})
        if(find) {
            return res.json('Data exist already')
        }
        else{ 
            const hashing =await bcrypt.hash(req.body.Password, 10);
            req.body.Password =hashing
            console.log(hashing)
            const storingDb =await Shema.create(req.body)
            return res.json('Successful')
        }
    } catch (error) {
       return res.json(error)
    }
})

module.exports=app
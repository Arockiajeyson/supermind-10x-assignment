const mongoose =require('mongoose')

const dataSch =new mongoose.Schema({
    Email:{type:String},
    Password:{type:String}
})

const mode =mongoose.model("SuperMind",dataSch)

module.exports=mode
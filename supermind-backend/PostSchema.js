const mongoose =require('mongoose')

const dataSch =new mongoose.Schema({
    Title:{type:String},
    Dis:{type:String},
    img:{type:String},
    Detail :{type:mongoose.Types.ObjectId,ref:"SuperMind"}
})

const mode =mongoose.model("SuperPost",dataSch)

module.exports=mode
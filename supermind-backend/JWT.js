const jwt =require('jsonwebtoken')

const JWt = (req,res,next)=>{
    try {
        
        const token =req.headers.authorization
        if(token){
            const result =jwt.verify(token,'serc')
            if(result){
                req.user=result.data
                next()
            }else{
                res.json('invalid token')
            }
        }else{
            return res.json('forbiddin')
        }
    } catch (error) {
        return res.json(error.message)
    }
}
module.exports=JWt
const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET

const authMiddleware = (req,res,next) => {
    const authHeaders = req.headers.authorization
    if(!authHeaders || !authHeaders.startsWith('Bearer ')){
        return res.status(404).json({
            msg: "Login Again"
        })
    }
    try{
        const token = authHeaders.split(" ")[1]
        const decoded = jwt.decode(token,JWT_SECRET)
        req.userId = decoded.userId
        next()
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Something went wrong!!!"
        })
    }
}

module.exports = authMiddleware
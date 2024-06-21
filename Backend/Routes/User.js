const express = require("express")
const UserRouter = express.Router()
const { Users } = require('../db')
const { Cart } = require('../db')
const zod = require('zod')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const JWT_SECRET = process.env.JWT_SECRET
const authMiddleware = require("../middleware")


const signUpuser = zod.object({
    name: zod.string().max(20),
    email: zod.string().email(),
    password: zod.string().min(6),
    phone: zod.string().min(10).max(10),
})

UserRouter.post('/signup',async (req,res)=>{
    const userdata = signUpuser.safeParse(req.body)
    if(!userdata.success){
        console.log(userdata.error)
        return res.status(400).json({
            msg: "Invalid Input!"
        })
    }
    const existing = await Users.findOne({ email: req.body.email })
    if(existing){
         return res.status(409).json({
          msg: "User Already exists"  
        })
    }

    const salt = await bcrypt.genSalt(10)
    let securedPassword = await bcrypt.hash(req.body.password,salt)

    try {
        const user =await Users.create({
            name: req.body.name,
            email: req.body.email,
            password: securedPassword,
            phone: req.body.phone,
        }) 
        const cart = await Cart.create({
            userId : user._id,
            items: []
        })
        const token = jwt.sign({
            userId : user._id
        },JWT_SECRET)
        console.log(token)
        return res.status(200).json({
            msg: "Sign Up Succesful",
            token: token
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            msg: "Problem Occurred!!..."
        })
    }
})

const signInUser = zod.object({
    email: zod.string().email(),
    password: zod.string().min(6)
})


UserRouter.post('/login',async(req,res)=>{
    const userdata = signInUser.safeParse(req.body)
    if(!userdata.success){
        return res.status(409).json({
            msg: "Invalid Input!!"
        })
    }
    try{
        const userExist = await Users.findOne({email: req.body.email})
        const decryptPassword =await bcrypt.compare(req.body.password,userExist.password)

        if(userExist && decryptPassword){
            const token = jwt.sign({
                userId : userExist._id
            },JWT_SECRET)
            return res.status(200).json({
                msg: "Login Successfull",
                token: token
            })
        }else{
            return res.status(404).json({ 
                msg: "Invalid input"
            })
        }
    }catch(error){
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
})  


UserRouter.get("/getuser",authMiddleware,async (req,res)=>{
    const userId = req.userId

    try {
        const response = await Users.findOne({_id: userId})
        res.status(200).json({
            name: response.name,
            phone: response.phone
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            msg: "did not find user!!!"
        })
    }

    


})

module.exports = UserRouter

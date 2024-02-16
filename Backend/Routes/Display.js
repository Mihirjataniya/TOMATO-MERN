const express =  require("express")
const { default: mongoose } = require("mongoose")
const DisplayRouter = express.Router()


DisplayRouter.get('/data',async (req,res)=>{
    try{
        const food_item_collection = await mongoose.connection.db.collection('Food_items')
        const food_items =await food_item_collection.find().toArray()
        const food_category_collection = await mongoose.connection.db.collection('Food_category')
        const food_category = await food_category_collection.find().toArray()
    return res.status(200).json({
        food_items: food_items,
        food_category: food_category
    })
    }catch(error){
        return res.status(500).json({})
    }
})



module.exports = DisplayRouter

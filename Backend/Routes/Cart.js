const express = require('express')
const CartRouter = express.Router()
const { Cart } = require('../db')
const authMiddleware = require('../middleware')


CartRouter.post('/additems', authMiddleware, async (req, res) => {
    const item_id = req.body.item_id
    const itemname = req.body.itemname
    const price = req.body.price
    const qty = req.body.qty
    const userId = req.userId

    try {
        const cart =await Cart.findOne({userId})
        if (cart) {
            cart.items.push({
                item_id,
                itemname,
                price,
                qty
            })
            await cart.save()
        } else if (!cart) {
            Cart.create({
                userId,
                items: [{
                    item_id,
                    itemname,
                    price,
                    qty 
                }]
            })
        }
        
        return res.status(200).json({
            msg: "item added to the cart successfully"
        })
    } catch(error) {
        console.log(error)
        return res.status(404).json({
            msg:  "Cannot add the item"
        })
    }
})


CartRouter.get('/getitems',authMiddleware,async(req,res)=>{
    const userId = req.userId
    try{
        const cart = await Cart.findOne({userId})
        if(cart){
            return res.status(200).json({
                items: cart.items.map((item)=>({
                    item_id: item.item_id,
                    name: item.itemname,
                    price: item.price,
                    qty: item.qty,
                }))
            })
        }else{
            return res.status(404).json({
                msg:  "Cart does not exist"
            })
        }
    }catch(error){
        console.log(error)
        return res.status(500).json({
            msg: "Something went wrong"
        })
    }
})

CartRouter.post('/removeitem',authMiddleware,async(req,res)=>{
    const userId = req.userId
    const id = req.body.id
    console.log(id)
    try {
        let cart = await Cart.findOne({ userId });
        const index = cart.items.findIndex(item => item.item_id.equals(id));
        console.log(index)
      
        if (index !== -1) {
            cart.items.splice(index, 1);
        }
        await cart.save();
        return res.status(200).json({
            msg: "Item deleted",
            updatedItem: cart.items.map((item)=>({
                item_id: item.item_id,
                name: item.itemname,
                price: item.price,
                qty: item.qty,
            }))
        })
    } catch (error) {
        console.log(error)
        res.status(404).json({
            msg:"could not delete the item"
        })
    }
})


module.exports = CartRouter
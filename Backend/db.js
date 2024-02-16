const mongoose = require('mongoose')
const { number } = require('zod')

mongoose.connect(process.env.DATABASE)

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    phone: {
        type: String,
        required: true,
    },
})

const CartSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
        required: true
    },
    items: [{
        item_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food_items',
            required: true
        },
        itemname: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        qty: {
            type: Number,
            required: true
        }
    }]


})

const Users = mongoose.model('Users', UserSchema)
const Cart = mongoose.model('Cart', CartSchema)

module.exports = {
    Users,
    Cart
}
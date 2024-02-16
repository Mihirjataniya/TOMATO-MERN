const express = require('express')
const UserRouter = require('./User')
const DisplayRouter = require('./Display')
const CartRouter = require('./Cart')
const router = express.Router()

router.use('/User',UserRouter)
router.use('/Display',DisplayRouter)
router.use('/Cart',CartRouter)

module.exports = router

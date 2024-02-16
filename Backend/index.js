require('dotenv').config()
const express = require("express")
const cors = require('cors')
const app = express()
const port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json())
const RootRouter = require('./Routes/index')

app.use('/api/v1',RootRouter)


app.listen(port,()=>{
    console.log("Server is live on " +port)
})
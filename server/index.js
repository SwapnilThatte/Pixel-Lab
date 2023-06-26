const express = require('express')
const helmet = require('helmet')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()
dotenv.config()
const PORT = process.env.PORT | 5000

// Database Connection
mongoose.connect(process.env.DB_CONNECT, () => {
   console.log(`Connected to MongoDB Database`)
})

app.use(helmet())
app.listen(PORT, () => {
   console.log(`Server Started on Port ${PORT}`)
})
const express = require("express")
const {connectMongoDb} = require('./connection')
const userRouter = require('./routes/user')


const app = express()
const PORT = 8002
app.use(express.urlencoded({ extended: false }));


// connection
connectMongoDb()
.then(() => console.log('mongo db connected'))

// routes
app.use('/user', userRouter)


app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})



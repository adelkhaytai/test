const express = require("express")
const app = express()
const path = require("path")
const dotenv = require("dotenv")
const logger = require("morgan")
const cookieParser = require("cookie-parser")
const Router = require("./routes/payment")
const { Add } = require("./controllers/paymentController")

dotenv.config()
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(logger("dev"))


app.use("/api/",Router)
// app.use("/",(req,res)=>{
//     console.log("server working")
// } )
const port = process.env.PORT
app.listen(port , (error)=>{
    error ? console.log(`server not working ${error}`)
    : console.log(`server running at port ${port}`)
})

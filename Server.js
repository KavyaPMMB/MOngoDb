const express=require("express")
const router = require("./Router/TestRouter")
const connection=require("./Congi/Mong")
const dotenv=require('dotenv')
connection()
const app=express()


app.use(express.json())
app.use('/',router)

app.get('/',(req,res)=>{
    res.send('Running')
})
dotenv.config()



const port=process.env.port || 4000
app.listen(port,console.log(`Server is Running on ${port}`))
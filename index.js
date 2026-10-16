import express from "express"
import cors from 'cors'
import route from "./routes/authRoute.js"
import dotenv from 'dotenv'
import connectDb from "./config/db.js"
const app = express()

app.use(express.json())
app.use(cors())
connectDb()
dotenv.config();

const Port = process.env.Port || 3000

app.use("api/auth",route)

app.listen(Port ,()=>{
       console.log(`server running on http://localhost${Port}`);
       
})

//http://localhost/api/auth/studentData
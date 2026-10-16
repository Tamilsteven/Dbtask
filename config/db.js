import mongoose from "mongoose";

import dotenv from "dotenv"

dotenv.config()

const connectDb = async()=>{
    try {
          const con = await mongoose.connect(process.env.MONGO_URI)
          console.log('Db connected ',);
          

    } catch (error) {
        console.log("error",error);
        process.exit(1);
      
    }
      
}
export default connectDb;
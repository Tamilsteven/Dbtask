import mongoose, { model } from "mongoose";


const students = mongoose.Schema({

    name:String,
    age:Number,
    email:String,
    course:String,
    
})


const studentModel = mongoose.model("modelData",students);

export default studentModel;
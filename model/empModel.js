import mongoose from "mongoose";

const employeeData = new mongoose.Schema({
         ename:String,
         department:String,
         email: String,
         salary:Number
})

const employeeModel = mongoose.model("empmodel",employeeData)

export default employeeModel;
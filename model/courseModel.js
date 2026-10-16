import mongoose from "mongoose";

const courses = new mongoose.Schema({
       courseName:String,
       trainerName:String,
       Duration:String,
       fees:Number

})

const courseDetails = mongoose.model("courseData",courses);
export default courseDetails;
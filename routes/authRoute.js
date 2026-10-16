import express from 'express'
import { postData ,getData, getId, deletdData, postEmp, empData, empId, deleteEmp, productData, getProduct, fetchProduct, deleteProduct, courseData, getCourse, selectedCourse, deleteCourse} from '../controllers/authController.js';


const route = express.Router();

   route.post("studentData",postData);
   route.get("getData",getData);
   route.get("getid/:id",getId);
   route.delete("deleteData/:id",deletdData);

   route.post("empData",postEmp);
   route.get("getallEmpData",empData);
   route.get("singleEmp/:id",empId);
   route.delete("deleteEmp/:id",deleteEmp);

   route.post("productData",productData);
   route.get("getproductData",getProduct);
   route.get("singleProduct/:id",fetchProduct);
   route.delete("deleteProduct/:id",deleteProduct);

   route.post("productData",courseData);
   route.get("getproductData",getCourse);
   route.get("singleProduct/:id",selectedCourse);
   route.delete("deleteProduct/:id",deleteCourse);


export default route;


//http://localhost:5000/api/auth/studentData  -insert
//http://localhost:5000/api/auth/getData      -fetch all
//http://localhost:5000/api/auth/getid/123456789  - fetch single data
//http://localhost:5000/api/auth/deleteData123456789  - delete all data
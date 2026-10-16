  import studentModel from "../model/authModel.js"
  import employeeModel from "../model/empModel.js";
  import productModel from "../model/product.js";
  import courseDetails from "../model/courseModel.js";
  export const postData = async (req ,res)=>{

      try {
             const{name,email,age,course} = req.body;

               if(name =="" || email =="" || age =="" || course ==""){
                       res.status(400).json("msg: field must be filled ");
                       return
      }
                if(age <18){
                     res.status(400).json("msg:age must be 18 or above")
                }

               const add = await studentModel.create({
                  name ,email ,age , course
               })

                 res.status(201).json("successfully done",add)
        
      } catch (error) {
           console.log("error",error);

           
           
        
      }
  }


  export const getData = async(req,res)=>{
       
        try {
          
             const recieve = await studentModel.find();
               res.status(200).json({"userdata":recieve})

        } catch (error) {
            
            console.log("error",error)
        }

  }


  export const getId  = async(req,res)=>{
           
     try {

           const{userid } = req.params;

           const getbyId = await studentModel.findById(userid)
             res.status(200).json({"id":getbyId});
      
     } catch (error) {
         log("error",error)
      
     }

  }

  export const deletdData  = async(req,res)=>{
           
     try {

           const{userid } = req.params;

           const deleteId = await studentModel.findByIdAndDelete(userid)
             res.status(200).json({"DeletdId":deleteId});
      
     } catch (error) {
         log("error",error)
      
     }

  }








  export const postEmp = async (req ,res)=>{

      try {
             const{name,department,salary,email} = req.body;

               if(name =="" || email =="" || department =="" || salary ==""){
                       res.status(400).json("msg: field must be filled ");
                       return
      }
                if(salary<0){
                     res.status(400).json("msg:salary must be greater than 0")
                }

               const add = await employeeModel.create({
                  name ,email ,department , salary
               })

                 res.status(201).json("successfully done",add)
        
      } catch (error) {
           console.log("error",error);

           
           
        
      }
  }

  export const empData = async(req,res)=>{
       
        try {
          
             const recieve = await employeeModel.find();
               res.status(200).json({"empdata":recieve})

        } catch (error) {
            
            console.log("error",error)
        }

  }


    export const empId  = async(req,res)=>{
           
     try {

           const{userid } = req.params;

           const getbyId = await employeeModel.findById(userid)
             res.status(200).json({"empid":getbyId});
      
     } catch (error) {
         log("error",error)
      
     }

  }

  export const deleteEmp  = async(req,res)=>{
           
     try {

           const{userid } = req.params;

           const getbyId = await employeeModel.findByIdAndDelete(userid)
             res.status(200).json({"empDeleteId":getbyId});
      
     } catch (error) {
         log("error",error)
      
     }

  }



  export const productData = async (req ,res)=>{

      try {
             const{pname,price,category,stock} = req.body;

               if(pname =="" || price =="" || category =="" || stock==""){
                       res.status(400).json("msg: field must be filled ");
                       return
      }
                if(price <0){
                     res.status(400).json("msg: price must be greater than 0 ")
                }

                if(stock == -1){
                     res.status(400).json("msg:stock cannot be negative")
                }
   
               const add = await productModel.create({
                  pname ,price ,category , stock
               })

                 res.status(201).json("successfully done",add)
        
      } catch (error) {
           console.log("error",error);

           
           
        
      }
  }

   export const getProduct = async(req,res)=>{
       
        try {
          
             const recieve = await productModel.find();
               res.status(200).json({"fetaching products ":recieve})

        } catch (error) {
            
            console.log("error",error)
        }

  }


   export const fetchProduct = async(req,res)=>{
       
        try {
                const{id} = req.params
             const recieve = await productModel.findById(id);
               res.status(200).json({"fetch single product":recieve})

        } catch (error) {
            
            console.log("error",error)
        }

  }


   export const deleteProduct = async(req,res)=>{
       
        try {
                const{id} = req.params
             const recieve = await productModel.findByIdAndDelete(id);
               res.status(200).json({"delete product":recieve})

        } catch (error) {
            
            console.log("error",error)
        }

  }



  export const courseData = async (req ,res)=>{

      try {
             const{courseName,trainerName,duration,fees} = req.body;

               if(courseName =="" || trainerName =="" || duration =="" || fees==""){
                       res.status(400).json("msg: field must be filled ");
                       return
      }
                if(fees <0){
                     res.status(400).json("msg:fees must be greater than 0 ")
                }

   
               const add = await courseDetails.create({
                      courseName,trainerName,duration,fees
               })

                 res.status(201).json("courseDetails created",add)
        
      } catch (error) {
           console.log("error",error);

        
      }
  }

  export const getCourse = async(req,res)=>{
         try {
                const getdeatils = await courseDetails.find();
                  res.status(200).json("msg : fetched all datas" ,getdeatils);
         } catch (error) {
                console.log("error",error);
                
         }
  }

   export const selectedCourse = async(req,res)=>{
         try {
                    const {id} = req.params
                const getdeatils = await courseDetails.findById(id);
                  res.status(200).json("msg : fetched single data from course" ,getdeatils);
         } catch (error) {
                console.log("error",error);
                
         }
  }


   export const deleteCourse = async(req,res)=>{
         try {
                    const {id} = req.params
                const deatils = await courseDetails.findByIdAndDelete(id);
                  res.status(200).json("msg : deleted course datas" ,deatils);
         } catch (error) {
                console.log("error",error);
                
         }
  }
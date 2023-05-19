const Emp = require("../empSchema");
//const bcrypt=require('bcrypt')

const CreateEmp1=async (req,res)=>{
    const {Firstname,Secondname,Age,Place,Email,Password}=req.body;
    //const salt=await bcrypt.genSalt(10)
    //const hashedpassword=await bcrypt.hash(Password,salt)
    const Empdetails=await Emp.create({
        Firstname,Secondname,Age,Place,Email,Password
    })
    res.json(Empdetails)
}
module.exports=CreateEmp1
const Emp = require("../empSchema")

const getempdetails=async (req,res)=>{
   
    //const getemp=await Emp.findById({_id:getempid})
    //if(getemp)
    //{
    //
    //const getempid=req.params.id
    //const getPlace=req.params.Place
    //const getfirstname=req.params.Firstname
    //const getsecondname=req.params.Secondname
    //const getemail=req.params.Email
    //const getemp=await Emp.find({Place:getPlace})
    //const getemp=await Emp.find({Firstname:getfirstname})
    //const getemp=await Emp.find({Firstname:'Kavya'})
    const getemp=await Emp.find()
    res.json(getemp)
   // }
    //else
    //{
      //  res.json("No Match");
    //}
}

module.exports=getempdetails

const User = require("../userSchema");


const Delete=async(req,res)=>{
    //const{Name,Email,Password}=req.body;
    //const id="64082100380d574eb9f1ad21"
    const _id=req.params.id
    const User1=await User.findByIdAndRemove(_id)
    res.json("User Deleted")
}

module.exports=Delete
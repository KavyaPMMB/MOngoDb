
const User = require("../userSchema");


const Update=async(req,res)=>{
    const{Name,Email,Password}=req.body;
    //const id="64081f5e380d574eb9f1ad1f"
    const _id=req.params.id
    const User1=await User.findByIdAndUpdate(_id,{Name,Email,Password})
    res.json(User1)
}

module.exports=Update
const User = require("../userSchema")

const getitems=async (req,res)=>{
    const getid=req.params.id
    const Userid=await User.findById({_id:getid})
    res.json(Userid)
}


module.exports=getitems
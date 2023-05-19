const jwt=require('jsonwebtoken')
const User = require("../userSchema");


const CreateUser4=async (req,res)=>{
    const {Name,Email,Password}=req.body;
    const Userdata = await User.findOne({ Email,Password });
    
    if(Userdata) {
        res.json("SUCCESS");
    }
    else
    {
    const Userdetails=await User.create({
       Name,Email,Password
    })
    res.json({
        Id:Userdetails._id,
        Name:Userdetails.Name,
        Email:Userdetails.Email,
        Password:Userdetails.Password,
        Token:tokengenerate(Userdetails._id),
    });
}}
const tokengenerate=(id)=>{
return jwt.sign({id},process.env.JWT_SECRET,{
    expiresIn:'1d',
})
}

module.exports=CreateUser4
//const mongoose=require('mongoose');
const User = require('../userSchema');
const bcrypt=require('bcrypt')

const CreateUser2=async(req,res)=> {
    
    const {Name,Email,Password}=req.body;
    const Username=await User.findOne({Name})
    if(Username)
    {
        res.json("not possible")
    }
    else{
    const salt=await bcrypt.genSalt(10)
    const hashedpassword=await bcrypt.hash(Password,salt)
    const Userdetails= await User.create({
        Name,Email,Password:hashedpassword
    })
    //const getname=req.params.Name
    res.json(Userdetails)
    

    }
}

module.exports=CreateUser2

//const mongoose=require('mongoose');
const User = require('../userSchema');
const bcrypt=require('bcrypt')

const CreateUser3 = async (req, res) => {
    
    const { Name, Email, Password } = req.body;
    const Userdata = await User.findOne({ Email });
    
    if(Userdata && (await bcrypt.compare(Password, Userdata.Password))) {
        res.json("Success");
    } else {
          const salt = await bcrypt.genSalt(10);
          const hashedpassword = await bcrypt.hash(Password, salt);
          const Userdetails = await User.create({ Name, Email, Password: hashedpassword });
          res.json(Userdetails);
        res.json("Failed")
    }
}

module.exports = CreateUser3;

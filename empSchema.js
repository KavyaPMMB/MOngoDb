const mongoose=require('mongoose')

const empSchema=mongoose.Schema({
    Firstname:{type:String},
    Secondname:{type:String},
    Age:{type:Number},
    Place:{type:String},
    Email:{type:String},
    Password:{type:String}
})
const Emp=mongoose.model('Emp',empSchema)


module.exports=Emp
const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    university_school:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    }
},{
    timestamps:true
});

const User=mongoose.model('User',userSchema);
module.exports=User;
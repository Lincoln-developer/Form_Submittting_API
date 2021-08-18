import Mongoose from "mongoose";

const schema = Mongoose.Schema;

//structuring the data type on user signup form
const user_signup_schema = new schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    }
},{collection:"Users"});

//user_sign_up model
const user_signup_model = Mongoose.model(

    "user_signup_model",user_signup_schema

    );

export default user_signup_model;
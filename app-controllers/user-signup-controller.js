import User  from "../user-model/user-signup-model.js";

import bcrypt from "bcryptjs";

const access_signup_form = (req,res) => {
    
}

const user_signup = async(req,res) => {
        bcrypt.hash(req.body.password,10,(err,hash) => {
            if(err){
                res.status(500).json({
                    error:err
                });
            }else{
                const user = new User({
                    username:req.body.username,
                    email:req.body.email,
                    password:hash
                });
                user.save()
                .exec()
                .then(result => {
                    res.status(201).json({
                        Created_Account:{
                            User:result,
                            message:"Account Created Successfully"
                        }
                    })
                })
                .catch(err => {
                    res.status(402).json({
                        message:err  
                    });
                }); 
            };
        });
};

export default user_signup;
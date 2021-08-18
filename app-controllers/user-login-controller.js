import bcrypt from 'bcryptjs';
import User from '../user-model/user-signup-model.js';
import jwt from 'jsonwebtoken'

const user_login = (req,res) => {
    User.find({email:req.body.email})
    .exec()
    .then(user => {
        if(user.length < 1){
            res.status(404).json({
               message:"Email not found, user doesn\t eist" 
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result) => {
            if(err){
                res.status(401).json({
                    message:"Authentication failure"
                })
            }
            if(result){
                const token = jwt.sign({
                    email:user[0].email,
                    userId:user[0]._id
                }, process.env.jwt_key,
                {
                    expiresIn:"1h"
                })
                res.status(200).json({
                    message:"Authentication successful",
                    token:token
                })
            }
        })
    })
    .catch(err => {
        if(err){
            res.status(500).json({
                error:err
            })
        }
    })
}

export default user_login;
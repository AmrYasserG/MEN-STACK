const User = require("../models/User");
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");

const addUser = async(req, res) => {
    const user =req.body;
    const takenEmail= await User.findOne({Email :user.Email})

    if(takenEmail){
        res.json({message: "Email alraedy signed up"})
    }
    else{
        user.password =await bcrypt.hash(req.body.password,10)

        const newUser= new User({
            Name: user.Name,
            Email : user.Email,
            password :user.password
        })
        newUser.save()
        res.json({message : "Success"})
    }
  };

  const loginUser = (req, res) => {
    const userLoggingIn =req.body;
     User.findOne({Email :userLoggingIn.Email}).then(dbUser=>{
         if(!dbUser){
             return res.json({
                 message : "Invalid Email"
             })
         }
         bcrypt.compare(userLoggingIn.password,dbUser.password).then(isCorrect =>{
             if(isCorrect){
                 const payload = {
                     id : dbUser._id,
                     Email: dbUser.Email
                 }
                 jwt.sign(
                     payload,
                     process.env.JWT_SECRET,
                     {expiresIn : 86400},
                     (err,token)=>{
                         if(err)return res.json({message:err})
                         return res.json({
                             dbUser,
                             message : "Success",
                             token : "Bearer "+ token
                         })
                     }


                 )
             } else{
                 return res.json({
                     message: "Invalid Email or Password"
                 })
             }
         })
     })

    
  };
  

  module.exports = {addUser,loginUser};
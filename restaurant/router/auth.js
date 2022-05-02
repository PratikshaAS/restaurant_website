const express=require("express")
const bodyParser = require('body-parser')
const feedbackRouter=express.Router();
const User=require("../model/userShema")


feedbackRouter.use(bodyParser.json());
feedbackRouter.route('/contact')
.post(async(req,res,next) =>{
    console.log(req.body);
    const {name,phone,email,message}=req.body;
    if(!name || !email|| !phone || !message)
    {
        console.log("plz fill the data properly");
        res.status(402).json({error:"plz fill the data properly"});
    }
    try{
        
        const usernew=new User({name:name,phone:phone,email:email,message:message});
        const userregister=await usernew.save();
        if(userregister)
        {
            console.log("user registered successsfully");
            res.status(201).json({message:"user contacted succesfully"})
        }
    }catch(error){
        console.log(error)
    }

    // res.end("output");
})
// // router.post('/contact',(req, res, next)=>{
//     console.log(req.body);
//     res.end("end here");
// // })
// router.post("/contact",async(req,res)=>{
//     const {name,phone,email,message}=req.body;
//     console.log(req);
//     res.end("post here");
    
// })
module.exports=feedbackRouter;
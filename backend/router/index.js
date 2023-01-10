var express=require('express')
var router=express.Router()
var User=require('../models/user')
var Appointment=require('../models/appointment')
router.post('/login',(req,res)=>{
    console.log("login request")
    console.log(req.body)
    const {email,password}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(user.password==password){
                res.send({
                    message:"user is in record",
                    email:user.email,
                    id:user.id,
                    name:user.name
                })
            }
            else{
                if(err){
                    res.send(err)
                }
                else{
                    res.send("user does not exist")
                }
            }
        }
    })

    
})

router.post("/signup",(req,res)=>{
    const{name,email,password,id}=req.body;
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password==user.password){
            res.send({
                message:"user already exist",
                name:user.name,
                email:user.email,
                id:user.id,
                
            })
        }
        }else {
            const user = new User({name,email,password,id})
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"sucessfull",
                    name:user.name,
                email:user.email,
                id:user.id,
            
                })
                }
            })
        }
    })
})

router.get("/dashboard",(req,res)=>{
    console.log(req)
    const {user_id}=req.query
    console.log(user_id)
    Appointment.find({user_id:user_id},(err,result)=>{
        if(err){
            console.log("error")
            
        }
        else{
           console.log("result")
           console.log(result)
            res.send(result)
        }
    })
   

})

router.post("/addappointment",(req,res)=>{
    const{name,email,description,date,time,user_id}=req.body;
    const appointment=new Appointment({user_id,name,email,description,time,date})
    appointment.save(err=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({
                message:"added",
                appointment_id:appointment._id,
                name:appointment.name,
                email:appointment.email,
                description:appointment.description,
                date:appointment.date,
                time:appointment.time,
                user_id:appointment.user_id
            })
        }
    })
})

router.delete("/delete/:id",(req,res)=>{
    console.log(req)
    Appointment.findByIdAndDelete(req.params.id,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
        

    })
}
)


router.put("/reschedule/:id",(req,res)=>{
    console.log(req)
    console.log(req.body)
    Appointment.findByIdAndUpdate(req.params.id,req.body,(err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

module.exports=router



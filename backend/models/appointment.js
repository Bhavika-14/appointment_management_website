
var mongoose=require('mongoose')
var Schema =mongoose.Schema
var AppointmentSchema=new Schema(
    {
        user_id:{type:String,maxLength:100},
        
        name:{type:String,maxLength:100},
        email:{type:String ,  maxLength:100},
        description:{type:String , maxLength:100},
        time:{type:String},
        date:{type:String}

    }
)


AppointmentSchema
    .virtual('url')
    .get(function(){
        return ''+this._id
    })

    module.exports=mongoose.model('Appointment',AppointmentSchema)

var mongoose=require('mongoose')
var Schema =mongoose.Schema
var userSchema=new Schema(
    {
        name:{type:String ,  maxLength:100},
        email:{type:String ,  maxLength:100},
        password:{type:String , maxLength:100},
        id:{type:Number},
    
    }
)


userSchema
    .virtual('url')
    .get(function(){
        return ''+this._id
    })

    module.exports=mongoose.model('user',userSchema)
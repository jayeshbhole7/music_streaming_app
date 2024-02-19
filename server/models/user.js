const mongo=require('mongoose');

const userSchema=new mongo.Schema({
    
    name:{
        type:String,
        required:true
    },
    
    userName:{
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
        validate:{
            validator: function(v){
                return /^(?=.*[A-Za-z])(?=.*\d|\W).{6,16}$/.test(v);
            },
            message:props=>`${props.value} is not valid password!`
        }
    },

    dateOfBirth:{
        type:Date,
        required:true
    },

    gender:{
        type:String,
        enum:['male','female','other'],
        required:true
    },


    playList:[{
        type: mongo.Schema.Types.ObjectId,
        ref:'Playlist'
    }],

});


module.exports = mongo.model('User', userSchema);

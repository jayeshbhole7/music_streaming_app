const mongoose = require('mongoose');

const playlistOutline=new mongoose.Schema({
    name:{type:String, required: true},
    song:[{type:mongoose.Schema.Types.ObjectId,ref:'Song'}]
});

module.exports=mongoose.model(
    'Playlist',playlistOutline
);
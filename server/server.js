const express=require('express');
const mongoose=require('mongoose');
const app=express();
// const axios=require('axios')
const cors=require('cors');
const authRoutes = require('./routes/authRoute');
app.use(cors());
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL).then(()=>console.log('mongo connected.^_^')).catch(error=>console.log(error));

const PORT=process.env.PORT;

app.use('/api/auth',authRoutes);

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`);
});

app.get('/server', async(_req,res)=>{
    res.send('hii')
});
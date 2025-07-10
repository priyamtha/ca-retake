const express= require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const port=3001;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{
    res.send('get routes')
})
app.post('/info',(req,res)=>{
    try{
        const {username,email,password,dateofbirth}=req.body;
        if(!username)
            return
        res.status(400).json({message:"username cannot be empty"});
        if (!email)
            return
        res.status(400).json({message:"Email cannot be enpty"});
        if (!password||password.length<8||password.length>16)
            return res.status(400).json({message:"password length should be between 8 and 16 characters"});
            return
        res.status(200).json({message:"Success"});


        
    }catch(e){
        console.log(e.message);
        res.status(500).json({message:"server Error"});
    }
});
app.listen(port,()=>{
    console.log(`sever connect successfully on port${port}`);
});

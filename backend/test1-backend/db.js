// import mongoose
const mongoose =require('mongoose')

const connectionstring = process.env.MONGODB_URL

mongoose.connect(connectionstring)
.then(()=>{
    console.log("connection established");
    
})
.catch((error)=>{
    console.log('connection error',error);
    
})
const list = mongoose.model("menu",{
    id:String,
    name:String,
    description:String

    })
    module.exports={
        list
    }
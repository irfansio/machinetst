// load env file
require('dotenv').config();
// import express
const express =require('express')
const cors =require('cors')
// backend application
const appserver =express()

// use application
appserver.use(cors({
    orging:('http:localhost')
})) //using cors with frontend localhost
appserver.use(express.json()) //middleware converstion of json data to js&js to json while api call

// port creation
const port = 5000||process.env.port

// import menucontroller
const menucontroller =require('./Controller/menucontroller')
//mongo db connection string
// const db =require('./db')

// import router
const router =require('./router/routes')
appserver.use(router);
// server listen
appserver.listen(port,()=>{
console.log('listening port 5000'+port);

})
// // http resolve http 4000
// appserver.get("/",(req,res)=>{
//     res.send("server started")
// })
// apicall for etting all menulist
appserver.get('/get-alllist-menu',(req,res)=>{
menucontroller.getalllistmenu().then((response)=>{ //response fetch allmenu deatils
    res.status(response.statuscode).json(response); 
})
})
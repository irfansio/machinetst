const db= require('../db')
// // get all details from the database(mongodb)
// exports.menu=(req,res)=>{
//     console.log("inside menu");
//     res.status(200).json("succesfully startedd ")
// }
const getalllistmenu=()=>{
    return db.list.find().then((result)=>{
        if(result){
             return{
                statuscode:200,
            list:result
             }
        }
        else{
    return{
        statuscode:404,
        message:"no data found"
    }
        }
    })
}
module.exports= {
    getalllistmenu
}
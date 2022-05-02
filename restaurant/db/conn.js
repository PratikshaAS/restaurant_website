const mongoose=require("mongoose");
const db=process.env.DATABASE
mongoose.connect("mongodb+srv://psolankar:prat0712@cluster0.srjiz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
//     , username='psolankar', password='prat0712',{
//     useNewUrlParser:true,
//     useUnifiedTopology:true
// }
).then(()=>{
    console.log("connection successfull");
}).catch((err)=>console.log("no connecton",err));
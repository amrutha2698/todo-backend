const mongoose=require('mongoose')

const mongoURL = 'mongodb+srv://amrutha:<password>@cluster0.8xe09fn.mongodb.net/?retryWrites=true&w=majority'
const connectionString=process.env.DATABASE

mongoose.connect(connectionString,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("MongoDB Atlas Connected Sucessfully..");
}).catch((err)=>{
    console.log(`MongoDB Connection Failed :${err}`);
})
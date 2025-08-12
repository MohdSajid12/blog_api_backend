import mongoose from "mongoose";

const connectDb = async()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`database connected successfully`);
    }).catch((err)=>{
         console.log("something went wrong , DB not connected :" , err.message);
         process.exit(1);
    })
}


export default connectDb;
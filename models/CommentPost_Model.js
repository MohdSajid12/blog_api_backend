import mongoose from "mongoose";

const commentPostSchema = new mongoose.Schema({    
    post : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "BlogPost"
    },
    user : {
        type : String,
        required : true,
    },
    body : {
        type : String,
        required : true
    }

})


const Comment = mongoose.model("Comment" , commentPostSchema);

export default Comment;
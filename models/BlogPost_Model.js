import mongoose from "mongoose";

const BlogPostSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    body : {
        type : String,
        required : true,
        maxLenth : 50
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Like"
    }],
    comments : [{
        type: mongoose.Schema.Types.ObjectId,
         ref : "Comment"
    }],
    createdAt : {
        type : Date,
        default : Date.now()
    },
    updatedAt :{
        type :Date,
        default :Date.now()
    }
})

const BlogPost = mongoose.model("BlogPost" , BlogPostSchema);

export default BlogPost;
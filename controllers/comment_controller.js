import BlogPost from "../models/BlogPost_Model.js";
import Comment from "../models/CommentPost_Model.js";

export const createComment = async (req , res)=>{
    try{
        const {postId , user , body} = req.body || {};

        const comment = new Comment({
           postId , user , body
        })
        const saveComment = await comment.save();

        const updatedPost = await BlogPost.findByIdAndUpdate(postId ,{$push : {comments : saveComment._id}},{new :true})
        .populate("comments")
        .exec();

        res.status(200).json({success : true , updatedPost , message : "Commented successfully"})

    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}
import BlogPost from "../models/BlogPost_Model.js";
import Like from "../models/LikePost_Model.js"
import Comment from "../models/CommentPost_Model.js";

export const likePost = async(req , res)=>{
      try{
          const {postId , user} =  req.body || {}
          if(!postId || !user){
            return res.status(401).json({success : false , message : "All fields required"})
          }
          const like = new Like({
             post :postId ,user
          })
          const response = await like.save();
          const updateBlog = await BlogPost.findByIdAndUpdate(postId , {$push : {likes : response._id}}, {new :true}).populate('likes')
          return res.status(200).json({success : true ,updateBlog , message : "Post liked successfully"});
      }
      catch(error){
         res.status(500).json({success : false , message : error.message})
      }

}

export const dislikePost = async (req ,res)=>{
    try{
         const {postId , likeId} = req.body || {};
         if(!postId || !likeId){
             return res.status(401).json({success :false , message : "All fields is required"});            
         }
         const deletelike = await Like.findByIdAndDelete(likeId)
         const updateBlog = await BlogPost.findByIdAndUpdate(postId , {$pull : {likes :likeId}},{new :true})
         return res.status(200).json({success : true , updateBlog , message : "post dislike successfully"});
    }
    catch(error){
        res.status(500).json({success :false , message : error.message})
        console.log(error);
    }
}
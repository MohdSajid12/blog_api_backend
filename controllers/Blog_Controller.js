import blogPostModel from "../models/BlogPost_Model.js"
import Like from "../models/LikePost_Model.js";
import Comment from "../models/CommentPost_Model.js";

export const createBlog = async(req ,res)=>{
    try{
         const {url ,title ,body} = req.body || {};
         if(!url || !title || !body){
            return res.status(400).json({success:false , message : "All fields required"});
         }
         const response = await blogPostModel.create({
            url , title , body
         })
         return res.status(200).json({success : true , response , message : "Blog created Successfully"})
    }
    catch(error){
        return res.status(500).json({success : false , message : error.message});
        console.log(error.message);
    }
}

export const getAllBlog = async(req,res)=>{
    try{
        const allBlog = await blogPostModel.find().populate('likes').populate('comments').exec();
        if(allBlog.length ==0){
            return res.status(404).json({success : false , message : "No blogs found"});
        }
        return res.status(200).json({success : true , allBlog, message : "Blog fetched successfully"})
    }
    catch(error){
        return res.status(500).json({success : false , message : error.message});
        console.log(error);
    }
}

export const updateBlogById = async(req,res)=>{
    try{      
        const id = req.params.id
        const {url , title,body} = req.body|| {};
        const blog = await blogPostModel.findById(id);
        if(!blog){
            return res.status(404).json({success : false , message : "Not found"});
        }
        const updateBlog = await blogPostModel.findByIdAndUpdate(id,{url ,title ,body ,updatedAt :Date.now()}, {new :true})         
        return res.status(200).json({success : true ,updateBlog , message : "updated successfully"} )

    }catch(error){
        res.status(500).json({success : false , message :error.message});
    }
}

export const findByIdAndDelete = async(req,res)=>{
    try{
         const id = req.params.id ||{}
         const blog = await  blogPostModel.find({_id:id})
         if(blog.length==0){
            return res.status(404).json({success :false , message : "Not found"});
         }
         await blogPostModel.findByIdAndDelete(id);
         return res.status(200).json({success : true , message : "Blog deleted successfully"});

    }
    catch(error){
        res.status(500).json({success : false , message : error.message})
    }
}
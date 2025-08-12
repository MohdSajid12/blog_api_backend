import mongoose from "mongoose";

const likePostSchema = new mongoose.Schema({
      post : {
              type : mongoose.Schema.Types.ObjectId,
              ref : "BlogPost"
          },
          user : {
              type : String,
              required : true,
          
          }
})

const Like = mongoose.model("Like" , likePostSchema);

export default Like;
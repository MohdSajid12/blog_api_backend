import express from 'express';
import { createBlog, findByIdAndDelete, getAllBlog, updateBlogById } from '../controllers/Blog_Controller.js';
import { createComment } from '../controllers/comment_controller.js';
import { dislikePost, likePost } from '../controllers/Like_Controller.js';

const router = express.Router();

//Blogs routes
router.post('/create' , createBlog)
router.get('/getAllBlog' , getAllBlog)
router.put('/updateBlogById/:id' , updateBlogById)
router.delete('/deleteBlogById/:id' , findByIdAndDelete)


//comment route
router.post('/comment/create' ,createComment)

//Like route
router.post('/like/like' ,likePost)
router.post('/like/dislike' ,dislikePost)


export default router;
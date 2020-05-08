const Blog = require("../models/blog");
const express = require("express");
const router = express.Router();
const {getAllBlogs, getBlogById, getFormForNewBlog, createNewBlog, getABlog, editABlog, removeBlog, updateBlog} = require("../controllers/blog")

//getting id
router.param("blogId", getBlogById);

 
 // INDEX ROUTE
 router.get("/blogs", getAllBlogs);


 
 // NEW ROUTE
 router.get("/blogs/new", getFormForNewBlog);
 
 // CREATE ROUTE
 router.post("/blogs", createNewBlog);
 
 // SHOW ROUTE
 router.get("/blogs/:blogId", getABlog);
 
 // EDIT ROUTE
 router.get("/blogs/:blogId/edit", editABlog)
 
 
 // UPDATE ROUTE
 router.put("/blogs/:blogId", updateBlog );
 
 // DELETE ROUTE
 router.delete("/blogs/:blogId", removeBlog);

 


module.exports = router;
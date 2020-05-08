const Blog = require("../models/blog");


exports.getBlogById = (req, res, next, id) => {
    Blog.findById(id).exec((err, blog) => {
        if(err || !blog){
            res.status(400).json({
                error: "No user was found in DB"
            });
        }

        req.blog = blog;
        next();
    });

};


exports.getAllBlogs = (req, res) => {
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("ERROR!");
        } else {
           res.render("index", {blogs: blogs}); 
        }
    });
};


exports.getFormForNewBlog = (req, res) => {
    res.render("new");
}


exports.createNewBlog = (req, res) => {
    const blog = new Blog(req.body.blog);
    blog.save((err, blog) => {
    if (err) {
        res.render("new")
    }
    else {
        res.redirect("/blog/blogs");
    }
      
    });
  };

  exports.getABlog = (req, res) => {
      res.render("show", {blog: req.blog})
  }


  exports.editABlog = (req, res) =>{
      res.render("edit", {blog: req.blog})
  }

  exports.updateBlog = (req, res) => {
    
    
    Blog.findByIdAndUpdate(req.blog, req.body.blog, (err, updatedBlog) => {
    if (err) {
        console.log(err)
    }
    else {
    Blog.findById(req.blog, (err, blog)=> {
        res.render("show", {blog: blog});
    })
    }
      
    });
  };
  


  exports.removeBlog = (req, res) => {
      const blog = req.blog;
      blog.remove((err)=>{
          if(!err){
              res.redirect("/blog/blogs")
          }
      })
  }


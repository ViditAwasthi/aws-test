//this Post is the post model which gives us the posts collection from the database
const Post = require("../models/post.js")


exports.getPosts = (req,res)=>{
   const allPosts = Post.find()
   .then((posts)=>{
       res.json({posts: posts});
   })
   .catch(err => console.log(err))
};

exports.createPost = (req,res) => {
const post = new Post(req.body)
post.save().then(result =>{
    res.status(200).json({
        post: result
    })
})
};
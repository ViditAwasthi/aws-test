const express = require("express");
const postController = require("../controllers/post")
const validator = require("../helpers/index")


const router = express.Router();



router.get("/",postController.getPosts)

router.post("/createPost",postController.createPost)



module.exports = router

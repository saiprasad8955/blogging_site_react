const express = require("express");
const router = express.Router();

const { createAuthor, loginAuthor } = require("../controllers/authorController.js");
const { createBlogs, getBlogs, updateBlogs, deleteBlog, deleteByQuery, getBlogById } = require("../controllers/blogController.js");
const { authentication, AuthorizationById } = require("../middleware/middleware.js")

//--------------------------------------------------------------------------------------------------------------------------------
// AUTHOR ROUTES
// Create A New Author.
router.post("/createAuthor", createAuthor);

// Login to Author.
router.post("/login", loginAuthor);

//--------------------------------------------------------------------------------------------------------------------------------
// BLOG ROUTES (PROTECTED API'S)

// Create a New Blog.
router.post("/createBlogs", authentication, createBlogs);

router.get("/me", authentication, async (req, res) => {
    res.send({ user: req.user })
});

// Get Blogs by Query.
router.get("/getBlogs", authentication, getBlogs);

router.get("/blog/:id", authentication, getBlogById);

// Update Blog by BlogId.
router.put("/UpdateBlogs/:blogId", authentication, AuthorizationById, updateBlogs);

// Delete Blog by BlogId.
router.delete("/deleteBlogsById/:blogId", authentication, AuthorizationById, deleteBlog);

// Delete By Query Params.
router.delete("/deleteBlogsByQuery", authentication, deleteByQuery);

module.exports = router;
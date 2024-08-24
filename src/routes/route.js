const express = require("express");
const router = express.Router();
const User = require('../models/authorModel')
const Role = require('../models/role')

const { createAuthor, loginAuthor } = require("../controllers/authorController.js");
const { createBlogs, getBlogs, updateBlogs, deleteBlog, deleteByQuery, getBlogById } = require("../controllers/blogController.js");
const { authentication, AuthorizationById } = require("../middleware/middleware.js")

//--------------------------------------------------------------------------------------------------------------------------------
// AUTHOR ROUTES
// Create A New Author.
router.post("/createAuthor", createAuthor);

// Login to Author.
router.post("/login", loginAuthor);



router.get('/user/list', authentication, async function (req, res) {
    try {
        const users = await User.find({ userType: 'USER' })
        return res.status(200).json({ status: true, data: users })
    } catch (error) {
        return res.status(500).json({ status: false, error: error.message });
    }
});

router.get('/user/details/:id', authentication, async function (req, res) {
    try {

        let userId = req.params.id;

        // Check queries are coming or not
        if (!userId) {
            return res.status(400).send({ status: false, error: "Please user id!" })
        };

        const userData = await User.findById(userId);

        // Check that userData Find has some result or not
        if (!userData) {
            return res.status(404).send({ status: false, error: "User may be deleted or not found!" });
        }

        return res.status(200).send({ status: true, msg: "User data fetched successfully", data: userData });

    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
});

router.put('/user/update/:id', authentication, async function (req, res) {
    try {

        let userId = req.params.id;

        // Check queries are coming or not
        if (!userId) {
            return res.status(400).send({ status: false, error: "Please user id!" })
        };

        const userData = await User.findById(userId);

        // Check that userData Find has some result or not
        if (!userData) {
            return res.status(404).send({ status: false, error: "User may be deleted or not found!" });
        };

        userData.role = req.body.roleId;

        await userData.save();

        return res.status(200).send({ status: true, msg: "User data fetched successfully", data: userData });

    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
});


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



// ROLE ROUTES
router.post('/role/add', authentication, async function (req, res) {
    try {
        const { name, permissions } = req.body;

        // Validate the request data
        if (!name || !permissions) {
            return res.status(400).json({ error: "Name and permissions are required." });
        }

        // Check if the role already exists
        const existingRole = await Role.findOne({ name });
        if (existingRole) {
            return res.status(400).json({ error: "Role already exists." });
        }

        // Create the new role
        const newRole = new Role({ name, permissions });
        await newRole.save();

        res.status(201).json({ status: true, msg: "Role added successfully.", data: newRole });
    } catch (error) {
        console.error("Error adding role:", error);
        res.status(500).json({ error: error.message });
    }
});

router.get('/role/list', authentication, async function (req, res) {
    try {
        const roles = await Role.find({});
        res.status(200).json({ data: roles });
    } catch (error) {
        console.error("Error listing roles:", error);
        res.status(500).json({ errror: error.message });
    }
});

router.get('/role/details/:id', authentication, async function (req, res) {
    try {

        let roleId = req.params.id;

        // Check queries are coming or not
        if (!roleId) {
            return res.status(400).send({ status: false, error: "Please user id!" })
        };

        const roleData = await Role.findById(roleId);

        // Check that roleData Find has some result or not
        if (!roleData) {
            return res.status(404).send({ status: false, error: "User may be deleted or not found!" });
        }

        return res.status(200).send(roleData);

    } catch (err) {
        return res.status(500).send({ status: false, error: err.message });
    }
});

router.put('/role/update/:id', authentication, async function (req, res) {
    try {
        const { id } = req.params;
        const { permissions } = req.body;

        // Validate the request data
        if (!permissions) {
            return res.status(400).json({ message: "Name and permissions are required." });
        }

        // Find and update the role
        const updatedRole = await Role.findByIdAndUpdate(id, { permissions }, { new: true });

        if (!updatedRole) {
            return res.status(404).json({ message: "Role not found." });
        }

        res.status(200).json({ status: true, msg: "Role updated successfully.", data: updatedRole });
    } catch (error) {
        console.error("Error updating role:", error);
        res.status(500).json({ message: "Internal Server Error." });
    }
});

router.delete('/role/delete/:id', authentication, async function (req, res) {
    try {
        const { id } = req.params;

        // Find and delete the role
        const deletedRole = await Role.findByIdAndDelete(id);

        if (!deletedRole) {
            return res.status(404).json({ error: "Role not found." });
        }

        res.status(200).json({ msg: "Role deleted successfully." });
    } catch (error) {
        console.error("Error deleting role:", error);
        res.status(500).json({ error: "Internal Server Error." });
    }
});


module.exports = router;
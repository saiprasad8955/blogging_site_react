const authorModels = require("../models/authorModel.js");
const jwt = require("jsonwebtoken")
const {
  isValid,
  isValid2,
  isValidEmail,
  isValidPassword,
  isValidBody
} = require('../utils/validator')


// CREATING AUTHOR
const createAuthor = async (req, res) => {
  try {

    const { fname, lname, title, email, password } = req.body

    // Validate the req body first
    if (!isValidBody(req.body)) {
      return res.status(400).send({ status: false, error: "Invalid request !! Please Provide Author Details " });
    }

    // Validate the first name of author

    if (!isValid(fname)) {
      return res.status(400).send({ status: false, error: "Please Provide  First Name Of Author " });
    }


    // Valid only string and  Match With Regex Exp.
    if (!isValid2(fname)) {
      return res.status(400).send({ status: false, error: "Please Provide Valid First Name Of Author " });
    }


    // Validate the Last Name of author
    if (!isValid(lname)) {
      return res.status(400).send({ status: false, error: "Please Provide Last Name Of Author " });
    }

    if (!isValid2(lname)) {
      return res.status(400).send({ status: false, error: "Please Provide Valid Last Name Of Author " });
    }


    // Validate the title of author
    if (!["Mr", "Mrs", "Miss"].includes(title)) {
      return res.status(400).send({ status: false, error: "Title Must be of these values [Mr, Mrs, Miss] " });
    }

    // Validate the email of author is Coming in data or not
    if (!isValid(email)) {
      return res.status(400).send({ status: false, error: "Please Provide Email Of Author " });
    }

    // Method for Email Validation using Regular Expression
    if (!isValidEmail(email)) {
      return res.status(400).send({ status: false, error: "Invalid email address!" })
    }

    // Validate the already existing email
    let alreadyExist = await authorModels.findOne({ email: email });
    if (alreadyExist) {
      return res.status(400).send({ status: false, error: "Email address is already registered" });
    }

    // Validate the email of author is Coming in data or not
    if (!isValid(password)) {
      return res.status(400).send({ status: false, error: "Please Provide Password Of Author " });
    }

    // Validate the password of author
    if (!isValidPassword(password)) {
      return res.status(400).send({ status: false, error: "Invalid Password Address" });
    }

    const author = await authorModels.create(req.body);
    // Generating JWT  
    let accessToken = jwt.sign({ authorId: author._id.toString(), Name: author.fname }, "Blogging-Site", { expiresIn: '2d' })

    return res.status(201).send({ status: true, msg: "Author Successfully Created", accessToken, user: author });

  } catch (err) {
    return res.status(500).send({ status: false, error: err.message });
  }
};


// LOGIN AUTHOR INTO IT
const loginAuthor = async (req, res) => {

  try {

    // First check that body is coming or not

    let { email, password } = req.body;

    if (!isValidBody(req.body)) {
      return res.status(404).send({ status: false, error: "Please Enter Author Credentials!!" })
    }

    // Validate the email of author is Coming in data or not
    if (!isValid(email)) {
      return res.status(400).send({ status: false, error: "Please Provide Email Of Author" });
    }

    // Validate the email correctly
    if (!isValidEmail(email)) {
      return res.status(400).send({ status: false, error: "Email should be a valid email address" });
    }

    // Validate the password of author
    if (!isValid(password)) {
      return res.status(400).send({ status: false, error: "Please Provide Password Of Author " });
    }

    // Find Author in Author Collection
    let author = await authorModels.findOne({ email: email, password: password })

    if (!author) {
      return res.status(400).send({ status: false, error: "Invalid Credentials" });
    }
    // Generating JWT  
    let token = jwt.sign({ authorId: author._id.toString(), Name: author.fname }, "Blogging-Site", { expiresIn: '2d' })

    let authorId = author._id

    // send response to  user that Author is successfully logged in
    return res.status(200).send({ status: true, message: "Author login successfully", data: { accessToken: token, user: author, authorId } });

  }
  catch (err) {
    res.status(500).send({ status: false, error: err.message });
  }
}

module.exports = { createAuthor, loginAuthor };
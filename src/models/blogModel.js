const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true
    },

    body: {
      type: String,
      required: true,
      trim:true
    },

    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Author",
      required: true,
      trim: true
    },

    tags: [{type:String,trim:true,lowercase:true}],

    category: {
      type: String,
      required: true,
      trim: true,
      lowercase: true
    },

    subcategory: [{ type: String, trim: true, lowercase: true }],

    isDeleted: {
      type: Boolean,
      default: false,
    },

    deletedAt: {
      type: Date,
      default: null,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    publishedAt: {
      type: Date,
      default: null,
    },
  },
  { timestamps: true }
);


module.exports = mongoose.model("Blog", blogSchema);

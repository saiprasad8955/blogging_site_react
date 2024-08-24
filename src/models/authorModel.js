const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true
    },

    lname: {
      type: String,
      required: true,
      trim: true
    },

    title: {
      type: String,
      required: true,
      enum: ["Mr", "Mrs", "Miss"],
    },

    email: {
      type: String,
      unique: true,
      lowercase: true,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      trim: true
    },
    role: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Role'
    },
    userType: { type: String, default: 'USER' }
  },
  { timestamps: true }
);

// Middleware to automatically populate the 'role' field on find queries if it's not null
authorSchema.pre('find', function (next) {
  this.populate('role');
  next();
});

// Middleware to automatically populate the 'role' field on findOne queries if it's not null
authorSchema.pre('findOne', function (next) {
  this.populate('role');
  next();
});

// // Middleware to automatically populate the 'role' field on findById queries if it's not null
// authorSchema.pre('findById', function (next) {
//   this.populate('role');
//   next();
// });



module.exports = mongoose.model("Author", authorSchema);

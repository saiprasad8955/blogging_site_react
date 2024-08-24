const mongoose = require('mongoose')
const User = require('../models/authorModel');
const Role = require('../models/role');

const connectDB = async () => {
  try {

    await mongoose.connect(process.env.MONGO_URI);

    console.log('DB connection established!!');

    const admin = await User.findOne({ name: 'Admin User', email: 'admin@example.com' });

    const userRole = await User.findOne({ name: 'USER' });
    if (!userRole) {
      await Role.create({
        name: 'USER',
        permissions: {
          blog: {
            c: true,
            u: true,
            d: true
          }
        }
      });
    }


    if (!admin) {

      await User.create({
        fname: 'ADMIN',
        lname: 'USER',
        title: 'Mr',
        email: 'admin@example.com',
        password: 'Password@123',
        role: null,
        userType: 'ADMIN',
      });




    }

  } catch (err) {
    throw err;
  }
};

connectDB()

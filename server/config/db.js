const mongoose = require('mongoose');
const uri = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
    return true;

  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;

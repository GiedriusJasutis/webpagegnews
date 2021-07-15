require('dotenv').config();
const mongoose = require('mongoose');

const mongoURI = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mycluster.9dlye.mongodb.net/${process.env.DB_DATABASE}?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database conection has been made!');
  } catch (error) {
    console.log(error.message);

    // in case failure
    process.exit(1);
  }
};

module.exports = connectDB;

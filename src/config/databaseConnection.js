const mongoose = require('mongoose');
const dotenv=require('dotenv')
dotenv.config();
const MongoURL=process.env.MongoDatabaseURL;
const PortAddress=process.env.PORT;
async function connectDb() {
  try {
    await mongoose.connect(MongoURL);
    console.log("MongoDB Connected");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  } catch (error) {
     console.log(error);
  }
}

module.exports={
    connectDb,
    PortAddress,
}
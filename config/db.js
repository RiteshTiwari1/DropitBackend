require("dotenv").config();
const mongoose = require("mongoose");
function connectDB() {
  mongoose.connect(process.env.MONGO_CONNECTION_URL,{
    bufferTimeoutMS: 30000,
  });
  const connection = mongoose.connection;
  connection
    .once("open", () => {
      console.log("Database connected");
    })
    .on("error", (err) => {
      console.log(err)
      console.log("Connection failed");
    });
}

module.exports = connectDB;

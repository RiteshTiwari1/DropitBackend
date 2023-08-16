// require("dotenv").config();
// const mongoose = require("mongoose");
// function connectDB() {
//   mongoose.connect(process.env.MONGO_CONNECTION_URL);
//   const connection = mongoose.connection;
//   connection
//     .once("open", () => {
//       console.log("Database connected");
//     })
//     .on("error", (err) => {
//       console.log(err)
//       console.log("Connection failed");
//     });
// }

// module.exports = connectDB;

const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected");
  } catch (error) {
    console.error("Connection failed:", error.message);
  }
}

module.exports = connectDB;
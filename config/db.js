// const mongoose = require("mongoose");

// const connectDb = async () => {
//   try {
//     console.log(`${process.env.CONNECTION_STRING}`);
//     const connect = await mongoose.connect(`${process.env.CONNECTION_STRING}`);
//     console.log(
//       "Database connected: ",
//       connect.connection.host,
//       connect.connection.name
//     );
//   } catch (error) {
//     console.log(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDb;

const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("Attempting to connect to the database...");
    const connect = await mongoose.connect(
      "mongodb+srv://kppankaj1843:j9TT2npFYn82iWXL@cluster0.or3ipla.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb;

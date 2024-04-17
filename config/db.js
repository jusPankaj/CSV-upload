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
    console.log("Connection string:", process.env.CONNECTION_STRING);
    const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
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

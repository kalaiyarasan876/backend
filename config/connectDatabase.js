const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose.connect(process.env.DB_URL).then(() => {
//     console.log("MangoDB Connected...");
//   });
// };


const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("MongoDB Connected...");
    })
    .catch((err) => {
      console.error("Database connection error:", err);
    });
};

module.exports = connectDatabase;
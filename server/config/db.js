const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected!");
  } catch (error) {
    console.log(`Connection Error:${error.message}`);
  }
};
module.exports={db}

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Function to hash a password
const hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Function to compare a password with a hashed password
const comparePassword = async (password, hashedPassword) => {
  const match = await bcrypt.compare(password, hashedPassword);
  return match;
};

// Function to generate a JSON Web Token (JWT)
const generateToken = (userId) => {
  const token = jwt.sign({ _id:userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE,
  });
  return token;
};

module.exports = {
  hashPassword,
  comparePassword,
  generateToken,
};

const sendToken = (user, statusCode, res) => {
  // Create a copy of the user object without the 'password' field
  const userWithoutPassword = { ...user.toObject() };
  delete userWithoutPassword.password;

  const token = user.generateToken();

  // options for cookie
  const options = {
    expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    httpOnly: true,
  };

  res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user: userWithoutPassword, // Send the modified user object
    token,
  });
};

module.exports = sendToken;

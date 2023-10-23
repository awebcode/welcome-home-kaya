const {
  registerUser,
  logout,
  loginUser,
  getUsers,
  getUserDetails,
  deleteOwnUser,
  deleteAdminUser,
  updateUserByMe,
  updateUserByAdmin,

} = require("../controllers/userCtrl");
const { isAuthenticatedUser } = require("../utils/auth");
const { convertToLowerCase } = require("../utils/convertToLowercase");

const router = require("express").Router();

router.post("/register",convertToLowerCase, registerUser);
router.post("/login",convertToLowerCase, loginUser);
router.get("/logout", logout);
router.get("/me", isAuthenticatedUser, getUserDetails);
router.get("/users", isAuthenticatedUser, getUsers);
router.delete("/delete-my-account", isAuthenticatedUser, deleteOwnUser);
router.delete("/delete-user/:id", isAuthenticatedUser, deleteAdminUser);
router.patch("/update-my-details",convertToLowerCase, isAuthenticatedUser, updateUserByMe);
router.patch("/update-user/:id",convertToLowerCase, isAuthenticatedUser, updateUserByAdmin);
module.exports = router;

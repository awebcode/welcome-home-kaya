const express = require("express");
const router = express.Router();

const { isAuthenticatedUser } = require("../utils/auth");
const { getAllProjectss, createProjects, getProjectsById, updateProjects, deleteProjects } = require("../controllers/projectCtrl");

router.get("/projects", getAllProjectss);
router.post("/projects",isAuthenticatedUser, createProjects);

router.get("/projects/:id", getProjectsById);
router.patch("/projects/:id", isAuthenticatedUser, updateProjects);
router.delete("/projects/:id", isAuthenticatedUser, deleteProjects);

module.exports = router;

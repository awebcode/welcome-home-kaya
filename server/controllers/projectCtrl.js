// controllers/ProjectsController.js

const Project = require("../models/projecSchema");
const ErrorHandler = require("../utils/ErrorHandler");

// Create a new Projects
exports.createProjects = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const projects = await Project.create({ title, content });
    res.status(201).json({ success: true, projects });
  } catch (error) {
    next(error);
  }
};

// Get all Projectss
exports.getAllProjectss = async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, projects });
  } catch (error) {
    next(error);
  }
};

// Get a single Projects by ID
exports.getProjectsById = async (req, res, next) => {
  try {
    const projects = await Project.findById(req.params.id);
    if (!projects) {
      return next(new ErrorHandler("Projects not found", 404));
    }
    res.status(200).json({ success: true, projects });
  } catch (error) {
    next(error);
  }
};

// Update a Projects by ID
exports.updateProjects = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const projects = await Project.findByIdAndUpdate(
      req.params.id,
      { title, content },
      { new: true }
    );
    if (!projects) {
      return next(new ErrorHandler("projects not found", 404));
    }
    res.status(200).json({ success: true, projects });
  } catch (error) {
    next(error);
  }
};

// Delete a Projects by ID
exports.deleteProjects = async (req, res, next) => {
  try {
    const Projects = await Project.findByIdAndDelete(req.params.id);
    if (!Projects) {
      return next(new ErrorHandler("Projects not found", 404));
    }
    res.status(200).json({ success: true, message: "Projects deleted successfully" });
  } catch (error) {
    next(error);
  }
};

// controllers/ProjectsController.js

const { default: mongoose } = require("mongoose");
const Project = require("../models/projecSchema");
const ErrorHandler = require("../utils/ErrorHandler");

// Create a new Projects
exports.createProjects = async (req, res, next) => {
  try {
    // const { title, content } = req.body;
    console.log(req.body)
    const project = await Project.create(req.body);

    
    res.status(201).json({ success: true, project });
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
//get single project
exports.getProjectsById = async (req, res, next) => {
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new ErrorHandler("Invalid project ID", 400));
    }

    const project = await Project.findById(id);

    if (!project) {
      return next(new ErrorHandler("Project not found", 404));
    }

    res.status(200).json({ success: true, project });
  } catch (error) {
    console.error(error);
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

const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  images: [{ url: String, public_id: String }],
  ratings: {
    type: Number,
    default: 0,
  },

  currentPhase: {
    type: String,
    default: "Foundation",
  },

  keyFeatures: [
    {
      type: String,
    },
  ],

  inHome: [
    {
      type: String,
    },
  ],
  cost: {
    type: Number,
    default: 0,
  },
  budget: {
    type: Number,
    default: 0,
  },
  propertyLisingPrice: {
    type: Number,
    default: 0,
  },
  constructionEstimate: {
    type: Number,
    default: 0,
  },
  comments: {
    type: Number,
    default: 0,
  },
  likes: {
    type: Number,
    default: 0,
  },
  lng: Number,
  lut: Number,
  completationDate: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

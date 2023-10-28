const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      validate: (v) => Array.isArray(v) && v.length > 0,
    },
    price: {
      type: Number,
      default: 0,
    },
    ratings: {
      type: Number,
      default: 0,
    },

    currentPhase: {
      type: String,
      default: "",
    },

    homeType: {
      type: String,
      default: "",
    },
    builder: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "",
    },

    keyFeatures: [
      {
        type: String,
      },
    ],
    keyProjectNotes: [
      {
        type: String,
      },
    ],

    // homeFeatures: [
    //   {
    //     type: String,
    //   },
    // ],
    cost: {
      type: Number,
      default: 0,
    },
    budget: {
      type: Number,
      default: 0,
    },
    spend: {
      type: Number,
      default: 0,
    },
    propertyListingPrice: {
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
    lng: { type: Number, required: true },
    lat: { type: Number, required: true },
    address: String,

    bed: String,
    bath: String,
    acress: String,
    so_ft: String,
    zip: String,
    project_size: String,
    city: "",
    state: "",
    site_contract: "",
    site_phone: "",
    customer_contract: "",
    customer_phone: "",
    order_trigger: "",
    order_trigger_stage: "",
    drawings: "",
    takeOfCompleted: "",
    bucket: "",
    Count_of_Products_by_project: [],
    Order_Tracker: [],
    related_to_order: [],
    b_vs_a: "",
    spent_to_date:"",

    //project stack holders
    generalContractor: String,
    constractionManager: String,
    projectManager: String,
    client: String,
    documents: String,
    //project stack holders
    targetCompletationDate: String,
    actualCoDate: String,
    completedAt: Date,
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;

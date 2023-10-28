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
    price: String,
    ratings: {
      type: Number,
      default: 0,
    },

    currentPhase: {
      type: String,
      default: String,
    },

    homeType: {
      type: String,
      default: String,
    },
    builder: {
      type: String,
      default: String,
    },
    status: {
      type: String,
      default: String,
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
    cost: String,
    budget: String,
    spend: String,
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
    city: String,
    state: String,
    site_contract: String,
    site_phone: String,
    customer_contract: String,
    customer_selection:String,
    customer_phone: String,
    order_trigger: String,
    order_trigger_stage: String,
    drawings: String,
    takeOfCompleted: String,
    bucket: String,
    Count_of_Products_by_project: [],
    Order_Tracker: [],
    related_to_order: [],
    b_vs_a: String,
    spent_to_date:String,
    
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

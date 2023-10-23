const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const {db} = require("./config/db");
const notFoundError = require("./utils/notFound");
const UserRoutes = require("./routes/userRoutes");
const projectRoutes = require("./routes/projectRoutes");
// const commentRoutes = require("./routes/commentRoutes");
// const followRoutes = require("./routes/followRoutes");
// const likeRoutes = require("./routes/likeRoutes");
// const replyRoutes = require("./routes/replyRoutes");
const ErrorMiddleware = require("./utils/ErrorMiddleware");
require("dotenv").config();
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware for parsing cookies
app.use(cookieParser());

// Middleware for enabling CORS (Cross-Origin Resource Sharing)
app.use(
  cors({
    origin: ["http://localhost:3000", "https://welcome-home-kaya.vercel.app"],
    credentials: true,
  })
);

// Routes (add your routes here)
app.get("/", (req, res) => {
  res.send("Hello World! Welcome Homes Server!");
});
//routes
app.use("/api/v1", UserRoutes);
app.use("/api/v1", projectRoutes);

// app.use("/api/v1", commentRoutes);
// app.use("/api/v1", replyRoutes);
// app.use("/api/v1", likeRoutes);

// app.use("/api/v1", followRoutes);

//routes
db();
// Use the not found error handler
app.use(notFoundError);

app.use(ErrorMiddleware);

// Global Error Handler (for uncaught exceptions)
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  process.exit(1); // Exit the process with a non-zero status code
});

// Global Error Handler (for unhandled promise rejections)
process.on("unhandledRejection", (err,next) => {
  console.error("Unhandled Rejection:", err);
  process.exit(1);
  // Exit the process with a non-zero status code
});
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

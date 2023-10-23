export const Base_url =
  process.env.NODE_ENV === "production"
    ? "https://welcome-homes-server.onrender.com/api/v1"
    : "http://localhost:8800/api/v1";

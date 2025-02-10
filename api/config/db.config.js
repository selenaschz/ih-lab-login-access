const mongoose = require("mongoose");

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/lab-login-access";

mongoose
  .connect(MONGODB_URI)
  .then(() =>
    console.info("Successfully connected to the database")
  )
  .catch((error) => {
    console.error(
      "An error occurred trying to connect to the database",
      error
    );
    process.exit(0);
  });

process.on("SIGINT", () => {
  mongoose.connection.close().finally(() => {
    console.log(`Database connection closed`);
    process.exit(0);
  });
});

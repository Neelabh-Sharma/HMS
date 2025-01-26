const app = require("./app");
const { PORT } = require("./config/env");
const connectDB = require("./config/db");

try {
  // Connect to the database
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error(`error : ${err}`);
}

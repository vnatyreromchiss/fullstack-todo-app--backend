const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const routes = require("./routes/ToDoRoute.js");

const app = express();
const PORT = process.env.PORT || 5001;  // Ensure 'PORT' is in uppercase

app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


const express = require("express");
const mongoose = require("mongoose");
const bookRoutes = require("./routes/bookRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/api", bookRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/librarySystem")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Library System API running");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

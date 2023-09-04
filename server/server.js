
const express = require("express");
const userRoutes = require("./routes/userRoutes");

const app = express();
const PORT = 3001;

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Bonjour, c'est le serveur" });
});

app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

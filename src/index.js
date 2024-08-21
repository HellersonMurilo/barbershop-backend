const express = require("express");
const routes = require("./routes/Routes");
const PORT = process.env.PORT | 8080;

require("dotenv").config();

const app = express();

app.use(express.json());

// Routes
app.use("/api", routes);

app.listen(PORT, () => {
  console.log(`Estamos online http://localhost:${PORT}`);
});

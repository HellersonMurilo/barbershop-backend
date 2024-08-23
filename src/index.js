const express = require("express");
const routes = require("./routes/Routes");
const db = require("./database/database");
const PORT = process.env.PORT | 8080;

require("dotenv").config();

const app = express();

app.use(express.json());

// Routes
app.use("/api", routes);

db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    db.sync({ alter: true });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.listen(PORT, () => {
  console.log(`Estamos online http://localhost:${PORT}`);
});

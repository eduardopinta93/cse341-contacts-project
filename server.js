const express = require("express");

const contactsRoutes = require("./routes/contacts");

const { connectDb } = require("./db/connect");

const app = express();

app.use("/contacts", contactsRoutes);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
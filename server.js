const express = require("express");
const contactsRoutes = require("./routes/contacts");
const { connectDb } = require("./db/connect");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

const app = express();

app.use(express.json());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/contacts", contactsRoutes);

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.redirect("/api-docs");
});

connectDb().then(() => {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
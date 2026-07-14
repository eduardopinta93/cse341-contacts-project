const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "Contacts API",
    description: "API documentation for the CSE 341 Contacts project",
  },
    host: "cse341-contacts-project-xld7.onrender.com",
    schemes: ["https"],
};

const outputFile = "./swagger.json";
const endpointsFiles = ["./server.js"];

swaggerAutogen(outputFile, endpointsFiles, doc);
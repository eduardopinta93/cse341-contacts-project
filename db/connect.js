const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const dns = require("dns");

dotenv.config();
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

let db;

async function connectDb() {
  try {
    await client.connect();
    db = client.db("cse341");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

function getDb() {
  return db;
}

module.exports = {
  connectDb,
  getDb,
};
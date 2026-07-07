const express = require("express");
const { getDb } = require("../db/connect");
const { ObjectId } = require("mongodb");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const db = getDb();
    const contacts = await db.collection("contacts").find().toArray();

    res.json(contacts);
  } catch (error) {
    console.error("Error getting contacts:", error);
    res.status(500).json({ message: "Error getting contacts" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const db = getDb();
    const contactId = req.params.id;

    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(contactId) });

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    res.json(contact);
  } catch (error) {
    console.error("Error getting contact:", error);
    res.status(500).json({ message: "Error getting contact" });
  }
});

module.exports = router;
const { getDb } = require("../db/connect");
const { ObjectId } = require("mongodb");


async function getAllContacts(req, res) {
  try {
    const db = getDb();
    const contacts = await db.collection("contacts").find().toArray();

    res.json(contacts);
  } catch (error) {
    console.error("Error getting contacts:", error);
    res.status(500).json({
      message: "Error getting contacts",
    });
  }
}

async function getContactById(req, res) {
  try {
    const db = getDb();
    const contactId = req.params.id;

    const contact = await db
      .collection("contacts")
      .findOne({ _id: new ObjectId(contactId) });

    if (!contact) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.json(contact);
  } catch (error) {
    console.error("Error getting contact:", error);
    res.status(500).json({
      message: "Error getting contact",
    });
  }
}

async function createContact(req, res) {
  try {
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const newContact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };

    const db = getDb();
    const result = await db.collection("contacts").insertOne(newContact);

    res.status(201).json({
      id: result.insertedId,
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({
      message: "Error creating contact",
    });
  }
}

async function updateContact(req, res) {
  try {
    const contactId = req.params.id;
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;

    if (!firstName || !lastName || !email || !favoriteColor || !birthday) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const updatedContact = {
      firstName,
      lastName,
      email,
      favoriteColor,
      birthday,
    };

    const db = getDb();

    const result = await db.collection("contacts").updateOne(
      { _id: new ObjectId(contactId) },
      { $set: updatedContact }
    );

    if (result.matchedCount === 0) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error updating contact:", error);
    res.status(500).json({
      message: "Error updating contact",
    });
  }
}

async function deleteContact(req, res) {
  try {
    const contactId = req.params.id;

    const db = getDb();

    const result = await db.collection("contacts").deleteOne({
      _id: new ObjectId(contactId),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        message: "Contact not found",
      });
    }

    res.sendStatus(204);
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      message: "Error deleting contact",
    });
  }
}

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
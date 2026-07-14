const express = require("express");
const {getAllContacts, getContactById, createContact, updateContact, deleteContact,} = require("../controllers/contacts");

const router = express.Router();

router.get(
  "/",
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get all contacts'
    #swagger.description = 'Returns all contacts stored in the MongoDB contacts collection.'

    #swagger.responses[200] = {
      description: 'Contacts retrieved successfully',
      schema: [{
        _id: '6a4bda3af63f5b193b8f3be0',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        favoriteColor: 'Blue',
        birthday: '1992-05-15'
      }]
    }

    #swagger.responses[500] = {
      description: 'Internal server error',
      schema: {
        message: 'Error getting contacts'
      }
    }
  */
  getAllContacts
);
router.get(
  "/:id",
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Get contact by ID'
    #swagger.description = 'Returns a single contact that matches the specified MongoDB ObjectId.'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId of the contact',
      required: true,
      type: 'string'
    }

    #swagger.responses[200] = {
      description: 'Contact found successfully',
      schema: {
        _id: '6a4bda3af63f5b193b8f3be0',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@email.com',
        favoriteColor: 'Blue',
        birthday: '1992-05-15'
      }
    }

    #swagger.responses[404] = {
      description: 'Contact not found'
    }

    #swagger.responses[500] = {
      description: 'Internal server error'
    }
  */
  getContactById
);
router.post(
  "/",
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Create a new contact'
    #swagger.description = 'Creates a new contact in the MongoDB contacts collection.'

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            firstName: "Bruce",
            lastName: "Wayne",
            email: "bruce.wayne@email.com",
            favoriteColor: "Black",
            birthday: "1978-02-19"
          }
        }
      }
    }

    #swagger.responses[201] = {
      description: 'Contact created successfully'
    }

    #swagger.responses[400] = {
      description: 'Missing required fields'
    }

    #swagger.responses[500] = {
      description: 'Internal server error'
    }
  */
  createContact
);
router.put(
  "/:id",
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Update a contact'
    #swagger.description = 'Updates an existing contact using its MongoDB ObjectId.'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId of the contact',
      required: true,
      type: 'string'
    }

    #swagger.requestBody = {
      required: true,
      content: {
        "application/json": {
          schema: {
            firstName: "Bruce",
            lastName: "Wayne",
            email: "bruce.wayne@wayneenterprises.com",
            favoriteColor: "Dark Gray",
            birthday: "1978-02-19"
          }
        }
      }
    }

    #swagger.responses[204] = {
      description: 'Contact updated successfully'
    }

    #swagger.responses[404] = {
      description: 'Contact not found'
    }

    #swagger.responses[400] = {
      description: 'Missing required fields'
    }

    #swagger.responses[500] = {
      description: 'Internal server error'
    }
  */
  updateContact
);
router.delete(
  "/:id",
  /*
    #swagger.tags = ['Contacts']
    #swagger.summary = 'Delete a contact'
    #swagger.description = 'Deletes a contact from the MongoDB contacts collection.'

    #swagger.parameters['id'] = {
      in: 'path',
      description: 'MongoDB ObjectId of the contact',
      required: true,
      type: 'string'
    }

    #swagger.responses[204] = {
      description: 'Contact deleted successfully'
    }

    #swagger.responses[404] = {
      description: 'Contact not found'
    }

    #swagger.responses[500] = {
      description: 'Internal server error'
    }
  */
  deleteContact
);

module.exports = router;
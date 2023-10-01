const mongoose = require('mongoose');

// Create a new collection
const createCollection = async (collectionName) => {
  try {
    await mongoose.connection.createCollection(collectionName);
    console.log(`Collection ${collectionName} created successfully.`);
  } catch (error) {
    console.error(`Error creating collection ${collectionName}: ${error}`);
  }
};

// Remove a collection from the database
const removeCollection = async (collectionName) => {
  try {
    await mongoose.connection.dropCollection(collectionName);
    console.log(`Collection ${collectionName} removed successfully.`);
  } catch (error) {
    console.error(`Error removing collection ${collectionName}: ${error}`);
  }
};

// Insert a single document into a collection
const insertDocument = async (collectionName, document) => {
  try {
    const collection = mongoose.connection.collection(collectionName);
    await collection.insertOne(document);
    console.log(`Document inserted into ${collectionName} successfully.`);
  } catch (error) {
    console.error(`Error inserting document into ${collectionName}: ${error}`);
  }
};

// Delete/remove a single document from the collection
const deleteDocument = async (collectionName, filter) => {
  try {
    const collection = mongoose.connection.collection(collectionName);
    await collection.deleteOne(filter);
    console.log(`Document deleted from ${collectionName} successfully.`);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}: ${error}`);
  }
};

module.exports = {
  createCollection,
  removeCollection,
  insertDocument,
  deleteDocument,
};
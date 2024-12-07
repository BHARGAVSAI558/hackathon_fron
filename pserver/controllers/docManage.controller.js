import Document from '../models/docManage.model.js';  // Importing the model for document management
import fs from 'fs';
import path from 'path';

// Handle file upload
export const uploadDocument = async (req, res) => {
  try {
    const { description } = req.body;
    const file = req.file;

    // If no file is uploaded
    if (!file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    // Validate the description
    if (!description) {
      return res.status(400).json({ message: 'Description is required.' });
    }

    // Create a new document entry
    const newDocument = new Document({
      name: file.originalname,
      path: file.path,
      description,
    });

    // Save the document to the database
    await newDocument.save();

    return res.status(201).json(newDocument);  // Send back the document data
  } catch (error) {
    console.error('Error uploading document:', error);
    return res.status(500).json({ message: 'Error uploading document.' });
  }
};

// Get all documents
export const getDocuments = async (req, res) => {
  try {
    const documents = await Document.find();
    return res.status(200).json(documents);
  } catch (error) {
    console.error('Error fetching documents:', error);
    return res.status(500).json({ message: 'Error fetching documents.' });
  }
};

// Optionally, you can add logic to delete or update documents
export const deleteDocument = async (req, res) => {
  try {
    const { documentId } = req.params;

    const document = await Document.findByIdAndDelete(documentId);
    if (!document) {
      return res.status(404).json({ message: 'Document not found.' });
    }

    // Delete the file from the file system
    fs.unlinkSync(path.resolve(document.path));

    return res.status(200).json({ message: 'Document deleted successfully.' });
  } catch (error) {
    console.error('Error deleting document:', error);
    return res.status(500).json({ message: 'Error deleting document.' });
  }
};

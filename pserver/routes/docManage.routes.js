import express from 'express';
import { fileUpload } from '../middleware/fileUpload.middleware.js';  // Middleware for file upload
import { uploadDocument, getDocuments, deleteDocument } from '../controllers/docManage.controller.js';

const router = express.Router();

// Route to upload a document
router.post('/upload', fileUpload.single('file'), uploadDocument);

// Route to fetch all documents
router.get('/', getDocuments);

// Route to delete a document by ID
router.delete('/:documentId', deleteDocument);

export default router;

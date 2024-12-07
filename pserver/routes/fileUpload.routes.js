import express from 'express';
import { upload } from '../controllers/fileUpload.controller.js';
import { uploadDocument } from '../controllers/docManage.controller.js';

const router = express.Router();

// Route to upload document (File and description)
router.post('/upload', upload, uploadDocument);

export default router;

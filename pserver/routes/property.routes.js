import express from 'express';
import multer from 'multer';
import { uploadProperty, getProperties } from '../controllers/property.controller.js';

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Ensure this folder exists
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

// Routes
router.post('/upload', upload.array('images', 10), (req, res, next) => {
    console.log('Files uploaded:', req.files); // Log uploaded files
    console.log('Body:', req.body); // Log the request body
    next();
  }, uploadProperty);
router.get('/list', getProperties);

export default router;

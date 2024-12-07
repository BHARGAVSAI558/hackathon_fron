import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./Database/User.js";  // Ensure this path is correct
import authRouter from "./routes/auth.routes.js";
import chatbotRoutes from "./routes/chatbot.routes.js";
import propertyRoutes from './routes/property.routes.js';
//import fileUploadRoutes from './routes/fileUpload.routes.js';
import docManageRoutes from './routes/docManage.routes.js';

dotenv.config();

const app = express();

// Middleware for parsing JSON and enabling CORS
app.use(express.json());
app.use(cors({
  origin: '*',  // Allow all origins, adjust if needed for production
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
}));

// Database connection
connectDB()
  .then(() => {
    console.log("Connected to the database");

    // Routes
    app.use("/api/auth", authRouter);  // Auth routes
    app.use("/api/chatbot", chatbotRoutes);  // Chatbot routes
    app.use('/api/properties', propertyRoutes);
    app.use('/uploads', express.static('uploads'));
    //app.use('/api/documents', fileUploadSRoutes);
    app.use('/api/documents', docManageRoutes); 
})
  .catch((err) => {
    console.error("Failed to connect to database:", err);
  });

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    message: 'Something went wrong!',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error',
  });
});

// Start server
const PORT = process.env.PORT || 3009;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

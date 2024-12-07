// ./routes/auth.routes.js
import express from "express";
import { registerUser, loginUser } from "../controllers/auth.controller.js"; // Import functions
import verifyToken from "../middleware/auth.middleware.js"; // Import middleware
import { sendOTP, verifyOTP } from "../controllers/otp.controller.js";

const router = express.Router();

// Routes
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/send-otp", sendOTP);
router.post("/verify-otp", verifyOTP);

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "This is a protected route!", user: req.user });
});
 
export default router;

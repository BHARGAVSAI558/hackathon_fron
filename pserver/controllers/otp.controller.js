// ./controllers/otp.controller.js
import otpGenerator from 'otp-generator';
import nodemailer from 'nodemailer';

let otpStore = {}; // Temporary store for OTPs

// Send OTP
export const sendOTP = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required.' });
  }

  const otp = otpGenerator.generate(6, { upperCase: false, specialChars: false, digits: true });

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Use email from environment variables
        pass: process.env.EMAIL_PASS, // Use password from environment variables
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Use email from environment variables
      to: email,
      subject: 'Your OTP Code',
      text: `Your OTP code is: ${otp}`,
    };

    await transporter.sendMail(mailOptions);

    // Store OTP for later verification
    otpStore[email] = { otp, expireAt: Date.now() + 300000 }; // 5 minutes expiration

    res.status(200).json({ message: 'OTP sent successfully!' });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ message: 'Failed to send OTP. Please try again.' });
  }
};

// Verify OTP
export const verifyOTP = (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: 'Email and OTP are required.' });
  }

  const storedOtpData = otpStore[email];
  if (!storedOtpData) {
    return res.status(400).json({ message: 'OTP not found or expired.' });
  }

  const { otp: storedOtp, expireAt } = storedOtpData;
  if (Date.now() > expireAt) {
    delete otpStore[email]; // Delete expired OTP
    return res.status(400).json({ message: 'OTP has expired. Please request a new one.' });
  }

  if (storedOtp === otp) {
    delete otpStore[email]; // Delete OTP after successful verification
    return res.status(200).json({ message: 'OTP verified successfully.' });
  } else {
    return res.status(400).json({ message: 'Invalid OTP.' });
  }
};

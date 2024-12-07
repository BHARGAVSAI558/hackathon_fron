import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { message } = req.body;

  // Define your chatbot responses
  const responses = {
    'property listings': 'You can view the available property listings in the Property Management section.',
    'tenant': 'For tenant-related info, check Tenant/Owner Management.',
    default: 'Sorry, I’m still learning. Contact support for further assistance.',
  };

  const responseText = responses[message.toLowerCase()] || responses['default'];
  res.status(200).json({ response: responseText });
});

export default router;

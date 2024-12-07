// Controller for Chatbot
export const getBotResponse = (req, res) => {
    const { message } = req.body;
  
    // Predefined responses
    const responses = {
      'property listings': 'You can view the available property listings in the Property Management section.',
      'document': 'Manage rental agreements and sales contracts in the Document Management section.',
      'tenant': 'For tenant-related info, check Tenant/Owner Management.',
      'owner': 'Manage properties and communicate with tenants in the Owner Dashboard.',
      'rental agreements': 'Create and manage rental agreements in Document Management.',
      'sales contracts': 'Handle sales contracts securely in Document Management.',
      'property availability': 'Check availability in the Property Management section.',
      'contact support': 'Contact support at support@example.com.',
      'chatbot': 'I’m here to assist with questions about the platform. What would you like to know?',
      'help': 'I can help you navigate the platform, manage documents, and more. Just ask!',
      'feedback': 'Send feedback through the user account section.',
      'login issues': 'Use "Forgot Password" or contact support for login issues.',
      'hey': 'Hey there! How can I help today?',
      'hello': 'Hello! What can I help you with today?',
      'hi': 'Hi! Feel free to ask me anything about property management.',
      'greetings': 'Greetings! How can I help today?',
      "what's up": 'Here to help with any questions you may have.',
      default: 'Sorry, I’m still learning. Contact support for further assistance.',
    };
  
    // Normalize message and fetch response
    const userMessage = message?.toLowerCase();
    const botResponse = responses[userMessage] || responses['default'];
  
    // Send response
    res.json({ response: botResponse });
  };
  
import Newsletter from '../models/newsletterModel.js';

export const subscribeToNewsletter = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !email.includes('@')) {
      return res.json({ success: false, message: 'Invalid email address.' });
    }

    const exists = await Newsletter.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: 'You are already subscribed!' });
    }

    await Newsletter.create({ email });
    res.json({ success: true, message: 'Thank you for subscribing!' });

  } catch (error) {
    console.error('Error subscribing:', error);
    res.json({ success: false, message: 'Server error. Please try again later.' });
  }
};

export const getSubscribedEmails = async (req, res) => {
  try {
    console.log("Fetching subscribed emails...");
    const subscribedEmails = await Newsletter.find();

    res.json({
      success: true,
      subscribedEmails,
    });
  } catch (error) {
    console.error('Error fetching subscribed emails:', error);
    res.json({
      success: false,
      message: 'Failed to fetch subscribed emails.',
    });
  }
};

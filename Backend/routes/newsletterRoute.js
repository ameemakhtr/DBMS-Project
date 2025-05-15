import express from 'express';
import { subscribeToNewsletter, getSubscribedEmails } from '../controllers/newsletterController.js';

const newsletterRouter = express.Router();

newsletterRouter.post('/subscribe', subscribeToNewsletter);
newsletterRouter.get('/subscribedEmails', getSubscribedEmails);

export default newsletterRouter;

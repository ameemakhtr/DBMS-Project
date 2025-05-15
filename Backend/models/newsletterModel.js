import mongoose from 'mongoose';

const newsletterSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  date: { type: Number, required: true, default: Date.now },
});

const Newsletter = mongoose.models.newsletter || mongoose.model('Newsletter', newsletterSchema);

export default Newsletter;

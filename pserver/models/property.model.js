import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  type: { type: String, required: true }, // e.g., villa, flat
  description: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  amenities: { type: String, default: '' },
  images: [{ type: String }], // Array of image URLs
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Property', propertySchema);

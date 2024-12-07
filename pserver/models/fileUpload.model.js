import mongoose from 'mongoose';

// Schema for the document model
const documentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Export the model
const Document = mongoose.model('Document', documentSchema);

export default Document; // Ensure this export is correct

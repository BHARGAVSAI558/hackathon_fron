import Property from '../models/property.model.js';

/**
 * @desc Upload a new property
 * @route POST /api/properties/upload
 */
export const uploadProperty = async (req, res) => {
  try {
    const { type, description, location, price, amenities } = req.body;

    // Validate required fields
    if (!type || !description || !location || !price) {
      return res.status(400).json({ message: 'All fields are required!' });
    }

    // Check if images are uploaded
    if (!req.files || req.files.length === 0) {
      return res.status(400).json({ message: 'Please upload at least one image.' });
    }

    // Get image paths from Multer
    const imagePaths = req.files.map((file) => `/uploads/${file.filename}`);

    // Create a new property
    const property = new Property({
      type,
      description,
      location,
      price,
      amenities,
      images: imagePaths,
    });

    // Save property to the database
    const savedProperty = await property.save();

    res.status(201).json({
      message: 'Property uploaded successfully!',
      property: savedProperty,
    });
  } catch (error) {
    console.error('Error uploading property:', error);
    res.status(500).json({
      message: 'Failed to upload property.',
      error: error.message,
    });
  }
};

/**
 * @desc Get properties (filtered by type if provided)
 * @route GET /api/properties
 * @queryParam {string} type - Optional filter for property type (e.g., villa, flat)
 */
export const getProperties = async (req, res) => {
  const { type } = req.query;

  try {
    // Fetch properties based on type (if provided) or all properties
    const properties = type
      ? await Property.find({ type })
      : await Property.find();

    res.status(200).json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).json({
      message: 'Failed to fetch properties.',
      error: error.message,
    });
  }
};

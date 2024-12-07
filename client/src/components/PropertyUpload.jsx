import React, { useState, useRef, useEffect } from 'react';
import './PropertyUpload.css';

const PropertyUpload = () => {
  const [property, setProperty] = useState({
    type: '',
    description: '',
    images: [],
    rent: '',
    location: '',
    area: '',
    price: '',
    amenities: '',
  });

  const fileInputRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setProperty((prev) => ({ ...prev, images: [...prev.images, ...files] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { type, description, location, area, price } = property;
    if (!type || !description || !location || !area || !price) {
      alert('Please fill in all required fields.');
      return;
    }

    try {
      const formData = new FormData();
      for (const key in property) {
        if (key === 'images') {
          property.images.forEach((image) => {
            formData.append('images', image);
          });
        } else {
          formData.append(key, property[key]);
        }
      }

      const response = await fetch('https://your-api-endpoint/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to upload property. Please try again.');
      }

      const data = await response.json();
      console.log('Property uploaded successfully:', data);
      alert('Property uploaded successfully!');

      setProperty({
        type: '',
        description: '',
        images: [],
        rent: '',
        location: '',
        area: '',
        price: '',
        amenities: '',
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (error) {
      console.error('Error uploading property:', error);
      alert(error.message);
    }
  };

  const renderImagePreviews = () => {
    return property.images.map((image, index) => (
      <img
        key={index}
        src={URL.createObjectURL(image)}
        alt={`Property Preview ${index + 1}`}
        style={{ width: '100px', margin: '5px' }}
      />
    ));
  };

  useEffect(() => {
    // Cleanup URLs on component unmount or when images change
    return () => {
      property.images.forEach((image) => URL.revokeObjectURL(image));
    };
  }, [property.images]);

  return (
    <form className="property-upload-form" onSubmit={handleSubmit}>
      <h2>Upload Property</h2>

      <div className="form-group">
        <label>Property Type:</label>
        <select
          name="type"
          value={property.type}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="villa">Villa</option>
          <option value="flat">Flat</option>
          <option value="land">Land</option>
          <option value="rent">Rent</option>
        </select>
      </div>

      <div className="form-group">
        <label>Description:</label>
        <textarea
          name="description"
          value={property.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Rent:</label>
        <input
          type="number"
          name="rent"
          value={property.rent}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={property.location}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Area (sq ft):</label>
        <input
          type="number"
          name="area"
          value={property.area}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Price:</label>
        <input
          type="number"
          name="price"
          value={property.price}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label>Amenities:</label>
        <input
          type="text"
          name="amenities"
          value={property.amenities}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Upload Images:</label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
          required
        />
        <div className="image-previews">{renderImagePreviews()}</div>
      </div>

      <button type="submit" className="submit-button">
        Upload Property
      </button>
    </form>
  );
};

export default PropertyUpload;

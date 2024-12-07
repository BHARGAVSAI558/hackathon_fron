import React, { useState } from 'react';
 
const propertiesData = {
  Tirupati: [
    {"location": "15 Kapila Theertham Road", "property_type": "Apartment", "rental_price": 21000, "BHKS": "3 BHK", "square_feet": 1350, "availability": true, "contact_number": "9877-543-333", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "67 Leela Mahal Road", "property_type": "Villa", "rental_price": 55000, "BHKS": "4 BHK", "square_feet": 2100, "availability": false, "contact_number": "9864-432-555", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "89 Renigunta Road", "property_type": "Condo", "rental_price": 26000, "BHKS": "2 BHK", "square_feet": 1150, "availability": true, "contact_number": "9987-555-789", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "24 Tirumala Bypass Road", "property_type": "House", "rental_price": 34000, "BHKS": "3 BHK", "square_feet": 1600, "availability": true, "contact_number": "9754-221-998", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "19 Ashok Nagar", "property_type": "Apartment", "rental_price": 27000, "BHKS": "2 BHK", "square_feet": 1250, "availability": false, "contact_number": "9987-765-432", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "34 Srinivasa Nagar", "property_type": "Villa", "rental_price": 65000, "BHKS": "4 BHK", "square_feet": 2400, "availability": true, "contact_number": "9855-777-111", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "12 Mallikarjuna Nagar", "property_type": "Condo", "rental_price": 30000, "BHKS": "2 BHK", "square_feet": 1300, "availability": false, "contact_number": "9865-111-222", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "45 T.P. Area", "property_type": "House", "rental_price": 38000, "BHKS": "3 BHK", "square_feet": 1700, "availability": true, "contact_number": "9945-555-888", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "56 S.V. University Road", "property_type": "Apartment", "rental_price": 25000, "BHKS": "3 BHK", "square_feet": 1400, "availability": true, "contact_number": "9934-432-777", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"},
    {"location": "91 R.C. Road", "property_type": "Villa", "rental_price": 62000, "BHKS": "4 BHK", "square_feet": 2200, "availability": true, "contact_number": "9876-321-999", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Tirupati", "category": "rent"}
  ],

  Amaravati: [
    {"location": "5 Amaravati Road", "property_type": "Apartment", "rental_price": 19000, "BHKS": "3 BHK", "square_feet": 1400, "availability": true, "contact_number": "9987-111-222", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "22 Capital Region", "property_type": "Villa", "rental_price": 55000, "BHKS": "4 BHK", "square_feet": 2100, "availability": false, "contact_number": "9987-222-333", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "15 River View", "property_type": "Condo", "rental_price": 25000, "BHKS": "2 BHK", "square_feet": 1300, "availability": true, "contact_number": "9998-333-444", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "30 Heritage Town", "property_type": "House", "rental_price": 36000, "BHKS": "3 BHK", "square_feet": 1600, "availability": true, "contact_number": "9876-444-555", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "18 Green Fields", "property_type": "Apartment", "rental_price": 23000, "BHKS": "2 BHK", "square_feet": 1250, "availability": false, "contact_number": "9543-555-666", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "9 Lotus Enclave", "property_type": "Villa", "rental_price": 62000, "BHKS": "4 BHK", "square_feet": 2400, "availability": true, "contact_number": "9432-666-777", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "12 Cultural Centre", "property_type": "Condo", "rental_price": 27000, "BHKS": "2 BHK", "square_feet": 1350, "availability": false, "contact_number": "9654-777-888", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "40 Riverfront", "property_type": "House", "rental_price": 40000, "BHKS": "3 BHK", "square_feet": 1800, "availability": true, "contact_number": "9123-888-999", "pet_friendly": false, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "11 Central Park", "property_type": "Apartment", "rental_price": 21000, "BHKS": "3 BHK", "square_feet": 1400, "availability": true, "contact_number": "9876-999-000", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"},
    {"location": "33 Park View", "property_type": "Villa", "rental_price": 72000, "BHKS": "4 BHK", "square_feet": 2800, "availability": true, "contact_number": "9543-000-111", "pet_friendly": true, "amenities": "Swimming Pool, Gym, Parking, Garden", "city": "Amaravati", "category": "rent"}
  ],
 
}
const Rent = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [properties, setProperties] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
    setProperties(propertiesData[location] || []);
    setExpandedIndex(null);  
  };

  const handleToggleDetails = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index); // Toggle the clicked property
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <h1>Select Location</h1>
      <select
        value={selectedLocation}
        onChange={handleLocationChange}
        style={{ padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '3px solid black' }}
      >
        <option value="">Select</option>
        <option value="Tirupati">Tirupati</option>
        <option value="Vijayawada">Vijayawada</option>
        <option value="Vizag">Vizag</option>
        <option value="Amaravati">Amaravati</option>
        <option value="Nellore">Nellore</option>
      </select>

      <div style={{ width: '80%' }}>
        {properties.length === 0 ? (
          <p>Please select a location to view properties.</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {properties.map((property, index) => (
              <div
                key={index}
                style={{
                  width: '25%', // Changed to 25% for better layout, showing 4 items per row
                  border: '3.5px solid grey',
                  borderRadius: '20px',
                  padding: '20px',
                  marginBottom: '30px',
                  textAlign: 'center',
                  transition: 'transform 0.3s, border-color 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.07)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.borderColor = 'grey';
                  e.currentTarget.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
                }}
              >
                {/* Image */}
                <img
                  src={property.image} // Dynamically load the image URL for each property
                  alt="Property"
                  style={{ width: '100%', height: 'auto', marginBottom: '10px' }}
                />
                <h3>{property.property_type} - {property.location}</h3>
                <p>Rent: ₹{property.rental_price}</p>
                <button 
                  onClick={() => handleToggleDetails(index)} 
                  style={{ padding: '10px 10px', cursor: 'pointer' }}
                >
                  {expandedIndex === index ? 'View Less' : 'View More'}
                </button>
                {expandedIndex === index && (
                  <div>
                    <p>Bedrooms: {property.BHKS}</p>
                    <p>Square Feet: {property.square_feet}</p>
                    <p>Amenities: {property.amenities}</p>
                    <p>Availability: {property.availability ? 'Available' : 'Not Available'}</p>
                    <p>Contact: {property.contact_number}</p>
                    <p>Pet Friendly: {property.pet_friendly ? 'Yes' : 'No'}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rent;

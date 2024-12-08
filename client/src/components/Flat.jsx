import React, { useState, useEffect } from 'react';
import flat1 from '../images/flat1.jpeg';
import flat2 from '../images/flat2.jpeg';
import flat3 from '../images/flat3.jpeg';
import flat4 from '../images/flat4.jpeg';
import flat5 from '../images/flat5.jpeg';
import flat6 from '../images/flat6.jpeg';
import flat7 from '../images/flat7.jpeg';
import flat8 from '../images/flat8.jpeg';
import flat9 from '../images/flat9.jpeg';
import flat10 from '../images/flat10.jpeg';
import flat11 from '../images/flat11.jpg';
import flat12 from '../images/flat12.jpeg';
import flat13 from '../images/flat13.jpeg';
import flat14 from '../images/flat14.jpeg';
import flat15 from '../images/flat15.jpeg';



const propertiesData = {
  Tirupati:
  [
    {
      "property_type": "Flat",
      "apartment_name": "Sai Towers",
      "location": "Balaji Nagar",
      "area": 1200,
      "rent": 18000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Mr. Rajesh",
      "image": flat1,
      "googleLocation": "https://goo.gl/maps/tirupati12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Sri Venkateswara Residency",
      "location": "Vinoba Nagar",
      "area": 1500,
      "rent": 22000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Ms. Priya",
      "image": flat2,
      "googleLocation": "https://goo.gl/maps/tirupati67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Govindaraja Apartments",
      "location": "A.V. Road",
      "area": 1100,
      "rent": 16000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Mr. Sunil",
      "image": flat3,
      "googleLocation": "https://goo.gl/maps/tirupati123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Vaishnavi Nilayam",
      "location": "Old Tirupati",
      "area": 1300,
      "rent": 20000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Ms. Anjali",
      "image": flat4,
      "googleLocation": "https://goo.gl/maps/tirupati789012"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Tirumala Hills View",
      "location": "Venkatapuram",
      "area": 1050,
      "rent": 15000,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Mr. Rohan",
      "image": flat5,
      "googleLocation": "https://goo.gl/maps/tirupati345678"
    },{
      "property_type": "Flat",
      "apartment_name": "Balaji Enclave",
      "location": "Renigunta Road",
      "area": 1200,
      "rent": 17000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Mr. Rajesh",
      "image": flat6,
      "googleLocation": "https://goo.gl/maps/tirupati12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Srinivasa Towers",
      "location": "Alipiri Road",
      "area": 1500,
      "rent": 22000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Ms. Priya",
      "image": flat7,
      "googleLocation": "https://goo.gl/maps/tirupati67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Padmavathi Residency",
      "location": "Railway Station Road",
      "area": 1100,
      "rent": 16000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Mr. Sunil",
      "image": flat8,
      "googleLocation": "https://goo.gl/maps/tirupati123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Kalyana Venkateswara Enclave",
      "location": "Tiruchanur Road",
      "area": 1300,
      "rent": 20000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Tirupati",
      "owner_name": "Ms. Anjali",
      "image": flat9,
      "googleLocation": "https://goo.gl/maps/tirupati789012"
    }
  ],
  Vijayawada:   [
    {
      "property_type": "Flat",
      "apartment_name": "Krishna Residency",
      "location": "MG Road",
      "area": 1200,
      "rent": 18000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Mr. Rajesh",
      "image": flat10,
      "googleLocation": "https://goo.gl/maps/vijayawada12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Krishnaveni Enclave",
      "location": "Benz Circle",
      "area": 1500,
      "rent": 22000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Ms. Priya",
      "image":flat11,
      "googleLocation": "https://goo.gl/maps/vijayawada67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Sai Ram Apartments",
      "location": "Labbipet",
      "area": 1100,
      "rent": 16000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Mr. Sunil",
      "image": flat12,
      "googleLocation": "https://goo.gl/maps/vijayawada123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Gayatri Enclave",
      "location": "Patamata",
      "area": 1300,
      "rent": 20000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Ms. Anjali",
      "image": flat13,
      "googleLocation": "https://goo.gl/maps/vijayawada789012"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Phani Enclave",
      "location": "Gannavaram",
      "area": 1050,
      "rent": 15000,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Mr. Rohan",
      "image": flat14,
      "googleLocation": "https://goo.gl/maps/vijayawada345678"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Sri Krishna Enclave",
      "location": "Pulivendula",
      "area": 1400,
      "rent": 21000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Vijayawada",
      "owner_name": "Ms. Neha",
      "image": flat15,
      "googleLocation": "https://goo.gl/maps/vijayawada12345"
    }

  ],
  Vizag:[
    {
      "property_type": "Flat",
      "apartment_name": "Sea Breeze Apartments",
      "location": "MVP Colony",
      "area": 1200,
      "rent": 20000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking", "Gym"],
      "city": "Vizag",
      "owner_name": "Mr. Rajesh",
      "image": flat1,
      "googleLocation": "https://goo.gl/maps/vizag12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Ocean View Residency",
      "location": "RK Beach Road",
      "area": 1500,
      "rent": 25000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym, Pool", "Security", "Parking"],
      "city": "Vizag",
      "owner_name": "Ms. Priya",
      "image": flat2,
      "googleLocation": "https://goo.gl/maps/vizag67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Dolphin Enclave",
      "location": "Madhurawada",
      "area": 1100,
      "rent": 18000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Vizag",
      "owner_name": "Mr. Sunil",
      "image": flat3,
      "googleLocation": "https://goo.gl/maps/vizag123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Sea Breeze Residency",
      "location": "Gajuwaka",
      "area": 1300,
      "rent": 22000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Vizag",
      "owner_name": "Ms. Anjali",
      "image": flat4,
      "googleLocation": "https://goo.gl/maps/vizag789012"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Bay View Apartments",
      "location": "Bhimili",
      "area": 1050,
      "rent": 16000,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Vizag",
      "owner_name": "Mr. Rohan",
      "image": flat5,
      "googleLocation": "https://goo.gl/maps/vizag345678"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Dolphin Heights",
      "location": "Pendurti",
      "area": 1400,
      "rent": 21000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Vizag",
      "owner_name": "Ms. Neha",
      "image": flat6,
      "googleLocation": "https://goo.gl/maps/vizag12345"
    }
  ],
  Amaravati:[
    {
      "property_type": "Flat",
      "apartment_name": "Amaravati Heights",
      "location": "CBD Area",
      "area": 1200,
      "rent": 20000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking", "Gym"],
      "city": "Amaravati",
      "owner_name": "Mr. Rajesh",
      "image": flat7,
      "googleLocation": "https://goo.gl/maps/amaravati12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Krishna River View",
      "location": "Mangalagiri",
      "area": 1500,
      "rent": 25000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym, Pool", "Security", "Parking"],
      "city": "Amaravati",
      "owner_name": "Ms. Priya",
      "image": flat8,
      "googleLocation": "https://goo.gl/maps/amaravati67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Dhruva Enclave",
      "location": "Tadepalligudem",
      "area": 1100,
      "rent": 18000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Amaravati",
      "owner_name": "Mr. Sunil",
      "image": flat9,
      "googleLocation": "https://goo.gl/maps/amaravati123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Indra Enclave",
      "location": "Guntur Road",
      "area": 1300,
      "rent": 22000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Amaravati",
      "owner_name": "Ms. Anjali",
      "image": flat10,
      "googleLocation": "https://goo.gl/maps/amaravati789012"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Krishnaveni Enclave",
      "location": "Vijayawada Road",
      "area": 1050,
      "rent": 16000,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Amaravati",
      "owner_name": "Mr. Rohan",
      "image": flat11,
      "googleLocation": "https://goo.gl/maps/amaravati345678"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Phani Enclave",
      "location": "Guntur Road",
      "area": 1400,
      "rent": 21000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Amaravati",
      "owner_name": "Ms. Neha",
      "image": flat12,
      "googleLocation": "https://goo.gl/maps/amaravati12345"
    }
  ],
  Nellore:[
    {
      "property_type": "Flat",
      "apartment_name": "Nellore Heights",
      "location": "Nellore City",
      "area": 1200,
      "rent": 15000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Mr. Rajesh",
      "image": flat5,
      "googleLocation": "https://goo.gl/maps/nellore12345"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Kavali Enclave",
      "location": "Kavali",
      "area": 1500,
      "rent": 18000,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Ms. Priya",
      "image": flat8,
      "googleLocation": "https://goo.gl/maps/nellore67890"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Atmakur Residency",
      "location": "Atmakur",
      "area": 1100,
      "rent": 13000,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "7845612390",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Mr. Sunil",
      "image": flat4,
      "googleLocation": "https://goo.gl/maps/nellore123456"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Nellore Gateway",
      "location": "Nellore City",
      "area": 1300,
      "rent": 17000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Ms. Anjali",
      "image": flat13,
      "googleLocation": "https://goo.gl/maps/nellore789012"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Kandukur Residency",
      "location": "Kandukur",
      "area": 1050,
      "rent": 12000,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "8907654321",
      "pet_friendly": false,
      "amenities": ["Lift", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Mr. Rohan",
      "image": flat14,
      "googleLocation": "https://goo.gl/maps/nellore345678"
    },
    {
      "property_type": "Flat",
      "apartment_name": "Venkatagiri Enclave",
      "location": "Venkatagiri",
      "area": 1400,
      "rent": 18000,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876543210",
      "pet_friendly": true,
      "amenities": ["Lift", "Gym", "Security", "Parking"],
      "city": "Nellore",
      "owner_name": "Ms. Neha",
      "image": flat15,
      "googleLocation": "https://goo.gl/maps/nellore12345"
    }
  ]

}
 
const Flat = () => {
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
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleViewOnMap = (googleLocation) => {
    window.open(googleLocation, '_blank');
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
          <p align="center">Please select a location to view properties.</p>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
            {properties.map((property, index) => (
              <div
                key={index}
                style={{
                  width: '25%',
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
                  e.currentTarget.style.boxShadow =
                    '0 0 20px 5px rgba(0, 255, 255, 0.7), 0 0 20px 10px rgba(255, 0, 255, 0.7), 0 0 30px 10px rgba(255, 255, 0, 0.7)';
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
                <h3>{property.type} - {property.location}</h3>
                <p>Price: ₹{property.rent}</p>
                <button
                  onClick={() => handleToggleDetails(index)}
                  style={{ padding: '10px 10px', cursor: 'pointer' }}
                >
                  {expandedIndex === index ? 'View Less' : 'View More'}
                </button>
                {expandedIndex === index && (
                  <div>
                    <p>Square Feet: {property.square_feet}</p>
                    <p>Amenities: {property.amenities}</p>
                    <p>Owner Name: {property.owner_name}</p>
                    <p>Contact: {property.phone_number}</p>
                    <button
                      onClick={() => handleViewOnMap(property.googleLocation)}
                      style={{
                        padding: '5px 10px',
                        color: 'red',
                        cursor: 'pointer',
                        marginTop: '10px',
                      }}
                    >
                      Street View on Map
                    </button>
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

export default Flat;

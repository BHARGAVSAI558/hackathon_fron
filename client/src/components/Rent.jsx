 
import React, { useState } from 'react';
import villa1 from '../images/villa31.jpg';
import villa2 from '../images/villa35.jpeg';
import villa3 from '../images/villa29.jpeg';
import apartment1 from '../images/apartment1.jpg';
import apartment2 from '../images/apartment2.jpg';
import apartment3 from '../images/apartment3.jpg';
import plot1 from '../images/Bplot20.png';
import plot2 from '../images/Bplot17.png';
import plot3 from '../images/Bplot10.jpg';
import villa4 from '../images/villa1.avif';
import villa5 from '../images/villa3.avif';
import villa6 from '../images/villa10.jpg';
import villa7 from '../images/villa13.jpg';
import villa8 from '../images/villa16.jpg';
import villa9 from '../images/villa1.avif';
import villa10 from '../images/villa3.avif';
import villa11 from '../images/villa10.jpg';
import villa12 from '../images/villa13.jpg';
import villa13 from '../images/villa16.jpg';
import apartment4 from '../images/apartment1.jpg';
import apartment5 from '../images/apartment4.jpg';
import apartment6 from '../images/apartment7.jpg';
import apartment7 from '../images/apartment5.jpg';
import apartment8 from '../images/apartment4.jpg';
import apartment9 from '../images/apartment7.jpg';
import apartment10 from '../images/apartment5.jpg';
import plot4 from '../images/Bplot10.jpg';
import plot5 from '../images/Bplot11.jpg';
import plot6 from '../images/Bplot12.jpg'
const propertiesData = {
  Tirupati:  [
    {
      "property_type": "Villa",
      "area": "Alipiri",
      "rent": 15000,
      "square_feet": 4000,
      "bhk": "4BHK",
      "amenities": ["Balcony", "Garden", "Parking"],
      "owner_name": "Suresh Reddy",
      "phone_number": "9876543210",
      "image": villa1,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada5"
    },
    {
      "property_type": "Plot",
      "area": "Srinivasa Nagar",
      "rent": 12000,
      "square_feet": 2500,
      "bhk": "NA",
      "amenities": ["NA"],
      "owner_name": "Rani Singh",
      "phone_number": "8907654321",
      "image": plot1,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada6"
    },
    {
      "property_type": "Apartment",
      "area": "Renigunta",
      "rent": 10000,
      "square_feet": 1500,
      "bhk": "3BHK",
      "amenities": ["Parking", "Security"],
      "owner_name": "Ram Kumar",
      "phone_number": "7845612390",
      "image": apartment1,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada7"
    },
    {
      "property_type": "Villa",
      "area": "Tirupati Railway Station Road",
      "rent": 18000,
      "square_feet": 4500,
      "bhk": "5BHK",
      "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
      "owner_name": "Suresh Reddy",
      "phone_number": "9876543210",
      "image": villa2,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada8"
    },
    {
      "property_type": "Plot",
      "area": "Kapila Theertham",
      "rent": 12000,
      "square_feet": 2000,
      "bhk": "NA",
      "amenities": ["NA"],
      "owner_name": "Rani Singh",
      "phone_number": "8907654321",
      "image":plot2,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada9"
    },
    {
      "property_type": "Apartment",
      "area": "Srinivasa Nagar Colony",
      "rent": 10000,
      "square_feet": 1500,
      "bhk": "3BHK",
      "amenities": ["Parking", "Security"],
      "owner_name": "Ram Kumar",
      "phone_number": "7845612390",
      "image": apartment2,
      "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada0"
    },
    {
      "property_type": "Villa",
      "area": "Ranganayakulu Nagar",
      "rent": 16000,
      "square_feet": 4200,
      "bhk": "4BHK",
      "amenities": ["Swimming Pool", "Gym", "Garden"],
      "owner_name": "Suresh Reddy",
      "phone_number": "9876543210",
      "image": villa3,
      "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada1"
    },
    {
      "property_type": "Plot",
      "area": "Tiruchanur",
      "rent": 12000,
      "square_feet": 2200,
      "bhk": "NA",
      "amenities": ["NA"],
      "owner_name": "Rani Singh",
      "phone_number": "8907654321",
      "image": plot3,
      "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada2"
    },
    {
      "property_type": "Apartment",
      "area": "Karakambadi",
      "rent": 10000,
      "square_feet": 1300,
      "bhk": "2BHK",
      "amenities": ["Parking", "Security"],
      "owner_name": "Ram Kumar",
      "phone_number": "7845612390",
      "image": apartment3,
      "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada3"
    }
  ],


   Amaravati : [
    {
      "property_type": "Apartment",
      "area": "5 Amaravati Road",
      "rent": 19000,
      "square_feet": 1400,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rajesh",
      "phone_number": "9987-111-222",
      "image": apartment4,
      "googleLocation": "https://goo.gl/maps/12345"
    },
    {
      "property_type": "Villa",
      "area": "22 Capital Region",
      "rent": 55000,
      "square_feet": 2100,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Priya",
      "phone_number": "9987-222-333",
      "image": villa4,
      "googleLocation": "https://goo.gl/maps/67890"
    },
    {
      "property_type": "Condo",
      "area": "15 River View",
      "rent": 25000,
      "square_feet": 1300,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Sunil",
      "phone_number": "9998-333-444",
      "image": villa5,
      "googleLocation": "https://goo.gl/maps/123456"
    },
    {
      "property_type": "House",
      "area": "30 Heritage Town",
      "rent": 36000,
      "square_feet": 1600,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Anjali",
      "phone_number": "9876-444-555",
      "image": villa6,
      "googleLocation": "https://goo.gl/maps/789012"
    },
    {
      "property_type": "Apartment",
      "area": "18 Green Fields",
      "rent": 23000,
      "square_feet": 1250,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rohan",
      "phone_number": "9543-555-666",
      "image": apartment5,
      "googleLocation": "https://goo.gl/maps/345678"
    },
    {
      "property_type": "Villa",
      "area": "9 Lotus Enclave",
      "rent": 62000,
      "square_feet": 2400,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Neha",
      "phone_number": "9432-666-777",
      "image": villa7,
      "googleLocation": "https://goo.gl/maps/901234"
    },
    {
      "property_type": "Condo",
      "area": "12 Cultural Centre",
      "rent": 27000,
      "square_feet": 1350,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Nikhil",
      "phone_number": "9654-777-888",
      "image": plot4,
      "googleLocation": "https://goo.gl/maps/567890"
    },
    {
      "property_type": "House",
      "area": "40 Riverfront",
      "rent": 40000,
      "square_feet": 1800,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Anika",
      "phone_number": "9123-888-999",
      "image": apartment6,
      "googleLocation": "https://goo.gl/maps/1234567"
    },
    {
      "property_type": "Apartment",
      "area": "11 Central Park",
      "rent": 21000,
      "square_feet": 1400,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rohan",
      "phone_number": "9876-999-000",
      "image": apartment7,
      "googleLocation": "https://goo.gl/maps/890123"
    },
    {
      "property_type": "Villa",
      "area": "33 Park View",
      "rent": 72000,
      "square_feet": 2800,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Neha",
      "phone_number": "9543-000-111",
      "image": villa8,
      "googleLocation": "https://goo.gl/maps/456789"
    }
  ],

Nellore:
  [
    {
      "property_type": "Apartment",
      "area": "12 Peddaganjam Bypass",
      "rent": 23000,
      "square_feet": 1400,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rajesh",
      "phone_number": "9123-456-789",
      "image": apartment8,
      "googleLocation": "https://goo.gl/maps/12345"
    },
    {
      "property_type": "Villa",
      "area": "78 Reddy Street",
      "rent": 60000,
      "square_feet": 2500,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Priya",
      "phone_number": "9345-678-123",
      "image": villa9,
      "googleLocation": "https://goo.gl/maps/67890"
    },
    {
      "property_type": "Condo",
      "area": "45 Railway Station Road",
      "rent": 28000,
      "square_feet": 1300,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Sunil",
      "phone_number": "9876-543-210",
      "image": villa10,
      "googleLocation": "https://goo.gl/maps/123456"
    },
    {
      "property_type": "House",
      "area": "33 Newtown Area",
      "rent": 36000,
      "square_feet": 1700,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Anjali",
      "phone_number": "9987-654-321",
      "image": plot6,
      "googleLocation": "https://goo.gl/maps/789012"
    },
    {
      "property_type": "Apartment",
      "area": "22 Old Post Office Road",
      "rent": 29000,
      "square_feet": 1200,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rohan",
      "phone_number": "8765-432-109",
      "image": apartment9,
      "googleLocation": "https://goo.gl/maps/345678"
    },
    {
      "property_type": "Villa",
      "area": "10 Sree Nagar",
      "rent": 68000,
      "square_feet": 2600,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Neha",
      "phone_number": "9543-210-987",
      "image": villa11,
      "googleLocation": "https://goo.gl/maps/901234"
    },
    {
      "property_type": "Condo",
      "area": "88 Collectorate Road",
      "rent": 31000,
      "square_feet": 1350,
      "bhk": "2 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Nikhil",
      "phone_number": "9654-321-654",
      "image": plot5,
      "googleLocation": "https://goo.gl/maps/567890"
    },
    {
      "property_type": "House",
      "area": "14 Aluru Subba Rao Road",
      "rent": 40000,
      "square_feet": 1800,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Anika",
      "phone_number": "9321-098-765",
      "image": villa12,
      "googleLocation": "https://goo.gl/maps/1234567"
    },
    {
      "property_type": "Apartment",
      "area": "57 Kamalapathi Nagar",
      "rent": 27000,
      "square_feet": 1500,
      "bhk": "3 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Mr. Rohan",
      "phone_number": "9843-210-345",
      "image": apartment10,
      "googleLocation": "https://goo.gl/maps/890123"
    },
    {
      "property_type": "Villa",
      "area": "30 L.B. Nagar",
      "rent": 62000,
      "square_feet": 2400,
      "bhk": "4 BHK",
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "owner_name": "Ms. Neha",
      "phone_number": "9087-654-321",
      "image": villa13,
      "googleLocation": "https://goo.gl/maps/456789"
    }
  
],
 
  Vijayawada:   [
    {
      "property_type": "Apartment",
      "area": "12 Eluru Road",
      "rent": 22000,
      "square_feet": 1400,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9876-543-210",
      "pet_friendly": true,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Mr. Rajesh",
      "image": apartment10,
      "googleLocation": "https://goo.gl/maps/Vijayawada12345"
    },
    {
      "property_type": "Villa",
      "area": "55 Benz Circle",
      "rent": 60000,
      "square_feet": 2200,
      "bhk": "4 BHK",
      "availability": false,
      "contact_number": "9865-432-109",
      "pet_friendly": true,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Ms. Priya",
      "image": villa2,
      "googleLocation": "https://goo.gl/maps/Vijayawada67890"
    },
    {
      "property_type": "Condo",
      "area": "34 Kanak Durga Temple Road",
      "rent": 30000,
      "square_feet": 1300,
      "bhk": "2 BHK",
      "availability": true,
      "contact_number": "9123-456-789",
      "pet_friendly": false,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Mr. Sunil",
      "image": villa4,
      "googleLocation": "https://goo.gl/maps/Vijayawada123456"
    },
    {
      "property_type": "House",
      "area": "77 M.G. Road",
      "rent": 38000,
      "square_feet": 1600,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9432-567-890",
      "pet_friendly": false,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Ms. Anjali",
      "image":villa9,
      "googleLocation": "https://goo.gl/maps/Vijayawada789012"
    },
    {
      "property_type": "Apartment",
      "area": "21 Ameerpet",
      "rent": 24000,
      "square_feet": 1250,
      "bhk": "2 BHK",
      "availability": false,
      "contact_number": "9876-543-321",
      "pet_friendly": true,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Mr. Rohan",
      "image": apartment7,
      "googleLocation": "https://goo.gl/maps/Vijayawada345678"
    },
    {
      "property_type": "Condo",
      "area": "90 Lenin Center",
      "rent": 32000,
      "square_feet": 1500,
      "bhk": "3 BHK",
      "availability": false,
      "contact_number": "9865-321-654",
      "pet_friendly": false,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Mr. Nikhil",
      "image": plot4,
      "googleLocation": "https://goo.gl/maps/Vijayawada567890"
    },
    {
      "property_type": "House",
      "area": "56 Vidhyadharapuram",
      "rent": 42000,
      "square_feet": 1800,
      "bhk": "3 BHK",
      "availability": true,
      "contact_number": "9987-654-321",
      "pet_friendly": false,
      "amenities": ["Swimming Pool", "Gym", "Parking", "Garden"],
      "city": "Vijayawada",
      "owner_name": "Ms. Anika",
      "image": plot6,
      "googleLocation": "https://goo.gl/maps/Vijayawada1234567"
    }
   ],
  Vizag: 
    [
      {
        "property_type": "Apartment",
        "area": "MVP Colony",
        "rent": 25000,
        "square_feet": 1200,
        "bhk": "2 BHK",
        "availability": true,
        "contact_number": "9876543210",
        "pet_friendly": false,
        "amenities": ["Parking", "Security"],
        "city": "Vizag",
        "owner_name": "Mr. Rajesh",
        "image": apartment5,
        "googleLocation": "https://goo.gl/maps/vizag12345"
      },
      {
        "property_type": "Villa",
        "area": "RK Beach",
        "rent": 60000,
        "square_feet": 2500,
        "bhk": "4 BHK",
        "availability": false,
        "contact_number": "8907654321",
        "pet_friendly": true,
        "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
        "city": "Vizag",
        "owner_name": "Ms. Priya",
        "image":villa6,
        "googleLocation": "https://goo.gl/maps/vizag67890"
      },
      {
        "property_type": "Condo",
        "area": "Pendurti",
        "rent": 22000,
        "square_feet": 1100,
        "bhk": "2 BHK",
        "availability": true,
        "contact_number": "7845612390",
        "pet_friendly": false,
        "amenities": ["Parking", "Security"],
        "city": "Vizag",
        "owner_name": "Mr. Sunil",
        "image": plot6,
        "googleLocation": "https://goo.gl/maps/vizag123456"
      },
      {
        "property_type": "House",
        "area": "Seethammadhara",
        "rent": 35000,
        "square_feet": 1600,
        "bhk": "3 BHK",
        "availability": true,
        "contact_number": "9876543210",
        "pet_friendly": false,
        "amenities": ["Parking", "Garden"],
        "city": "Vizag",
        "owner_name": "Ms. Anjali",
        "image": villa6,
        "googleLocation": "https://goo.gl/maps/vizag789012"
      },
      {
        "property_type": "Apartment",
        "area": "Madhurawada",
        "rent": 23000,
        "square_feet": 1250,
        "bhk": "2 BHK",
        "availability": false,
        "contact_number": "8907654321",
        "pet_friendly": true,
        "amenities": ["Parking", "Security"],
        "city": "Vizag",
        "owner_name": "Mr. Rohan",
        "image": apartment4,
        "googleLocation": "https://goo.gl/maps/vizag345678"
      },
      {
        "property_type": "Villa",
        "area": "Gajuwaka",
        "rent": 65000,
        "square_feet": 2600,
        "bhk": "4 BHK",
        "availability": true,
        "contact_number": "7845612390",
        "pet_friendly": true,
        "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
        "city": "Vizag",
        "owner_name": "Ms. Neha",
        "image": villa13,
        "googleLocation": "https://goo.gl/maps/vizag901234"
      },
      {
        "property_type": "Condo",
        "area": "Bhimili",
        "rent": 28000,
        "square_feet": 1350,
        "bhk": "2 BHK",
        "availability": false,
        "contact_number": "9876543210",
        "pet_friendly": false,
        "amenities": ["Parking", "Security"],
        "city": "Vizag",
        "owner_name": "Mr. Nikhil",
        "image": plot5,
        "googleLocation": "https://goo.gl/maps/vizag567890"
      },
      {
        "property_type": "House",
        "area": "Visakhapatnam Airport Area",
        "rent": 40000,
        "square_feet": 1800,
        "bhk": "3 BHK",
        "availability": true,
        "contact_number": "8907654321",
        "pet_friendly": false,
        "amenities": ["Parking", "Garden"],
        "city": "Vizag",
        "owner_name": "Ms. Anika",
        "image": villa2,
        "googleLocation": "https://goo.gl/maps/vizag1234567"
      }
    ] 
};

const Rent = () => {
  const [selectedLocation, setSelectedLocation] = useState('');
  const [properties, setProperties] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleLocationChange = (event) => {
    const location = event.target.value;
    setSelectedLocation(location);
  
    // Fetch and display the properties for the selected location
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
                <h3>{property.property_type} - {property.area}</h3>
                <p>Rent: ₹{property.rent}</p>
                <button 
                  onClick={() => handleToggleDetails(index)} 
                  style={{ padding: '10px 10px', cursor: 'pointer' }}
                >
                  {expandedIndex === index ? 'View Less' : 'View More'}
                </button>
                {expandedIndex === index && (
                  <div>
                    <p>Bedrooms: {property.bhk}</p>
                    <p>Square Feet: {property.square_feet}</p>
                    <p>Amenities: {property.amenities.join(', ')}</p>
                    <p>Owner: {property.owner_name}</p>
                    <p>Contact: {property.phone_number}</p>
                    <p>
                      <a href={property.googleLocation} target="_blank" rel="noopener noreferrer">
                        View on Google Maps
                      </a>
                    </p>
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
import React, { useState } from 'react';
import villa1 from '../images/villa1.avif';
import villa2 from '../images/villa2';
import villa3 from '../images/villa3.avif';
import villa4 from '../images/villa4.avif';
import villa5 from '../images/villa5.avif';
import villa6 from '../images/villa18.jpg';
import villa7 from '../images/villa7.avif';
import villa8 from '../images/villa8.webp';
import villa9 from '../images/villa9.webp';
import villa10 from '../images/villa10.jpg';
import villa11 from '../images/villa11.jpg';
import villa12 from '../images/villa12.jpg';
import villa13 from '../images/villa13.jpg';
import villa14 from '../images/villa14.jpg';
import villa15 from '../images/villa15.jpg';
import villa16 from '../images/villa16.jpg';
import villa17 from '../images/villa17.webp';
import villa18 from '../images/villa18.jpg';
import villa19 from '../images/villa19.jpg';
import villa20 from '../images/villa20.jpg';
import villa21 from '../images/villa21.jpg';
import villa22 from '../images/villa22.jpg';
import villa23 from '../images/villa23.jpg';
import villa24 from '../images/villa24.jpg';
import villa25 from '../images/villa25.jpg';
import villa26 from '../images/villa26.jpg';
import villa27 from '../images/villa27.jpg';
import villa28 from '../images/villa28.jpg';
import villa29 from '../images/villa29.jpeg';
import villa30 from '../images/villa30.jpeg';
import villa31 from '../images/villa31.jpeg';
import villa32 from '../images/villa31.jpg';
import villa33 from '../images/villa33.jpeg';
import villa34 from '../images/villa34.jpeg';
import villa35 from '../images/villa35.jpeg';
import villa36 from '../images/villa36.jpeg';
import villa37 from '../images/villa37.jpg';
import villa38 from '../images/villa38.jpeg';



 
const propertiesData = {
 
  Vijayawada:   [
    {
      "property_type": "Villa",
      "area": "Moghalrajpuram",
      "price": 1200000,
      "square_feet": 3500,
      "bhk": "5BHK",
      "amenities": ["Swimming Pool", "Gym", "Security"],
      "owner_name": "Geeta Reddy",
      "phone_number": "7894561230",
      "image": villa1,
      "googleLocation": "https://www.google.com/maps/place/Moghalrajpuram,+Vijayawada"
  },
  {
    "property_type": "Villa",
    "area": "Labbipet",
    "price": 950000,
    "square_feet": 2700,
    "bhk": "4BHK",
    "amenities": ["Balcony", "Garden", "Play Area"],
    "owner_name": "Arjun Bhat",
    "phone_number": "8101234567",
    "image": villa2, // Add your image path here
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Gannavaram",
  "price": 1500000,
  "square_feet": 4200,
  "bhk": "6BHK",
  "amenities": ["Swimming Pool", "Gym", "Home Theater", "Security", "Party Hall"],
  "owner_name": "Sunil Kumar",
  "phone_number": "9876543210",
  "image": villa3, // Add your image path here
  "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Madhuranagar",
  "price": 1100000,
  "square_feet": 3800,
  "bhk": "5BHK",
  "amenities": ["Swimming Pool", "Jacuzzi", "Garden", "Security", "Power Backup"],
  "owner_name": "Swathi Rao",
  "phone_number": "8907654321",
  "image": villa4, // Add your image path here
  "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Patamata",
  "price": 800000,
  "square_feet": 2500,
  "bhk": "3BHK",
  "amenities": ["Balcony", "Garden", "Clubhouse", "Security"],
  "owner_name": "Rajesh Gupta",
  "phone_number": "7845612390",
  "image": villa5, // Add your image path here
  "googleLocation": "https://www.google.com/maps/place/Patamata,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Benz Circle",
  "price": 1800000,
  "square_feet": 5000,
  "bhk": "7BHK",
  "amenities": ["Swimming Pool", "Gym", "Home Theater", "Jacuzzi", "Party Hall", "Security", "Power Backup"],
  "owner_name": "Anjali Mehta",
  "phone_number": "9123456789",
  "image": villa6, // Add your image path here
  "googleLocation": "https://www.google.com/maps/place/Benz+Circle,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Bhavanipuram",
  "price": 1300000,
  "square_feet": 4000,
  "bhk": "4BHK",
  "amenities": ["Swimming Pool", "Gymnasium", "Garden", "Security", "Power Backup"],
  "owner_name": "Prakash Rao",
  "phone_number": "8521473690",
  "image": villa7, // Add your image path here
  "googleLocation": "https://www.google.com/maps/place/Bhavanipuram,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Pulivendula",
  "price": 1200000,
  "square_feet": 3200,
  "bhk": "4BHK",
  "amenities": ["Swimming Pool", "Gym", "Garden"],
  "owner_name": "Suresh Reddy",
  "phone_number": "9876543210",
  "image": villa8 ,
  "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Tadepalligudem",
  "price": 1000000,
  "square_feet": 2800,
  "bhk": "3BHK",
  "amenities": ["Balcony", "Garden", "Play Area"],
  "owner_name": "Rani Singh",
  "phone_number": "8907654321",
  "image": villa9,
  "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada"
},
{
  "property_type": "Villa",
  "area": "Gudivada",
  "price": 800000,
  "square_feet": 2500,
  "bhk": "3BHK",
  "amenities": ["Balcony", "Garden", "Clubhouse"],
  "owner_name": "Ram Kumar",
  "phone_number": "7845612390",
  "image": villa10 ,
  "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada"
}
],
  Vizag: [
    {
      "property_type": "Villa",
      "area": "MVP Colony",
      "price": 1400000,
      "square_feet": 4000,
      "bhk": "4BHK",
      "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
      "owner_name": "Sunil Varma",
      "phone_number": "9876543210",
      "image": villa11,
      "googleLocation": "https://www.google.com/maps/place/MVP+Colony,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "RK Beach",
      "price": 1800000,
      "square_feet": 5200,
      "bhk": "5BHK",
      "amenities": ["Sea View", "Swimming Pool", "Gym", "Jacuzzi", "Party Hall"],
      "owner_name": "Swathi Rao",
      "phone_number": "8907654321",
      "image":villa12,
      "googleLocation": "https://www.google.com/maps/place/RK+Beach,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Pendurti",
      "price": 1000000,
      "square_feet": 3000,
      "bhk": "3BHK",
      "amenities": ["Balcony", "Garden", "Clubhouse", "Security"],
      "owner_name": "Rajesh Gupta",
      "phone_number": "7845612390",
      "image": villa13,
      "googleLocation": "https://www.google.com/maps/place/Pendurti,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Seethammadhara",
      "price": 1200000,
      "square_feet": 3500,
      "bhk": "4BHK",
      "amenities": ["Swimming Pool", "Gymnasium", "Garden", "Security", "Power Backup"],
      "owner_name": "Anjali Mehta",
      "phone_number": "9123456789",
      "image": villa14,
      "googleLocation": "https://www.google.com/maps/place/Seethammadhara,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Madhurawada",
      "price": 900000,
      "square_feet": 2800,
      "bhk": "3BHK",
      "amenities": ["Balcony", "Garden", "Play Area"],
      "owner_name": "Prakash Rao",
      "phone_number": "8521473690",
      "image": villa15,
      "googleLocation": "https://www.google.com/maps/place/Madhurawada,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Gajuwaka",
      "price": 1600000,
      "square_feet": 4500,
      "bhk": "5BHK",
      "amenities": ["Sea View", "Swimming Pool", "Gym", "Home Theater", "Security", "Power Backup"],
      "owner_name": "Suresh Reddy",
      "phone_number": "9876543210",
      "image": villa16,
      "googleLocation": "https://www.google.com/maps/place/Gajuwaka,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Gajuwaka",
      "price": 1600000,
      "square_feet": 4500,
      "bhk": "5BHK",
      "amenities": ["Sea View", "Swimming Pool", "Gym", "Home Theater", "Security", "Power Backup"],
      "owner_name": "Suresh Reddy",
      "phone_number": "9876543210",
      "image": villa17,
      "googleLocation": "https://www.google.com/maps/place/Gajuwaka,+Visakhapatnam"
    },
    {
      "property_type": "Villa",
      "area": "Bhimili",
      "price": 1200000,
      "square_feet": 3200,
      "bhk": "4BHK",
      "amenities": ["Sea View", "Garden", "Clubhouse"],
      "owner_name": "Rani Singh",
      "phone_number": "8907654321",
      "image": villa18,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada3"
    },
    {
      "property_type": "Villa",
      "area": "Visakhapatnam Airport Area",
      "price": 1800000,
      "square_feet": 5000,
      "bhk": "5BHK",
      "amenities": ["Swimming Pool", "Gym", "Jacuzzi", "Party Hall", "Security"],
      "owner_name": "Ram Kumar",
      "phone_number": "7845612390",
      "image": villa19,
      "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada4"
    }
  ],
Tirupati:[
  {
    "property_type": "Villa",
    "area": "Alipiri",
    "price": 1500000,
    "square_feet": 4000,
    "bhk": "4BHK",
    "amenities": ["Balcony", "Garden", "Parking"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa20,
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada5"
  },
  {
    "property_type": "Villa",
    "area": "Srinivasa Nagar",
    "price": 1200000,
    "square_feet": 3500,
    "bhk": "3BHK",
    "amenities": ["Balcony", "Garden"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa21,
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada6"
  },
  {
    "property_type": "Villa",
    "area": "Renigunta",
    "price": 1000000,
    "square_feet": 2800,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa22,
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada7"
  },
  {
    "property_type": "Villa",
    "area": "Tirupati Railway Station Road",
    "price": 1800000,
    "square_feet": 4500,
    "bhk": "5BHK",
    "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa23,
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada8"
  },
  {
    "property_type": "Villa",
    "area": "Kapila Theertham",
    "price": 1200000,
    "square_feet": 3200,
    "bhk": "4BHK",
    "amenities": ["Balcony", "Garden", "Parking"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa24,
    "googleLocation": "https://www.google.com/maps/place/Labbipet,+Vijayawada9"
  },
  {
    "property_type": "Villa",
    "area": "Srinivasa Nagar Colony",
    "price": 1000000,
    "square_feet": 2800,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa25,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada0"
  },
  {
    "property_type": "Villa",
    "area": "Ranganayakulu Nagar",
    "price": 1600000,
    "square_feet": 4200,
    "bhk": "4BHK",
    "amenities": ["Swimming Pool", "Gym", "Garden"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa26,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada1"
  },
  {
    "property_type": "Villa",
    "area": "Tiruchanur",
    "price": 1200000,
    "square_feet": 3500,
    "bhk": "3BHK",
    "amenities": ["Balcony", "Garden"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa27,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada2"
  },
  {
    "property_type": "Villa",
    "area": "Karakambadi",
    "price": 1000000,
    "square_feet": 2800,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa28,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada3"
  }
],
Nellore:[
  {
    "property_type": "Villa",
    "area": "Nellore City",
    "price": 1200000,
    "square_feet": 3500,
    "bhk": "4BHK",
    "amenities": ["Swimming Pool", "Gym", "Garden"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa29,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada4"
  },
  {
    "property_type": "Villa",
    "area": "Kavali",
    "price": 1000000,
    "square_feet": 3000,
    "bhk": "3BHK",
    "amenities": ["Balcony", "Garden"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa30,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada5"
  },
  {
    "property_type": "Villa",
    "area": "Atmakur",
    "price": 800000,
    "square_feet": 2500,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa31,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada6"
  },
  {
    "property_type": "Villa",
    "area": "Nellore Rural",
    "price": 1500000,
    "square_feet": 4200,
    "bhk": "4BHK",
    "amenities": ["Swimming Pool", "Gym", "Garden"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa32,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada7"
  },
  {
    "property_type": "Villa",
    "area": "Kandukur",
    "price": 1200000,
    "square_feet": 3500,
    "bhk": "3BHK",
    "amenities": ["Balcony", "Garden"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa33,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada8"
  },
  {
    "property_type": "Villa",
    "area": "Venkatagiri",
    "price": 1000000,
    "square_feet": 2800,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa34,
    "googleLocation": "https://www.google.com/maps/place/Gannavaram,+Vijayawada9"
  },
  {
    "property_type": "Villa",
    "area": "Nellore Urban",
    "price": 1400000,
    "square_feet": 3800,
    "bhk": "4BHK",
    "amenities": ["Swimming Pool", "Gym", "Garden", "Security"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa35,
    "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada0"
  },
  {
    "property_type": "Villa",
    "area": "Sangam",
    "price": 1200000,
    "square_feet": 3200,
    "bhk": "3BHK",
    "amenities": ["Balcony", "Garden"],
    "owner_name": "Rani Singh",
    "phone_number": "8907654321",
    "image": villa36,
    "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada1"
  },
  {
    "property_type": "Villa",
    "area": "Doralwar",
    "price": 1000000,
    "square_feet": 2800,
    "bhk": "3BHK",
    "amenities": ["Parking", "Security"],
    "owner_name": "Ram Kumar",
    "phone_number": "7845612390",
    "image": villa37,
    "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada2"
  },
  {
    "property_type": "Villa",
    "area": "Gudur",
    "price": 1600000,
    "square_feet": 4500,
    "bhk": "5BHK",
    "amenities": ["Swimming Pool", "Gym", "Home Theater", "Security", "Power Backup"],
    "owner_name": "Suresh Reddy",
    "phone_number": "9876543210",
    "image": villa38,
    "googleLocation": "https://www.google.com/maps/place/Madhuranagar,+Vijayawada3"
  }
]
};

const Villa = () => {
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
                  width: '25%', // Adjusted width for better layout (same as in `Flat`)
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
                <h3>{property.area} - {property.bhk}</h3>
                <p>Price: ₹{property.price}</p>
                <button 
                  onClick={() => handleToggleDetails(index)} 
                  style={{ padding: '10px 10px', cursor: 'pointer' }}
                >
                  {expandedIndex === index ? 'View Less' : 'View More'}
                </button>
                {expandedIndex === index && (
                  <div>
                    <p>Square Feets: {property.square_feet}</p>
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

export default Villa;

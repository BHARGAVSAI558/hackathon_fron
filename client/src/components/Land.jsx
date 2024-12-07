

import React, { useState } from 'react';
import Bplot1 from '../images/Bplot1.jpg';
import Bplot2 from '../images/Bplot2.jpg';  
import Bplot3 from '../images/Bplot3.jpeg';
import Bplot4 from '../images/Bplot4.jpg';
import Bplot5 from '../images/Bplot5.jpg';
import Bplot6 from '../images/Bplot6.jpg';
import Bplot7 from '../images/Bplot7.avif';
import Bplot8 from '../images/Bplot8.jpg';
import Bplot9 from '../images/Bplot9.jpg';
import Bplot10 from '../images/Bplot10.jpg'; 
import Bplot11 from '../images/Bplot11.png';
import Bplot12 from '../images/Bplot12.png';
import Bplot13 from '../images/Bplot13.png';
import Bplot14 from '../images/Bplot14.png';
import Bplot15 from '../images/Bplot15.png';
import Bplot16 from '../images/Bplot16.png';
import Bplot17 from '../images/Bplot17.png';
import Bplot18 from '../images/Bplot18.png';
import Bplot19 from '../images/Bplot19.png';
import Bplot20 from '../images/Bplot20.png';


 
const propertiesData = {
  Tirupati: [ 
      {"plot_id": 1, "location": "Tiruchanoor", "area": 9500, "price": 175000.00, "availability": true, "owner_name": "Raghavendra", "contact_number": "9876543210", "plot_type": "Residential", "plot_size": 2000, "amenities": "Water Supply",image:Bplot1, googleLocation: "https://www.google.com/maps/place/Tiruchanoor,+Andhra+Pradesh+517503"},
      {"plot_id": 2, "location": "Chandragiri", "area": 12000, "price": 220000.00, "availability": false, "owner_name": "Venkatesh", "contact_number": "9876123456", "plot_type": "Commercial", "plot_size": 3000, "amenities": "Electricity",image:Bplot10, googleLocation: "https://www.google.com/maps/place/Chandragiri,+Andhra+Pradesh+517101"},
      {"plot_id": 3, "location": "Sri Kota", "area": 8500, "price": 160000.00, "availability": true, "owner_name": "Srinivas", "contact_number": "9988776655", "plot_type": "Agricultural", "plot_size": 4000, "amenities": "Road Connectivity",image:Bplot2, googleLocation: "https://www.google.com/maps/place/Srikalahasti,+Andhra+Pradesh+517644"},
      {"plot_id": 4, "location": "Tirupati Town", "area": 7800, "price": 140000.00, "availability": true, "owner_name": "Lakshmi Prasad", "contact_number": "9123456789", "plot_type": "Agricultural", "plot_size": 1500, "amenities": "Water Supply",image:Bplot3, googleLocation: "https://www.google.com/maps/place/Tirupati,+Andhra+Pradesh"},
      {"plot_id": 5, "location": "Nagalapuram", "area": 16000, "price": 300000.00, "availability": false, "owner_name": "Ravi Kumar", "contact_number": "9008765432", "plot_type": "Commercial", "plot_size": 3500, "amenities": "Electricity",image:Bplot4, googleLocation: "https://www.google.com/maps/place/Nagalapuram,+Andhra+Pradesh+517589"},
      {"plot_id": 6, "location": "Srikalahasti", "area": 9000, "price": 190000.00, "availability": true, "owner_name": "Anil", "contact_number": "9182736455", "plot_type": "Commercial", "plot_size": 2000, "amenities": "Water Supply",image:Bplot5, googleLocation: "https://www.google.com/maps/place/Srikalahasti,+Andhra+Pradesh+517644"},
      {"plot_id": 7, "location": "Peddaganjam", "area": 11000, "price": 180000.00, "availability": true, "owner_name": "Narasimha", "contact_number": "9012345678", "plot_type": "Residential", "plot_size": 2500, "amenities": "Road Connectivity",image:Bplot6, googleLocation: "https://www.google.com/maps/place/Peddaganjam,+Andhra+Pradesh+517501"},
      {"plot_id": 8, "location": "Sri Ram Nagar", "area": 10200, "price": 210000.00, "availability": false, "owner_name": "Krishna", "contact_number": "9123456700", "plot_type": "Agricultural", "plot_size": 3000, "amenities": "Electricity",image:Bplot7, googleLocation: "https://www.google.com/maps/place/Sriramnagar,+Andhra+Pradesh+517501"},
      {"plot_id": 10, "location": "Pudupet", "area": 8500, "price": 155000.00, "availability": true, "owner_name": "Bharath", "contact_number": "9845678901", "plot_type": "Commercial", "plot_size": 2800, "amenities": "Road Connectivity",image:Bplot9, googleLocation: "https://www.google.com/maps/place/Pudupet,+Andhra+Pradesh+517501"}
    ],
    Amaravati: [ 
        {"plot_id": 1, "location": "Amaravati City", "area": 12000, "price": 250000.00, "availability": true, "owner_name": "Suresh", "contact_number": "9988776655", "plot_type": "Residential", "plot_size": 3000, "amenities": "Water Supply, Electricity",image:Bplot11, googleLocation: "https://www.google.com/maps/place/Amaravati,+Andhra+Pradesh+522020"},
        {"plot_id": 2, "location": "Undavalli", "area": 8000, "price": 180000.00, "availability": false, "owner_name": "Ramakrishna", "contact_number": "9876543210", "plot_type": "Commercial", "plot_size": 2000, "amenities": "Electricity",image:Bplot12, googleLocation: "https://www.google.com/maps/place/Undavalli,+Andhra+Pradesh+522501"},
        {"plot_id": 3, "location": "Tadepalli", "area": 9000, "price": 220000.00, "availability": true, "owner_name": "Narasimha", "contact_number": "9123456789", "plot_type": "Residential", "plot_size": 2500, "amenities": "Water Supply, Road Connectivity",image:Bplot13, googleLocation: "https://www.google.com/maps/place/Tadepalli,+Andhra+Pradesh+522501"},
        {"plot_id": 4, "location": "Guntur", "area": 15000, "price": 300000.00, "availability": true, "owner_name": "Srinivas", "contact_number": "9988774411", "plot_type": "Agricultural", "plot_size": 5000, "amenities": "Water Supply",image:Bplot14, googleLocation: "https://www.google.com/maps/place/Guntur,+Andhra+Pradesh"},
        {"plot_id": 5, "location": "Peddaganjam", "area": 7000, "price": 170000.00, "availability": false, "owner_name": "Ravi Kumar", "contact_number": "9008765432", "plot_type": "Commercial", "plot_size": 1500, "amenities": "Electricity",image:Bplot15, googleLocation: "https://www.google.com/maps/place/Peddaganjam,+Andhra+Pradesh+517501"},
        {"plot_id": 6, "location": "Kaza", "area": 9500, "price": 230000.00, "availability": true, "owner_name": "Lakshmi", "contact_number": "9182736455", "plot_type": "Residential", "plot_size": 3000, "amenities": "Road Connectivity",image:Bplot16, googleLocation: "https://www.google.com/maps/place/Kaza,+Andhra+Pradesh+522501"},
        {"plot_id": 7, "location": "Lingayapalem", "area": 11000, "price": 190000.00, "availability": true, "owner_name": "Bharath", "contact_number": "9012345678", "plot_type": "Agricultural", "plot_size": 2500, "amenities": "Water Supply",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Lingayapalem,+Andhra+Pradesh+522501"},
        {"plot_id": 9, "location": "Namburu", "area": 8600, "price": 160000.00, "availability": true, "owner_name": "Kumar", "contact_number": "9876543219", "plot_type": "Commercial", "plot_size": 1400, "amenities": "Water Supply",image:Bplot19, googleLocation: "https://www.google.com/maps/place/Namburu,+Andhra+Pradesh+522508"},
        {"plot_id": 10, "location": "Mangalagiri", "area": 9500, "price": 210000.00, "availability": true, "owner_name": "Raghav", "contact_number": "9845678901", "plot_type": "Agricultural", "plot_size": 3200, "amenities": "Road Connectivity",image:Bplot20, googleLocation: "https://www.google.com/maps/place/Mangalagiri,+Andhra+Pradesh+522503"}
    ],
    Nellore: [ 
        {"plot_id": 1, "location": "Nellore City", "area": 12000, "price": 500000.00, "availability": true, "owner_name": "Rajesh Kumar", "contact_number": "9876543210", "plot_type": "Residential", "plot_size": 20000, "amenities": "Water Supply",image:Bplot1, googleLocation: "https://www.google.com/maps/place/Nellore,+Andhra+Pradesh"},
        {"plot_id": 2, "location": "Nellore Rural", "area": 30000, "price": 250000.00, "availability": false, "owner_name": "Sunil Reddy", "contact_number": "9845123456", "plot_type": "Agricultural", "plot_size": 40000, "amenities": "Electricity",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Nellore+Rural,+Andhra+Pradesh"},
        {"plot_id": 3, "location": "Kota", "area": 45000, "price": 320000.00, "availability": true, "owner_name": "Vikram Singh", "contact_number": "9123456789", "plot_type": "Commercial", "plot_size": 30000, "amenities": "Road Connectivity",image:Bplot14, googleLocation: "https://www.google.com/maps/place/Kota,+Andhra+Pradesh"},
        {"plot_id": 4, "location": "Nellore South", "area": 15000, "price": 150000.00, "availability": true, "owner_name": "Anil Kumar", "contact_number": "9876567890", "plot_type": "Residential", "plot_size": 22000, "amenities": "Water Supply",image:Bplot9, googleLocation: "https://www.google.com/maps/place/Nellore+South,+Andhra+Pradesh"},
        {"plot_id": 5, "location": "Nellore East", "area": 20000, "price": 400000.00, "availability": false, "owner_name": "Priya Nair", "contact_number": "9765432109", "plot_type": "Commercial", "plot_size": 35000, "amenities": "Electricity",image:Bplot4, googleLocation: "https://www.google.com/maps/place/Nellore+East,+Andhra+Pradesh"},
        {"plot_id": 6, "location": "Nellore North", "area": 37000, "price": 300000.00, "availability": true, "owner_name": "Deepa Verma", "contact_number": "9876543120", "plot_type": "Residential", "plot_size": 27000, "amenities": "Water Supply",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Nellore+North,+Andhra+Pradesh"},
        {"plot_id": 7, "location": "Indira Nagar", "area": 29000, "price": 180000.00, "availability": true, "owner_name": "Ravi Sharma", "contact_number": "9528968586", "plot_type": "Agricultural", "plot_size": 31000, "amenities": "Road Connectivity",image:Bplot7, googleLocation: "https://www.google.com/maps/place/Indira+Nagar,+Andhra+Pradesh"},
 {"plot_id": 8, "location": "Sarvepalli", "area": 21000, "price": 220000.00, "availability": false, "owner_name": "Suresh Reddy", "contact_number": "9876543211", "plot_type": "Commercial", "plot_size": 24000, "amenities": "Electricity",image:Bplot10, googleLocation: "https://www.google.com/maps/place/Sarvepalli,+Andhra+Pradesh"}
    ],
    Vijayawada: [ 
        {"plot_id": 1, "location": "Mylavaram", "area": 30000, "price": 30000000.00, "availability": true, "owner_name": "Swamy", "contact_number": "9959085863", "plot_type": "Agricultural", "plot_size": 150, "amenities": "Water Supply",image:Bplot1, googleLocation: "https://www.google.com/maps/@16.7599374,80.6544039,3a,75y,140.25h,81.37t/data=!3m6!1e1!3m4!1s3QbJfy6HjfPP_4rw8r5NaQ!2e0!7i13312!8i6656?coh=205409&entry=ttu&g_ep=EgoyMDI0MTAwOS4wIKXMDSoASAFQAw%3D%3D"},
        {"plot_id": 2, "location": "Vijayawada Rural", "area": 35000, "price": 250000.00, "availability": false, "owner_name": "Sunil Reddy", "contact_number": "9845123456", "plot_type": "Agricultural", "plot_size": 40000, "amenities": "Electricity",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Vijayawada+Rural,+Andhra+Pradesh"},
        {"plot_id": 3, "location": "Kanuru", "area": 45000, "price": 320000.00, "availability": true, "owner_name": "Vikram Singh", "contact_number": "9123456789", "plot_type": "Commercial", "plot_size": 30000, "amenities": "Road Connectivity",image:Bplot14, googleLocation: "https://www.google.com/maps/place/Kanuru,+Andhra+Pradesh"},
        {"plot_id": 4, "location": "Vijayawada South", "area": 15000, "price": 150000.00, "availability": true, "owner_name": "Anil Kumar", "contact_number": "9876567890", "plot_type": "Residential", "plot_size": 22000, "amenities": "Water Supply",image:Bplot9, googleLocation: "https://www.google.com/maps/place/Vijayawada+South,+Andhra+Pradesh"},
        {"plot_id": 5, "location": "Vijayawada East", "area": 20000, "price": 400000.00, "availability": false, "owner_name": "Priya Nair", "contact_number": "9765432109", "plot_type": "Commercial", "plot_size": 35000, "amenities": "Electricity",image:Bplot4, googleLocation: "https://www.google.com/maps/place/Vijayawada+East,+Andhra+Pradesh"},
        {"plot_id": 6, "location": "Vijayawada North", "area": 37000, "price": 300000.00, "availability": true, "owner_name": "Deepa Verma", "contact_number": "9876543120", "plot_type": "Residential", "plot_size": 27000, "amenities": "Water Supply",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Vijayawada+North,+Andhra+Pradesh"},
        {"plot_id": 7, "location": "Mangalagiri", "area": 29000, "price": 180000.00, "availability": true, "owner_name": "Ravi Sharma", "contact_number": "9528968586", "plot_type": "Agricultural", "plot_size": 31000, "amenities": "Road Connectivity",image:Bplot7, googleLocation: "https://www.google.com/maps/place/Mangalagiri,+Andhra+Pradesh"},
        {"plot_id": 8, "location": "Gannavaram", "area": 21000, "price": 220000.00, "availability": false, "owner_name": "Suresh Reddy", "contact_number": "9876543211", "plot_type": "Commercial", "plot_size": 24000, "amenities": "Electricity",image:Bplot10, googleLocation: "https://www.google.com/maps/place/Gannavaram,+Andhra+Pradesh"}
    ],
    
    Vizag: [ 
      {"plot_id": 1, "location": "Madhurawada", "area": 11060, "price": 407149.45, "availability": false, "owner_name": "Ravi Kumar", "contact_number": "9876543210", "plot_type": "Residential", "plot_size": 17350, "amenities": "Water Supply",image:Bplot9, googleLocation: "https://www.google.com/maps/place/Madhurawada,+Visakhapatnam,+Andhra+Pradesh+530018"},
      {"plot_id": 2, "location": "Rushikonda", "area": 14972, "price": 104202.54, "availability": false, "owner_name": "Suresh Reddy", "contact_number": "9845123456", "plot_type": "Residential", "plot_size": 36000, "amenities": "Electricity",image:Bplot8, googleLocation: "https://www.google.com/maps/place/Rushikonda,+Visakhapatnam,+Andhra+Pradesh+530045"},
      {"plot_id": 3, "location": "Gajuwaka", "area": 72475, "price": 364212.22, "availability": true, "owner_name": "Kiran Patel", "contact_number": "9123456789", "plot_type": "Commercial", "plot_size": 43300, "amenities": "Road Connectivity",image:Bplot9, googleLocation: "https://www.google.com/maps/place/Gajuwaka,+Visakhapatnam,+Andhra+Pradesh+530026"},
      {"plot_id": 4, "location": "Kancharapalem", "area": 14011, "price": 166762.59, "availability": true, "owner_name": "Manoj Sharma", "contact_number": "9876567890", "plot_type": "Commercial", "plot_size": 48000, "amenities": "Electricity",image:Bplot10, googleLocation: "https://www.google.com/maps/place/Kancharapalem,+Visakhapatnam,+Andhra+Pradesh+530008"},
      {"plot_id": 5, "location": "Anakapalle", "area": 100221, "price": 499486.74, "availability": false, "owner_name": "Divya Nair", "contact_number": "9765432109", "plot_type": "Agricultural", "plot_size": 22300, "amenities": "Electricity",image:Bplot19, googleLocation: "https://www.google.com/maps/place/Anakapalle,+Andhra+Pradesh+531021"},
      {"plot_id": 6, "location": "Dwaraka Nagar", "area": 42530, "price": 293135.28, "availability": true, "owner_name": "Sunita Verma", "contact_number": "9876543120", "plot_type": "Commercial", "plot_size": 43400, "amenities": "Water Supply",image:Bplot18, googleLocation: "https://www.google.com/maps/place/Dwaraka+Nagar,+Visakhapatnam,+Andhra+Pradesh+530016"},
      {"plot_id": 7, "location": "Simhachalam", "area": 55777, "price": 126172.38, "availability": true, "owner_name": "Rohit Mishra", "contact_number": "9528968586", "plot_type": "Residential", "plot_size": 24500, "amenities": "Water Supply",image:Bplot17, googleLocation: "https://www.google.com/maps/place/Simhachalam,+Visakhapatnam,+Andhra+Pradesh+530028"},
      {"plot_id": 8, "location": "Pendurthi", "area": 49626, "price": 318610.59, "availability": true, "owner_name": "Asha Mehta", "contact_number": "8574933979", "plot_type": "Commercial", "plot_size": 22400, "amenities": "Electricity",image:Bplot16, googleLocation: "https://www.google.com/maps/place/Pendurthi,+Visakhapatnam,+Andhra+Pradesh+531173"}
    ] }
    

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
              <p align="center"  >Please select a location to view properties.</p>
            ) : (
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}}>
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
                    <img src={property.image} alt="Property" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
                    <h3>{property.plot_type} - {property.location}</h3>
                    <p>Price: ₹{property.price}</p>
                    <button 
                      onClick={() => handleToggleDetails(index)} 
                      style={{ padding: '10px 10px', cursor: 'pointer' }}
                    >
                      {expandedIndex === index ? 'View Less' : 'View More'}
                    </button>
                    {expandedIndex === index && (
                      <div>
                        <p>Square Feet: {property.plot_size}</p>
                        <p>Amenities: {property.amenities}</p>
                        <p>Availability: {property.availability ? 'Available' : 'Not Available'}</p>
                        <p>Contact: {property.contact_number}</p>
                        <p>Owner Name : {property.owner_name}</p>
                        <p> contact:{property.contact_number}</p>
                        <button 
                          onClick={() => handleViewOnMap(property.googleLocation)} 
                          style={{ padding: '5px 10px', color:'red',cursor: 'pointer', marginTop: '10px' }}
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
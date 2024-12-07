import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import hyderabadProperties from '../Places/Hyderabad';
import bangaloreProperties from '../Places/Bangalore';
import chennaiProperties from '../Places/Chennai';
import vizagProperties from '../Places/Vizag';
import delhiProperties from '../Places/Delhi';
import CircularProgress from '@mui/material/CircularProgress';
const Properties = () => {
    const location = useLocation();
    const city = new URLSearchParams(location.search).get('city');
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [propertyType, setPropertyType] = useState('');
    const [propertyCategory, setPropertyCategory] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        setLoading(true);
        try {
            switch (city) {
                case 'Hyderabad':
                    setProperties(hyderabadProperties);
                    break;
                case 'Bangalore':
                    setProperties(bangaloreProperties);
                    break;
                case 'Chennai':
                    setProperties(chennaiProperties);
                    break;
                case 'Vizag':
                    setProperties(vizagProperties);
                    break;
                case 'Delhi':
                    setProperties(delhiProperties);
                    break;
                default:
                    setProperties([]);
            }
        } catch (err) {
            setError('Failed to load properties.');
        } finally {
            setLoading(false);
        }
    }, [city]);

    const handleFilter = () => {
        const results = properties.filter(property => {
            const matchesType = propertyType === '' || property.type === propertyType;
            const matchesCategory = propertyCategory === '' || property.type === propertyCategory;
            return matchesType && matchesCategory;
        });
        setFilteredProperties(results);
    };

// Inside your loading check:
if (loading) {
    return <CircularProgress />; // Loading spinner
}
    if (loading) {
        return <div>Loading properties...</div>; // Loading indicator
    }

    return (
        <div className="properties-container">
            <h2>{city} Properties</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Error message */}
            <div className="filter-section">
                <select value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                    <option value="">--Select Buy/Rent--</option>
                    <option value="Buy">Buy</option>
                    <option value="Rent">Rent</option>
                </select>
                <select value={propertyCategory} onChange={(e) => setPropertyCategory(e.target.value)}>
                    <option value="">--Select Property Type--</option>
                    <option value="Villa">Villa</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Land">Land</option>
                    <option value="Plot">Plot</option>
                </select>
                <button onClick={handleFilter}>Filter</button>
            </div>
            <div className="property-list">
                {(filteredProperties.length > 0 ? filteredProperties : properties).map((property) => (
                    <div className="property-card" key={property.id}>
                        <img src={property.image} alt={property.title} />
                        <h4>{property.title}</h4>
                        <p>Type: {property.type}</p>
                        <p>Location: {property.location}</p>
                        <p>Status: {property.status}</p>
                    </div>
                ))}
                {filteredProperties.length === 0 && properties.length === 0 && <p>No properties found.</p>}
            </div>
        </div>
    );
};

export default properties;
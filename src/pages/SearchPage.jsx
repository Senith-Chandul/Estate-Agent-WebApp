import { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchForm from '../components/SearchForm';
import propertiesData from '../data/properties.json';

function SearchPage() {
  const [properties, setProperties] = useState(propertiesData.properties);

  // This function runs when the "Search" button is clicked
  const handleSearch = (criteria) => {
    
    const filtered = propertiesData.properties.filter(property => {
      // 1. Filter by Type
      const typeMatch = criteria.type === 'any' || property.type === criteria.type;
      
      // 2. Filter by Price
      const priceMatch = property.price >= criteria.minPrice && property.price <= criteria.maxPrice;
      
      // 3. Filter by Bedrooms
      const bedMatch = property.bedrooms >= criteria.minBedrooms && property.bedrooms <= criteria.maxBedrooms;
      
      // 4. Filter by Postcode
      const postcodeMatch = property.location.toUpperCase().includes(criteria.postcode.toUpperCase());

      // 5. Filter by Date
      let dateMatch = true;
      if (criteria.dateAdded) {
        const propDate = new Date(property.added.year, indexMonth(property.added.month), property.added.day);
        dateMatch = propDate >= criteria.dateAdded;
      }

      return typeMatch && priceMatch && bedMatch && postcodeMatch && dateMatch;
    });

    setProperties(filtered);
  };

  // Helper to convert Month name to index (January = 0, etc.)
  const indexMonth = (monthStr) => {
    return new Date(`${monthStr} 1, 2022`).getMonth();
  };

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>Find Your Dream Home</h1>
      
      <SearchForm onSearch={handleSearch} />

      <div className="results-section">
        <h2>Results ({properties.length})</h2>
        {properties.length === 0 && <p>No properties found matching your criteria.</p>}
        
        <div style={gridStyle}>
          {properties.map(property => (
            <div key={property.id} style={cardStyle}>
              <img 
                src={property.picture} 
                alt={property.type} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
              />
              <div style={{ padding: '15px' }}>
                <h3>{property.location}</h3>
                <p><strong>£{property.price.toLocaleString()}</strong></p>
                <p>{property.type} - {property.bedrooms} Beds</p>
                <p>{property.shortDescription || property.description.substring(0, 100) + '...'}</p>
                <Link to={`/property/${property.id}`} style={linkStyle}>
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Simple Grid Styles
const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', // Responsive Grid
  gap: '20px'
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: 'white',
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
};

const linkStyle = {
  display: 'block',
  marginTop: '10px',
  textAlign: 'center',
  backgroundColor: '#3498db',
  color: 'white',
  padding: '10px',
  textDecoration: 'none',
  borderRadius: '4px'
};

export default SearchPage;
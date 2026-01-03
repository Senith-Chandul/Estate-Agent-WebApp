import { useState } from 'react';
import propertiesData from '../data/properties.json'; // Importing the JSON data

function SearchPage() {
  const [properties, setProperties] = useState(propertiesData.properties);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Find Your Dream Home</h1>
      
      <div className="search-section">
        <p>Search Form goes here...</p>
      </div>

      <div className="results-section">
        <h2>Properties</h2>
        <ul>
          {properties.map(property => (
            <li key={property.id}>
              {property.location} - £{property.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchPage;
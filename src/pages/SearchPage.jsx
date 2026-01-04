import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import PropertyCard from '../components/PropertyCard'; // Import new draggable card
import FavoritesList from '../components/FavoritesList'; // Import drop zone
import propertiesData from '../data/properties.json';

function SearchPage() {
  const [properties, setProperties] = useState(propertiesData.properties);

  const handleSearch = (criteria) => {
    const filtered = propertiesData.properties.filter(property => {
      const typeMatch = criteria.type === 'any' || property.type === criteria.type;
      const priceMatch = property.price >= criteria.minPrice && property.price <= criteria.maxPrice;
      const bedMatch = property.bedrooms >= criteria.minBedrooms && property.bedrooms <= criteria.maxBedrooms;
      const postcodeMatch = property.location.toUpperCase().includes(criteria.postcode.toUpperCase());
      let dateMatch = true;
      if (criteria.dateAdded) {
        const propDate = new Date(property.added.year, indexMonth(property.added.month), property.added.day);
        dateMatch = propDate >= criteria.dateAdded;
      }
      return typeMatch && priceMatch && bedMatch && postcodeMatch && dateMatch;
    });
    setProperties(filtered);
  };

  const indexMonth = (monthStr) => new Date(`${monthStr} 1, 2022`).getMonth();

  return (
    <div style={{ padding: '20px', maxWidth: '1400px', margin: '0 auto' }}>
      <h1>Find Your Dream Home</h1>
      
      <SearchForm onSearch={handleSearch} />

      {/* Main Layout: Grid for Results, Sidebar for Favorites */}
      <div style={layoutStyle}>
        
        {/* Left Column: Property Results */}
        <div style={{ flex: 3 }}>
          <h2>Results ({properties.length})</h2>
          <div style={gridStyle}>
            {properties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>

        {/* Right Column: Favorites Sidebar */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <FavoritesList />
        </div>

      </div>
    </div>
  );
}

const layoutStyle = { display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' };

export default SearchPage;
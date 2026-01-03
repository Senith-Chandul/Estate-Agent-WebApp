import { useParams } from 'react-router-dom';
import propertiesData from '../data/properties.json';

function PropertyPage() {
  const { id } = useParams(); // Get the ID from the URL (e.g., prop1)
  
  // Find the specific property in the JSON data
  const property = propertiesData.properties.find(p => p.id === id);

  if (!property) return <h2>Property not found</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{property.location}</h1>
      <img src={`/${property.picture}`} alt={property.type} style={{ maxWidth: '100%' }} />
      <p>{property.description}</p>
      <p>Price: £{property.price}</p>
    </div>
  );
}

export default PropertyPage;
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';

function PropertyCard({ property }) {
  // Setup the Drag logic
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'PROPERTY',
    item: { id: property.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} // Connect the DOM element to the drag source
      style={{ 
        ...styles.card, 
        opacity: isDragging ? 0.5 : 1, 
        cursor: 'move' 
      }}
    >
      <img 
        src={`/${property.picture}`} 
        alt={property.type} 
        style={{ width: '100%', height: '200px', objectFit: 'cover' }} 
      />
      <div style={{ padding: '15px' }}>
        <h3>{property.location}</h3>
        <p><strong>£{property.price.toLocaleString()}</strong></p>
        <p>{property.type} - {property.bedrooms} Beds</p>
        <Link to={`/property/${property.id}`} style={styles.link}>
          View Details
        </Link>
      </div>
    </div>
  );
}

const styles = {
  card: { border: '1px solid #ddd', borderRadius: '8px', overflow: 'hidden', backgroundColor: 'white', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' },
  link: { display: 'block', marginTop: '10px', textAlign: 'center', backgroundColor: '#3498db', color: 'white', padding: '10px', textDecoration: 'none', borderRadius: '4px' }
};

export default PropertyCard;
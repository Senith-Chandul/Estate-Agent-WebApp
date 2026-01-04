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
      ref={drag}
      className="property-card" // Added class for new CSS
      style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}
    >
      <div style={{ position: 'relative', height: '220px' }}>
        <img
          src={`/${property.picture}`}
          alt={property.type}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          background: 'rgba(255,255,255,0.9)', padding: '4px 8px',
          borderRadius: '4px', fontSize: '0.8rem', fontWeight: 'bold'
        }}>
          {property.type}
        </span>
      </div>

      <div className="card-content">
        <h3>{property.location}</h3>
        <p style={{ color: '#4f46e5', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '8px' }}>
          £{property.price.toLocaleString()}
        </p>
        <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '15px' }}>
          {property.bedrooms} Bedrooms • {property.tenure || 'Freehold'}
        </p>

        <Link
          to={`/property/${property.id}`}
          style={{
            display: 'block', textAlign: 'center', backgroundColor: '#4f46e5',
            color: 'white', padding: '10px', textDecoration: 'none',
            borderRadius: '6px', fontWeight: '500'
          }}
        >
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
import { useDrop } from 'react-dnd';
import { useFavorites } from '../context/FavoritesContext';
import propertiesData from '../data/properties.json'; 

function FavoritesList() {
  const { favorites, addFavorite, removeFavorite, clearFavorites } = useFavorites();

  // Setup the Drop logic
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'PROPERTY',
    drop: (item) => {
      const property = propertiesData.properties.find(p => p.id === item.id);
      addFavorite(property);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div 
      ref={drop} 
      style={{ 
        ...styles.container, 
        backgroundColor: isOver ? '#dff9fb' : 'white',
        border: isOver ? '2px dashed #3498db' : '1px solid #ddd'
      }}
    >
      <h3>Favourites ({favorites.length})</h3>
      <p style={{ fontSize: '0.8rem', color: '#666' }}>Drag properties here</p>

      {favorites.length === 0 ? (
        <p>No favourites yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {favorites.map(fav => (
            <li key={fav.id} style={styles.item}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                 {/* Tiny thumbnail */}
                <img src={`/${fav.picture}`} alt="thumb" style={{ width: '40px', height: '40px', borderRadius: '4px', objectFit: 'cover'}} />
                <span>{fav.location}</span>
              </div>
              <button 
                onClick={() => removeFavorite(fav.id)} 
                style={styles.removeBtn}
              >
                ✕
              </button>
            </li>
          ))}
        </ul>
      )}

      {favorites.length > 0 && (
        <button onClick={clearFavorites} style={styles.clearBtn}>
          Clear List
        </button>
      )}
    </div>
  );
}

const styles = {
  container: { padding: '20px', borderRadius: '8px', minHeight: '300px', transition: 'background-color 0.2s' },
  item: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #eee' },
  removeBtn: { background: 'none', border: 'none', color: 'red', cursor: 'pointer', fontWeight: 'bold' },
  clearBtn: { width: '100%', padding: '10px', marginTop: '20px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default FavoritesList;
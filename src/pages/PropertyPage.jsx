import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { FaHeart } from 'react-icons/fa'; 
import propertiesData from '../data/properties.json';
import { useFavorites } from '../context/FavoritesContext';

function PropertyPage() {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const { id } = useParams();
  const property = propertiesData.properties.find(p => p.id === id);

  const [mainImage, setMainImage] = useState(property ? property.picture : '');

  if (!property) return <h2>Property not found</h2>;

  return (
    <div style={styles.container}>
      
      {/* 1. Header Section */}
      <div style={styles.header}>
        <div>
          <h1>{property.location}</h1>
          <h3>£{property.price.toLocaleString()} - {property.type}</h3>
        </div>
        

      {/* Dynamic Button: Changes based on if it's already a favorite */}
      {isFavorite(property.id) ? (
          <button 
            onClick={() => removeFavorite(property.id)} 
            style={{...styles.favButton, backgroundColor: '#c0392b'}}
          >
            <FaHeart /> Remove from Favourites
          </button>
      ) : (
          <button 
            onClick={() => addFavorite(property)} 
            style={styles.favButton}
          >
            <FaHeart /> Add to Favourites
          </button>
      )}
      </div>

      <div style={styles.gallerySection}>
        {/* Large Main Image */}
        <div style={styles.mainImageContainer}>
          <img src={`/${mainImage}`} alt="Main View" style={styles.mainImage} />
        </div>

        {/* Thumbnail Grid */}
        <div style={styles.thumbnailGrid}>
          <img 
            src={`/${property.picture}`} 
            onClick={() => setMainImage(property.picture)}
            style={mainImage === property.picture ? styles.activeThumb : styles.thumb}
            alt="Main"
          />
          {property.gallery && property.gallery.map((img, index) => (
            <img 
              key={index}
              src={`/${img}`}
              onClick={() => setMainImage(img)}
              style={mainImage === img ? styles.activeThumb : styles.thumb}
              alt={`Gallery ${index}`}
            />
          ))}
        </div>
      </div>

      {/* 3. React Tabs */}
      <div style={styles.tabsSection}>
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          {/* Tab 1: Long Description */}
          <TabPanel>
            <div style={styles.panelContent}>
              <h3>Property Details</h3>
              <p>{property.description}</p>
              <p><strong>Bedrooms:</strong> {property.bedrooms}</p>
              <p><strong>Tenure:</strong> {property.tenure}</p>
            </div>
          </TabPanel>

          {/* Tab 2: Floor Plan */}
          <TabPanel>
            <div style={styles.panelContent}>
              <img src={`/${property.floorPlan}`} alt="Floor Plan" style={{ maxWidth: '100%' }} />
            </div>
          </TabPanel>

          {/* Tab 3: Google Map */}
          <TabPanel>
            <div style={styles.panelContent}>
              <iframe 
                width="100%" 
                height="400" 
                src="https://maps.google.com/maps?q=London&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                style={{ border: 0 }} 
                allowFullScreen
                title="Property Map"
              ></iframe>
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

// Inline Styles for Quick Distinction Grade Design
const styles = {
  container: { maxWidth: '1000px', margin: '0 auto', padding: '20px' },
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' },
  favButton: { backgroundColor: '#e74c3c', color: 'white', border: 'none', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' },
  gallerySection: { marginBottom: '40px' },
  mainImageContainer: { width: '100%', height: '400px', backgroundColor: '#eee', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '8px' },
  mainImage: { width: '100%', height: '100%', objectFit: 'cover' },
  thumbnailGrid: { display: 'flex', gap: '10px', marginTop: '10px', overflowX: 'auto', paddingBottom: '10px' },
  thumb: { width: '80px', height: '60px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px', opacity: 0.6, transition: '0.3s' },
  activeThumb: { width: '80px', height: '60px', objectFit: 'cover', cursor: 'pointer', borderRadius: '4px', opacity: 1, border: '2px solid #3498db' },
  tabsSection: { backgroundColor: 'white', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' },
  panelContent: { padding: '20px', lineHeight: '1.6' }
};

export default PropertyPage;
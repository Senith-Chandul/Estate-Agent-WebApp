import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

function SearchForm({ onSearch }) {
  // State for all search criteria
  const [type, setType] = useState('any');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [postcode, setPostcode] = useState('');
  const [dateAdded, setDateAdded] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const criteria = {
      type,
      minPrice: Number(minPrice) || 0,
      maxPrice: Number(maxPrice) || Infinity,
      minBedrooms: Number(minBedrooms) || 0,
      maxBedrooms: Number(maxBedrooms) || 10,
      postcode,
      dateAdded
    };
    onSearch(criteria);
  };

  // --- NEW CLEAR FUNCTION ---
  const handleClear = () => {
    // 1. Reset all local state variables
    setType('any');
    setMinPrice('');
    setMaxPrice('');
    setMinBedrooms('');
    setMaxBedrooms('');
    setPostcode('');
    setDateAdded(null);

    // 2. Immediately trigger a search with default "empty" values
    onSearch({
      type: 'any',
      minPrice: 0,
      maxPrice: Infinity,
      minBedrooms: 0,
      maxBedrooms: 10,
      postcode: '',
      dateAdded: null
    });
  };

  return (
    <form onSubmit={handleSubmit} className="search-form" style={styles.form}>
      <h3>Filter Properties</h3>
      
      <div style={styles.row}>
        {/* Type Selector */}
        <div style={styles.group}>
          <label>Type:</label>
          <select value={type} onChange={(e) => setType(e.target.value)} style={styles.input}>
            <option value="any">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </div>

        {/* Postcode Search */}
        <div style={styles.group}>
          <label>Postcode Area (e.g. BR1):</label>
          <input 
            type="text" 
            value={postcode} 
            onChange={(e) => setPostcode(e.target.value)}
            placeholder="e.g. NW1" 
            style={styles.input}
          />
        </div>
      </div>

      {/* Price Range */}
      <div style={styles.row}>
        <div style={styles.group}>
          <label>Min Price:</label>
          <input type="number" value={minPrice} onChange={e => setMinPrice(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.group}>
          <label>Max Price:</label>
          <input type="number" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} style={styles.input} />
        </div>
      </div>

      {/* Bedroom Range */}
      <div style={styles.row}>
        <div style={styles.group}>
          <label>Min Beds:</label>
          <input type="number" value={minBedrooms} onChange={e => setMinBedrooms(e.target.value)} style={styles.input} />
        </div>
        <div style={styles.group}>
          <label>Max Beds:</label>
          <input type="number" value={maxBedrooms} onChange={e => setMaxBedrooms(e.target.value)} style={styles.input} />
        </div>
      </div>

      {/* Date Added Widget */}
      <div style={styles.group}>
        <label>Added After:</label>
        <DatePicker 
          selected={dateAdded} 
          onChange={(date) => setDateAdded(date)} 
          className="date-picker-input"
          placeholderText="Select a date"
        />
      </div>

      {/* --- BUTTONS SECTION --- */}
      <div style={styles.buttonGroup}>
        <button type="submit" style={styles.searchButton}>Search Properties</button>
        <button type="button" onClick={handleClear} style={styles.clearButton}>Clear Filter</button>
      </div>
    </form>
  );
}

// Updated styles to accommodate the new button layout
const styles = {
  form: { backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '20px' },
  row: { display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' },
  group: { display: 'flex', flexDirection: 'column', flex: 1 },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ddd' },
  
  // New/Updated Styles for Buttons
  buttonGroup: { display: 'flex', gap: '10px', marginTop: '20px' },
  searchButton: { 
    flex: 2, 
    backgroundColor: '#4f46e5', // Indigo
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  },
  clearButton: { 
    flex: 1, 
    backgroundColor: '#9ca3af', // Grey
    color: 'white', 
    padding: '10px 20px', 
    border: 'none', 
    borderRadius: '5px', 
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '16px',
  }
};

export default SearchForm;
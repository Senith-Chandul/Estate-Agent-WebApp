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
    // Bundle all criteria into one object
    const criteria = {
      type,
      minPrice: Number(minPrice) || 0,
      maxPrice: Number(maxPrice) || Infinity,
      minBedrooms: Number(minBedrooms) || 0,
      maxBedrooms: Number(maxBedrooms) || 10,
      postcode,
      dateAdded
    };
    // Send this data back to the parent component (SearchPage)
    onSearch(criteria);
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

      {/* Date Added Widget (React Widget requirement) */}
      <div style={styles.group}>
        <label>Added After:</label>
        <DatePicker 
          selected={dateAdded} 
          onChange={(date) => setDateAdded(date)} 
          className="date-picker-input"
          placeholderText="Select a date"
        />
      </div>

      <button type="submit" style={styles.button}>Search Properties</button>
    </form>
  );
}

// Basic styling to make it look decent immediately
const styles = {
  form: { backgroundColor: '#f4f4f4', padding: '20px', borderRadius: '8px', marginBottom: '20px' },
  row: { display: 'flex', gap: '20px', marginBottom: '10px', flexWrap: 'wrap' },
  group: { display: 'flex', flexDirection: 'column', flex: 1 },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ddd' },
  button: { color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', marginTop: '20px' }
};

export default SearchForm;
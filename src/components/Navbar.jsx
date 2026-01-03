import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'; // Icon for visual appeal 

function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        <FaHome style={{ marginRight: '10px' }} />
        EstateAgent App
      </Link>
      <div>
        <Link to="/" style={styles.link}>Home</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem',
    backgroundColor: '#2c3e50',
    color: 'white',
  },
  logo: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '20px',
  }
};

export default Navbar;
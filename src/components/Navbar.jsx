import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaHome style={{ marginRight: '10px', fontSize: '1.8rem' }} />
          Estate Agent App
        </Link>
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
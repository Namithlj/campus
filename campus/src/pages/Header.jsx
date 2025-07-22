import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header style={styles.header}>
      <h2>Campus Placement System</h2>

      <nav style={styles.nav}>
        {user ? (
          <>
            <Link to="/">Home</Link>
            <Link to="/recruitment">Recruitment</Link>
            <Link to="/placements">Placements</Link>
            <Link to="/admin">Admin</Link>
            <button onClick={logout} style={styles.logoutBtn}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </nav>
    </header>
  );
};

const styles = {
  header: {
    padding: '10px',
    backgroundColor: '#282c34',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  nav: {
    display: 'flex',
    gap: '15px',
  },
  logoutBtn: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    padding: '5px 10px',
    borderRadius: '4px'
  }
};

export default Header;

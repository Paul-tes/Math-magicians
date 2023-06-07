import { Link } from 'react-router-dom';
import styles from '../style/Header.module.css'; // import css module

const Header = () => {
  // inline style
  const linkStyle = {
    textDecoration: 'none',
    color: '#000',
    border: '3px solid #555',
    padding: '0.5rem',
    fontWeight: '500',
  };

  return (
    <header className={styles.header}>
      <h1>Math Magicians</h1>
      <nav>
        <ul className={styles}>
          <li><Link style={linkStyle} to="/">Home</Link></li>
          <li><Link style={linkStyle} to="Calculator">Calculator</Link></li>
          <li><Link style={linkStyle} to="Quote">Quote</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import { Link } from 'react-router-dom';
import styles from '../style/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <h1>Math Magicians</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="Calculator">Calculator</Link>
          <Link to="Quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

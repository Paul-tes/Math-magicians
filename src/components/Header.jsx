import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
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
  </div>
);

export default Header;

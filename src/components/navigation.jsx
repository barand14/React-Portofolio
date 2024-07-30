import { Link, NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink exact to="/" activeClassName="nav-link active" className="nav-link">About Me</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/portfolio" activeClassName="nav-link active" className="nav-link">Portfolio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="nav-link active" className="nav-link">Contact</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/resume" activeClassName="nav-link active" className="nav-link">Resume</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

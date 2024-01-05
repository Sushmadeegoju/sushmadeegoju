import { Link } from 'react-router-dom';
import '../css/header.css'

export default function Header() {
    return (
        <header className="App-header">
        <div className="logo">Sushma Deegoju</div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/education">Education</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
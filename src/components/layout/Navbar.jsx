import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="nav-logo">
        EA-K
      </Link>

      <nav className="nav-links" aria-label="Main navigation">
        <Link to="/">Home</Link>
        <Link to="/growthpilot">GrowthPilot</Link>
        <Link to="/thinking-log">Thinking Log</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
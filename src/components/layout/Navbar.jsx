function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        EA-K
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#growthpilot">GrowthPilot</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="nav-logo">
        EA-K
      </a>

      <nav className="nav-links" aria-label="Main navigation">
        <a href="#projects">Engineering Work</a>
        <a href="#about">Journey</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Navbar;
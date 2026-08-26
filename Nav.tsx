export default function Nav() {
  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <a href="#top" className="brand">TS.</a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#research">Research</a>
          <a href="#playground">Playground</a>
          <a href="#about">About</a>
        </div>
        <a className="nav-cta" href="mailto:your-email@example.com">Contact</a>
      </nav>
    </header>
  );
}

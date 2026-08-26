import Nav from "../components/Nav";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.status === "Featured");
  const research = projects.filter((p) => p.type === "Research");
  const playground = projects.filter((p) => ["AI Product", "Agent", "Mini App", "Game"].includes(p.type));

  return (
    <main id="top">
      <Nav />

      <section className="hero container">
        <div className="hero-kicker">AI RESEARCH · AI PRODUCTS · INTERACTIVE PROTOTYPES</div>
        <h1>I research multimodal AI.<br />I build things people can use.</h1>
        <p className="hero-copy">A portfolio of research, AI products, agents, small tools and experiments — designed to be understood quickly and explored directly.</p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">View my work</a>
          <a className="button secondary" href="/resume.pdf">Resume</a>
        </div>
        <div className="hero-stats">
          <div><strong>Research</strong><span>Multimodal AI · CV · Reliability</span></div>
          <div><strong>Build</strong><span>Agents · Browser tools · Web apps</span></div>
          <div><strong>Explore</strong><span>Rapid prototypes · Vibe coding</span></div>
        </div>
      </section>

      <section className="section container" id="projects">
        <div className="section-heading">
          <div><p className="eyebrow">Selected work</p><h2>Featured Projects</h2></div>
          <p>Research and product projects that best show how I think, experiment and build.</p>
        </div>
        <div className="project-grid">
          {featured.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      </section>

      <section className="section split-section container" id="research">
        <div className="section-heading sticky-heading">
          <div><p className="eyebrow">Research</p><h2>Questions before models.</h2></div>
          <p>I focus on whether multimodal signals are actually useful, reliable and robust — not just whether more modalities can be added.</p>
        </div>
        <div className="stack-list">
          {research.map((p, i) => (
            <a className="stack-item" href={`/projects/${p.slug}`} key={p.slug}>
              <span className="index">0{i + 1}</span>
              <div><h3>{p.title}</h3><p>{p.highlight}</p></div>
              <span>Open case study ↗</span>
            </a>
          ))}
        </div>
      </section>

      <section className="section container" id="playground">
        <div className="section-heading">
          <div><p className="eyebrow">Playground</p><h2>Things I build for fun.</h2></div>
          <p>Small products, agents, browser tools and experiments. The goal is simple: make ideas tangible.</p>
        </div>
        <div className="play-grid">
          {playground.map((p) => (
            <a href={`/projects/${p.slug}`} className="play-card" key={p.slug}>
              <span>{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.summary}</p>
              <b>Explore ↗</b>
            </a>
          ))}
        </div>
      </section>

      <section className="section about container" id="about">
        <p className="eyebrow">About</p>
        <div className="about-grid">
          <h2>I like work that sits between research and real products.</h2>
          <div>
            <p>I am interested in multimodal AI, AI agents and product prototyping. I enjoy turning research questions into experiments, then turning useful ideas into demos people can actually interact with.</p>
            <div className="about-links">
              <a href="https://github.com/your-github" target="_blank">GitHub ↗</a>
              <a href="/resume.pdf">Resume ↗</a>
              <a href="mailto:your-email@example.com">Email ↗</a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <span>© 2026 Tang Siyu</span>
        <span>Built for clarity, not clutter.</span>
      </footer>
    </main>
  );
}

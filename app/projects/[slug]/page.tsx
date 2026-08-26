import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className="detail-page">
      <div className="detail-nav container">
        <Link href="/">← Back home</Link>
        <span>{project.type} · {project.year}</span>
      </div>

      <section className="detail-hero container">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1>{project.title}</h1>
        <p>{project.summary}</p>
        <div className="tag-row large">
          {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
        </div>
      </section>

      <section className="case-grid container">
        <article>
          <p className="eyebrow">01 · Problem</p>
          <h2>{project.problem}</h2>
        </article>
        <article>
          <p className="eyebrow">02 · Approach</p>
          <h2>{project.solution}</h2>
        </article>
      </section>

      <section className="detail-section container">
        <p className="eyebrow">03 · What I did</p>
        <div className="contribution-grid">
          {project.contributions.map((item, i) => (
            <div key={item}><span>0{i + 1}</span><h3>{item}</h3></div>
          ))}
        </div>
      </section>

      <section className="demo-placeholder container">
        <div>
          <p className="eyebrow">Demo / Evidence</p>
          <h2>Add a screenshot, short video, metric chart or live demo here.</h2>
          <p>This block is intentionally reserved so each project can show proof instead of only describing the work.</p>
        </div>
        <div className="demo-frame">PROJECT MEDIA</div>
      </section>

      <section className="detail-cta container">
        <h2>Want the implementation details?</h2>
        <div>
          <a className="button primary" href="https://github.com/your-github" target="_blank">GitHub</a>
          <Link className="button secondary" href="/#projects">More projects</Link>
        </div>
      </section>
    </main>
  );
}


import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={`/projects/${project.slug}`} className="project-card">
      <div className="project-topline">
        <span>{project.type}</span>
        <span>{project.year}</span>
      </div>
      <div>
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>
      <div className="card-footer">
        <div className="tag-row">
          {project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}
        </div>
        <span className="arrow">↗</span>
      </div>
    </Link>
  );
}

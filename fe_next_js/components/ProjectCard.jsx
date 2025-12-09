import Link from 'next/link';

export default function ProjectCard({ project }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={project.image || "/default.png"}
        className="card-img-top"
        alt={project.title}
        style={{
          width: "100%",
          aspectRatio: "4 / 3",      // more natural company-style rectangle
          objectFit: "cover",
          maxHeight: "160px",        // not too tall
          borderRadius: "6px"
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{project.title}</h5>

        {project.link && (
          <p className="text-primary small mb-2">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </p>
        )}

        <p className="card-text">
          {(project.description || "").slice(0, 150)}
          {project.description?.length > 150 ? "..." : ""}
        </p>

        <Link href={`/projects/${project._id}`} className="btn btn-primary">
          View Project
        </Link>
      </div>
    </div>
  );
}
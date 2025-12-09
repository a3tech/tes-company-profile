'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";

export default function ProjectsPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects/${id}`)
      .then(r => r.json())
      .then(setProject)
      .catch(() => setProject(null));
  }, [id]);

  if (!project) return <p className="text-center mt-4">Loading...</p>;

  // Always show a top image
  const topImage = "/default.png";

  return (
    <div className="container py-5" style={{ maxWidth: '850px' }}>

      <Link href="/" className="btn btn-outline-primary">
        &larr; Back to Home
      </Link>

      <h1 className="mb-3">{project.title}</h1>
      
      {/* Always shown default image at top */}
      <img
        src={topImage}
        alt="Project image"
        className="img-fluid rounded mb-4 shadow-sm"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <p className="text-muted mb-4">
        {new Date(project.createdAt).toLocaleString()}
      </p>

      {/* Project body (with resized images) */}
      <div
        className="project-description"
        dangerouslySetInnerHTML={{ __html: project.description }}
      />

      <style jsx>{`
        .project-description img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 20px 0;
          display: block;
        }
        .project-description p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }
      `}</style>

      <div className="mt-4 text-muted">
        <small>
          Updated: {project.updatedAt ? new Date(project.updatedAt).toLocaleString() : "—"}
        </small>
      </div>
    </div>
  );
}
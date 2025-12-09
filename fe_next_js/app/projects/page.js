'use client';

import { useEffect, useState } from 'react';
import ProjectCard from '../../components/ProjectCard.jsx';
import Link from "next/link";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then(r => r.json())
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  return (
    <div className="container py-5">

      <Link href="/" className="btn btn-outline-primary">
        &larr; Back to Home
      </Link>

      <h2 className="mb-4 fw-bold">Projects</h2>

      <div className="row g-4">
        {projects.map(p => (
          <div key={p._id} className="col-12 col-md-6 col-lg-4">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </div>
  );
}
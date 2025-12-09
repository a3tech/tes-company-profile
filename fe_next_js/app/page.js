"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ArticleCard from "../components/ArticleCard";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      .then((r) => {
        console.log("ARTICLES RAW RESPONSE:", r);
        return r.json();
      })
      .then((d) => {
        console.log("ARTICLES JSON:", d);
        setArticles(Array.isArray(d) ? d : d.data || []);
      })
      .catch(() => setArticles([]));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/projects`)
      .then((r) => {
        console.log("PROJECTS RAW RESPONSE:", r);
        return r.json();
      })
      .then((d) => {
        console.log("PROJECTS JSON:", d);
        setProjects(Array.isArray(d) ? d : d.data || []);
      })
      .catch(() => setProjects([]));
  }, []);

  return (
    <>

      {/* HERO SECTION */}
      <section className="mb-5 text-center">
        <h2>Welcome to Our Company</h2>
        <p className="text-muted">Simple company profile built with Next.js & Express</p>
      </section>

      {/* ARTICLES */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Latest Articles</h3>
          <Link href="/articles" className="btn btn-outline-primary btn-sm">
            View All
          </Link>
        </div>

        <div className="row">
          {articles.length === 0 && <p>No articles yet.</p>}

          {articles.map((a) => (
            <div className="col-md-4 mb-4" key={a._id}>
              <ArticleCard article={a} />
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mb-5">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h3>Projects</h3>
          <Link href="/projects" className="btn btn-outline-primary btn-sm">
            View All
          </Link>
        </div>

        <div className="row">
          {projects.length === 0 && <p>No projects yet.</p>}

          {projects.map((p) => (
            <div className="col-md-4 mb-4" key={p._id}>
              <ProjectCard project={p} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
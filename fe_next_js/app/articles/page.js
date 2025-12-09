'use client';

import { useEffect, useState } from 'react';
import ArticleCard from '../../components/ArticleCard';
import Link from "next/link";

export default function ArticlesPage() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`)
      .then(r => r.json())
      .then(setArticles)
      .catch(() => setArticles([]));
  }, []);

  return (
    <div className="container py-5">

      <Link href="/" className="btn btn-outline-primary">
        &larr; Back to Home
      </Link>

      <h2 className="mb-4 fw-bold">Articles</h2>

      <div className="row g-4">
        {articles.map(a => (
          <div key={a._id} className="col-12 col-md-6 col-lg-4">
            <ArticleCard article={a} />
          </div>
        ))}
      </div>
    </div>
  );
}
'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from "next/link";

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`)
      .then(r => r.json())
      .then(setArticle)
      .catch(() => setArticle(null));
  }, [id]);

  if (!article) return <p className="text-center mt-4">Loading...</p>;

  // Always show a top image
  const topImage = "/default.png";

  return (
    <div className="container py-5" style={{ maxWidth: '850px' }}>

      <Link href="/" className="btn btn-outline-primary">
        &larr; Back to Home
      </Link>

      <h1 className="mb-3">{article.title}</h1>
      
      {/* Always shown default image at top */}
      <img
        src={topImage}
        alt="Article image"
        className="img-fluid rounded mb-4 shadow-sm"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <p className="text-muted mb-4">
        {article.author || "Unknown Author"} •{" "}
        {new Date(article.createdAt).toLocaleString()}
      </p>

      {/* Article body (with resized images) */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />

      <style jsx>{`
        .article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          margin: 20px 0;
          display: block;
        }
        .article-content p {
          font-size: 1.1rem;
          line-height: 1.7;
          margin-bottom: 1.2rem;
        }
      `}</style>

      <div className="mt-4 text-muted">
        <small>
          Updated: {article.updatedAt ? new Date(article.updatedAt).toLocaleString() : "—"}
        </small>
      </div>
    </div>
  );
}
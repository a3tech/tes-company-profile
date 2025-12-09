// frontend/components/ArticleCard.jsx
import Link from 'next/link';

export default function ArticleCard({ article }) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={article.image || "/default.png"}
        className="card-img-top"
        alt={article.title}
        style={{
          width: "100%",
          aspectRatio: "4 / 3",      // more natural company-style rectangle
          objectFit: "cover",
          maxHeight: "160px",        // not too tall
          borderRadius: "6px"
        }}
      />

      <div className="card-body">
        <h5 className="card-title">{article.title}</h5>

        <p className="text-muted small mb-2">
          {article.author} • {new Date(article.createdAt).toLocaleDateString()}
        </p>

        <p className="card-text">
          {(article.content || "").slice(0, 150)}
          {article.content?.length > 150 ? "..." : ""}
        </p>

        <Link href={`/articles/${article._id}`} className="btn btn-primary">
          Read More
        </Link>
      </div>
    </div>
  );
}

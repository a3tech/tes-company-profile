// frontend/components/Layout.jsx
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      {/* Header */}
      <header className="bg-dark text-white py-3">
        <div className="container d-flex justify-content-between align-items-center">
          <h2 className="m-0">
            <Link 
              href="/" 
              className="text-white text-decoration-none"
              style={{ cursor: "pointer" }}
            >
              Company Profile
            </Link>
          </h2>

          <nav className="d-flex gap-3">
            <Link href="/articles" className="text-white text-decoration-none">
              Articles
            </Link>
            <Link href="/projects" className="text-white text-decoration-none">
              Projects
            </Link>
            <Link href="/admin/login" className="text-white text-decoration-none">
              Admin
            </Link>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="container py-5">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5">
        © {new Date().getFullYear()} Company Profile
      </footer>
    </>
  );
}
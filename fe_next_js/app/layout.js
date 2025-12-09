import './globals.css';
import Layout from "../components/Layout";

export const metadata = { title: 'Company Profile' };

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Bootstrap CSS */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
      </head>

      <body className="bg-light">
        <Layout>{children}</Layout>

        {/* Bootstrap JS */}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
          dangerouslySetInnerHTML={{ __html: "" }}
        />
      </body>
    </html>
  );
}
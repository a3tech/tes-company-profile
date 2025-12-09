'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../lib/api';

export default function AdminArticles() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [err, setErr] = useState('');

  async function load() {
    try {
      const data = await apiFetch('/articles/', { method: 'GET' });
      setList(data);
    } catch (e) {
      setErr(e.message || 'Error loading');
      if (e.status === 401) router.push('/admin/login');
    }
  }

  useEffect(() => { load(); }, []);

  async function remove(id) {
    if (!confirm('Delete article?')) return;
    try {
      await apiFetch(`/articles/${id}`, { method: 'DELETE', auth: true });
      setList(list => list.filter(x => x._id !== id));
    } catch {
      alert('Delete failed');
    }
  }

  return (
    <div className="container py-5">

      {/* TOP BAR */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        
        {/* Back button */}
        <button
          className="btn btn-secondary"
          onClick={() => router.push('/admin/dashboard')}
        >
          ← Back to Dashboard
        </button>

        <h2 className="m-0">Manage Articles</h2>

        <button
          className="btn btn-primary"
          onClick={() => router.push('/admin/article/new')}
        >
          + New Article
        </button>
      </div>

      {/* ERROR MESSAGE */}
      {err && <div className="alert alert-danger">{err}</div>}

      {/* TABLE */}
      {list.length === 0 ? (
        <p className="text-muted">No articles found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "45%" }}>Title</th>
              <th style={{ width: "20%" }}>Slug</th>
              <th style={{ width: "15%" }}>Created</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(a => (
              <tr key={a._id}>
                <td>{a.title}</td>
                <td>{a.slug}</td>
                <td>{new Date(a.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => router.push(`/admin/article/${a._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => remove(a._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

    </div>
  );
}
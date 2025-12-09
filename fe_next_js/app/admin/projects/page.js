'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../lib/api';

export default function AdminProjects() {
  const router = useRouter();
  const [list, setList] = useState([]);
  const [err, setErr] = useState('');

  async function load() {
    try {
      const data = await apiFetch('/projects', { method: 'GET' });
      setList(data);
    } catch (e) {
      setErr(e.message || 'Error loading');
      if (e.status === 401) router.push('/admin/login');
    }
  }

  useEffect(() => { load(); }, []);

  async function remove(id) {
    if (!confirm('Delete project?')) return;
    try {
      await apiFetch(`/projects/${id}`, { method: 'DELETE', auth: true });
      setList(list => list.filter(x => x._id !== id));
    } catch {
      alert('Delete failed');
    }
  }

  return (
    <div className="container py-5">

      <div className="d-flex justify-content-between align-items-center mb-3">
        
        <button
          className="btn btn-secondary"
          onClick={() => router.push('/admin/dashboard')}
        >
          ← Back to Dashboard
        </button>

        <h2>Manage Projects</h2>
        <button className="btn btn-primary" onClick={() => router.push('/admin/project/new')}>
          + New Project
        </button>
      </div>

      {err && <div className="alert alert-danger">{err}</div>}

      {list.length === 0 ? (
        <p className="text-muted">No projects found.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th style={{ width: "35%" }}>Title</th>
              <th style={{ width: "25%" }}>Slug</th>
              <th style={{ width: "20%" }}>Created</th>
              <th style={{ width: "20%" }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list.map(p => (
              <tr key={p._id}>
                <td>{p.title}</td>
                <td>{p.slug}</td>
                <td>{new Date(p.createdAt).toLocaleDateString()}</td>
                <td>
                  <button
                    className="btn btn-sm btn-warning me-2"
                    onClick={() => router.push(`/admin/project/${p._id}`)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => remove(p._id)}
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
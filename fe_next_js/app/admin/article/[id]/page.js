'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiFetch } from '../../../../lib/api';

export default function EditArticle() {
  const { id } = useParams();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    apiFetch(`/articles/${id}`)
      .then(a => {
        setTitle(a.title || '');
        setContent(a.content || '');
        setAuthor(a.author || '');
      })
      .catch(() => {});
  }, [id]);

  async function submit(e) {
    e.preventDefault();
    try {
      await apiFetch(`/articles/${id}`, {
        method: 'PUT',
        auth: true,
        body: { title, content, author },
      });
      router.push('/admin/articles');
    } catch {
      alert('Update failed');
    }
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-4">✏️ Edit Article</h3>

          <form onSubmit={submit}>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                className="form-control"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows={10}
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              ></textarea>
            </div>

            <button className="btn btn-primary me-2" type="submit">
              Save Changes
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={() => router.push('/admin/articles')}
            >
              Cancel
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../../lib/api';

export default function NewArticle() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await apiFetch('/articles', {
        method: 'POST',
        auth: true,
        body: { title, content, author },
      });
      router.push('/admin/articles');
    } catch (e) {
      alert(e.message || 'Error');
    }
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="mb-4">📝 New Article</h3>

          <form onSubmit={submit}>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input
                className="form-control"
                placeholder="Article title"
                value={title}
                onChange={e => setTitle(e.target.value)}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Author</label>
              <input
                className="form-control"
                placeholder="Author name"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Content</label>
              <textarea
                className="form-control"
                rows={10}
                placeholder="Write the content here..."
                value={content}
                onChange={e => setContent(e.target.value)}
                required
              ></textarea>
            </div>

            <button className="btn btn-success me-2" type="submit">
              Create Article
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
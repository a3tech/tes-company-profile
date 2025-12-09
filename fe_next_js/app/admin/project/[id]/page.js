'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { apiFetch } from '../../../../lib/api';

export default function EditProject() {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [images, setImages] = useState('');

  useEffect(() => {
    apiFetch(`/projects/${id}`)
      .then(p => {
        setTitle(p.title || '');
        setSlug(p.slug || '');
        setDescription(p.description || '');
        setLink(p.link || '');
        setImages((p.images || []).join(', '));
      })
      .catch(() => {});
  }, [id]);

  async function submit(e) {
    e.preventDefault();
    try {
      await apiFetch(`/projects/${id}`, {
        method: 'PUT',
        auth: true,
        body: {
          title,
          slug,
          description,
          link,
          images: images.split(',').map(s => s.trim()),
        },
      });
      router.push('/admin/projects');
    } catch {
      alert('Update failed');
    }
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">

          <h3 className="mb-4">✏️ Edit Project</h3>

          <form onSubmit={submit}>
            
            <div className="mb-3">
              <label className="form-label">Title</label>
              <input className="form-control" value={title} onChange={e => setTitle(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input className="form-control" value={slug} onChange={e => setSlug(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={6} value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Project Link</label>
              <input className="form-control" placeholder="https://example.com" value={link} onChange={e => setLink(e.target.value)}/>
            </div>

            <div className="mb-3">
              <label className="form-label">Images (comma separated URLs)</label>
              <input className="form-control" placeholder="img1.jpg, img2.png" value={images} onChange={e => setImages(e.target.value)} />
            </div>

            <button className="btn btn-primary me-2" type="submit">
              Save Changes
            </button>

            <button className="btn btn-secondary" type="button" onClick={() => router.push('/admin/projects')}>
              Cancel
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}
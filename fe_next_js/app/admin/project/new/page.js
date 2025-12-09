'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { apiFetch } from '../../../../lib/api';

export default function NewProject() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [images, setImages] = useState('');

  async function submit(e) {
    e.preventDefault();
    try {
      await apiFetch('/projects', {
        method: 'POST',
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
    } catch (e) {
      alert(e.message || 'Error creating project');
    }
  }

  return (
    <div className="container py-5">
      <div className="card shadow-sm">
        <div className="card-body">
          
          <h3 className="mb-4">🚀 New Project</h3>

          <form onSubmit={submit}>

            <div className="mb-3">
              <label className="form-label">Title</label>
              <input className="form-control" placeholder="Project title" value={title} onChange={e => setTitle(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Slug</label>
              <input className="form-control" placeholder="project-slug" value={slug} onChange={e => setSlug(e.target.value)} required/>
            </div>

            <div className="mb-3">
              <label className="form-label">Description</label>
              <textarea className="form-control" rows={6} placeholder="Project description..." value={description} onChange={e => setDescription(e.target.value)}></textarea>
            </div>

            <div className="mb-3">
              <label className="form-label">Project Link</label>
              <input className="form-control" placeholder="https://example.com" value={link} onChange={e => setLink(e.target.value)} />
            </div>

            <div className="mb-3">
              <label className="form-label">Images (comma separated URLs)</label>
              <input className="form-control" placeholder="img1.jpg, img2.png" value={images} onChange={e => setImages(e.target.value)} />
            </div>

            <button className="btn btn-success me-2" type="submit">
              Create Project
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
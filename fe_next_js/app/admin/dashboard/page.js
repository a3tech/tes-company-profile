'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCookie, deleteCookie } from 'cookies-next';

export default function Dashboard() {
  const router = useRouter();

  useEffect(() => {
    const token = getCookie('token');
    if (!token) router.push('/admin/login');
  }, [router]);

  function logout() {
    deleteCookie('token');
    router.push('/admin/login');
  }

  return (
    <div className="container py-5">
      <h2 className="mb-3">Admin Dashboard</h2>
      <p className="text-muted">Welcome to your control panel.</p>

      <div className="list-group my-4">
        <a href="/admin/articles" className="list-group-item list-group-item-action">
          Manage Articles
        </a>
        <a href="/admin/projects" className="list-group-item list-group-item-action">
          Manage Projects
        </a>
      </div>

      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
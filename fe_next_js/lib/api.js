// frontend/lib/api.js
export const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/v1';

export async function apiFetch(path, { method = 'GET', body, auth = false, headers = {} } = {}) {
  const url = `${API}${path}`;
  const opts = { method, headers: { ...headers } };

  if (body) {
    opts.body = JSON.stringify(body);
    opts.headers['Content-Type'] = 'application/json';
  }

  if (auth) {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) throw { status: 401, message: 'No token' };
    opts.headers['Authorization'] = `Bearer ${token}`;
  }

  const res = await fetch(url, opts);

  if (res.status === 401) {
    // unauthorized — frontend should redirect to login
    throw { status: 401, message: 'Unauthorized' };
  }

  const text = await res.text();
  try { return JSON.parse(text || '{}'); } catch(e) { return text; }
}
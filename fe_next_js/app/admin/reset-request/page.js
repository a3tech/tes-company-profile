'use client';

import { useState } from 'react';

export default function ResetRequest() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  async function submit(e) {
    e.preventDefault();
    setMsg('');

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/request-reset`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const d = await res.json();
      setMsg(d.message || 'If registered, a reset link has been sent.');
    } catch (e) {
      setMsg('Error sending request.');
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '420px' }}>
        <h3 className="text-center mb-3">Reset Password</h3>
        <p className="text-muted text-center mb-4">
          Enter your email and we'll send you a reset link.
        </p>

        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Email Address</label>
            <input
              type="email"
              required
              placeholder="your@email.com"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>

        {msg && (
          <div className="alert alert-info mt-3 text-center p-2">
            {msg}
          </div>
        )}

        <div className="text-center mt-3">
          <a href="/admin/login" className="text-decoration-none">
            Back to login
          </a>
        </div>
      </div>
    </div>
  );
}
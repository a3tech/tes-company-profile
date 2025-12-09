"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { saveToken } from "../../../lib/auth";
import { getCookie } from "cookies-next";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [checking, setChecking] = useState(true); // <--- NEW
  const router = useRouter();

  // Check token BEFORE showing UI
  useEffect(() => {
    const token = getCookie("token");
    if (token) {
      router.replace("/admin/dashboard"); // replace = no going back to login
    } else {
      setChecking(false); // show UI only when NOT logged in
    }
  }, []);

  async function submit(e) {
    e.preventDefault();
    setErr("");

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Login failed");

      saveToken(data.token);
      router.replace("/admin/dashboard");
    } catch (error) {
      setErr(error.message || "Error");
    }
  }

  // ⛔ Prevent login UI from flashing
  if (checking) return null;

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Admin Login</h3>

        {err && (
          <div className="alert alert-danger" role="alert">
            {err}
          </div>
        )}

        <form onSubmit={submit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <a href="/admin/reset-request">Forgot password?</a>
        </div>
      </div>
    </div>
  );
}
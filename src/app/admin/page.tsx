"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/actions";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await loginAdmin(null, formData);

    if (result && !result.success) {
      setError(result.error);
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: "80vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", paddingTop: "8rem" }}>
      <motion.div 
        className="glass"
        style={{ padding: "3rem", borderRadius: "var(--radius-xl)", maxWidth: "400px", width: "100%", textAlign: "center" }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div style={{ display: "inline-flex", padding: "1rem", backgroundColor: "var(--accent-light)", borderRadius: "50%", color: "var(--primary)", marginBottom: "1.5rem" }}>
          <Lock size={32} />
        </div>
        <h1 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "0.5rem" }}>Admin Access</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Enter your secure password to view submissions.</p>

        {error && (
          <div style={{ backgroundColor: "#f8d7da", color: "#842029", padding: "0.75rem", borderRadius: "var(--radius-md)", marginBottom: "1.5rem", fontSize: "0.9rem" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input 
            type="password" 
            name="password" 
            placeholder="Password" 
            required 
            style={{ width: "100%", padding: "0.75rem 1rem", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)", outline: "none", fontFamily: "inherit" }}
          />
          <button type="submit" className="btn btn-primary" disabled={loading} style={{ width: "100%" }}>
            {loading ? "Verifying..." : "Login securely"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}

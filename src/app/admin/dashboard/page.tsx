import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabase";
import { logoutAdmin } from "@/app/actions";
import { LogOut, Mail, Users } from "lucide-react";

export const dynamic = 'force-dynamic'; // Prevent static rendering so it always checks the cookie

export default async function AdminDashboard() {
  // 1. Verify Authentication
  const cookieStore = await cookies();
  const sessionToken = cookieStore.get("admin_session")?.value;
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!sessionToken || sessionToken !== adminPassword) {
    redirect("/admin");
  }

  // 2. Fetch Data
  const { data: contacts } = await supabaseAdmin
    .from("contacts")
    .select("*")
    .order("created_at", { ascending: false });

  const { data: volunteers } = await supabaseAdmin
    .from("volunteers")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", paddingTop: "2rem", paddingBottom: "4rem" }}>
      <div className="container">
        
        {/* Dashboard Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "3rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border-color)" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "0.5rem" }}>Admin Dashboard</h1>
            <p style={{ color: "var(--text-muted)" }}>Secure view of all platform submissions.</p>
          </div>
          <form action={logoutAdmin}>
            <button type="submit" className="btn" style={{ backgroundColor: "white", border: "1px solid var(--border-color)", color: "var(--text-main)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <LogOut size={18} /> Logout
            </button>
          </form>
        </div>

        {/* Two Columns for Data */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "3rem" }}>
          
          {/* Contact Messages */}
          <div>
            <h2 style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Mail size={24} /> Contact Messages
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {!contacts || contacts.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                  No messages yet.
                </div>
              ) : (
                contacts.map((msg: any) => (
                  <div key={msg.id} style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "var(--radius-md)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid var(--accent)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <strong style={{ color: "var(--text-main)" }}>{msg.name}</strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {new Date(msg.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <a href={`mailto:${msg.email}`} style={{ color: "var(--primary)", fontSize: "0.9rem", display: "inline-block", marginBottom: "1rem" }}>{msg.email}</a>
                    <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5, whiteSpace: "pre-wrap" }}>{msg.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Volunteer Applications */}
          <div>
            <h2 style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Users size={24} /> Volunteer Applications
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {!volunteers || volunteers.length === 0 ? (
                <div style={{ padding: "2rem", textAlign: "center", backgroundColor: "white", borderRadius: "var(--radius-lg)", border: "1px solid var(--border-color)", color: "var(--text-muted)" }}>
                  No applications yet.
                </div>
              ) : (
                volunteers.map((vol: any) => (
                  <div key={vol.id} style={{ backgroundColor: "white", padding: "1.5rem", borderRadius: "var(--radius-md)", boxShadow: "0 2px 4px rgba(0,0,0,0.05)", borderLeft: "4px solid var(--primary)" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                      <strong style={{ color: "var(--text-main)" }}>{vol.name}</strong>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        {new Date(vol.created_at).toLocaleDateString()}
                      </span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem", marginBottom: "1rem" }}>
                      <a href={`mailto:${vol.email}`} style={{ color: "var(--primary)", fontSize: "0.9rem" }}>{vol.email}</a>
                      <a href={`tel:${vol.phone}`} style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{vol.phone}</a>
                    </div>
                    <div style={{ display: "inline-block", padding: "0.25rem 0.75rem", backgroundColor: "var(--accent-light)", color: "var(--primary)", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 500 }}>
                      Interest: {vol.interests}
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

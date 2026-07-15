import Link from "next/link";
import { HeartHandshake, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--primary-dark)", color: "white", padding: "6rem 0 2rem" }}>
      <div className="container">
        {/* Top Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "4rem", marginBottom: "5rem" }}>
          
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "42px", height: "42px", background: "var(--accent)", color: "var(--primary-dark)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <HeartHandshake size={22} />
              </div>
              <span style={{ fontWeight: 800, fontSize: "1.1rem" }}>
                Royal <span style={{ color: "var(--accent)" }}>Disability</span> Forum
              </span>
            </Link>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.7, maxWidth: "320px" }}>
              Transforming Struggles into Strength: Empowering Potential, Restoring Dignity across Zimbabwe and Africa.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: "1.5rem", fontWeight: 700 }}>Navigate</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { href: "/about", label: "About Us" },
                { href: "/testimonials", label: "Impact" },
                { href: "/get-involved", label: "Get Involved" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} style={{ color: "rgba(255,255,255,0.5)", display: "flex", alignItems: "center", gap: "0.5rem", transition: "color 0.3s", fontSize: "0.95rem" }}>
                  {link.label}
                  <ArrowUpRight size={14} style={{ opacity: 0.5 }} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: "1.5rem", fontWeight: 700 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <MapPin size={18} style={{ color: "var(--accent)", marginTop: "3px", flexShrink: 0 }} />
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  401 Ushewekunze Co-operative,<br />
                  Harare South, Harare, Zimbabwe
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <Mail size={18} style={{ color: "var(--accent)", flexShrink: 0 }} />
                <a href="mailto:shamum1937@gmail.com" style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>
                  shamum1937@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
            © {new Date().getFullYear()} Royal Disability Forum. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.85rem" }}>
            Disability is not inability.
          </p>
        </div>
      </div>
    </footer>
  );
}

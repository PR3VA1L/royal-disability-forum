"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";
import { HeartHandshake } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon} style={{ background: "transparent" }}>
            <img src="/images/user_logo1.png" alt="Logo" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
          <div className={styles.logoText}>
            Royal <span>Disability</span> Forum
          </div>
        </Link>
        <div className={styles.navLinks}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/testimonials" className={styles.navLink}>Impact</Link>
          <Link href="/contact" className={styles.navLink}>Contact</Link>
          <div className={styles.donateBtn}>
            <Link href="/get-involved" className="btn btn-primary" style={{ padding: "0.7rem 1.8rem", fontSize: "0.85rem" }}>
              Get Involved
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

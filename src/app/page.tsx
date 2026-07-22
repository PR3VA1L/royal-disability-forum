"use client";

import Link from "next/link";
import styles from "./page.module.css";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, GraduationCap, Home, Stethoscope, Scale, Shield, ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleField from "@/components/ParticleField";

export default function HomePage() {
  const { scrollYProgress } = useScroll();
  const imageScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  const programs = [
    { title: "Poverty Alleviation", description: "Helping men, women, and children living with disability fight against poverty.", icon: <Heart size={24} /> },
    { title: "Education & Training", description: "Promoting education and training for disabled and vulnerable groups.", icon: <GraduationCap size={24} /> },
    { title: "Shelter & Homes", description: "Establishing homes and shelters for those in need.", icon: <Home size={24} /> },
    { title: "Health & Needs", description: "Providing wheelchairs, medication, and sanitation support.", icon: <Stethoscope size={24} /> },
    { title: "Advocacy", description: "Fighting harmful social norms that marginalize disabled people.", icon: <Scale size={24} /> },
    { title: "Anti-GBV", description: "Creating a non-tolerance environment for Gender Based Violence.", icon: <Shield size={24} /> }
  ];

  const marqueeItems = [
    "Empowering Potential", "Restoring Dignity", "Disability is Not Inability",
    "Strength Through Unity", "Education for All", "Advocacy & Rights"
  ];

  return (
    <>
      {/* ===== CINEMATIC HERO ===== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroColorWash} />
        <div className={styles.heroGlow} />
        <ParticleField />

        {/* Giant background text */}
        <motion.div
          className={styles.heroGiantText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        >
          EMPOWER
        </motion.div>

        <motion.div 
          className={styles.heroCenter}
        >
          <motion.div
            className={styles.heroTagline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.pulse} />
            Royal Disability Forum
          </motion.div>

          {/* Founder image */}
          <motion.div
            className={styles.heroImageFrame}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{ scale: imageScale }}
          >
            <img src="/images/user_img1.jpg" alt="Founder Muchaneta Shamu" />
          </motion.div>

          <motion.h1
            className={styles.heroTitle}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Transforming Struggles into{" "}
            <span className="gradient-text">Strength.</span>
          </motion.h1>

          <motion.p
            className={styles.heroDesc}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Empowering Potential, Restoring Dignity. Dedicated to changing the lives of vulnerable people with disabilities across Zimbabwe and Africa.
          </motion.p>

          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <Link href="/get-involved" className="btn btn-accent">
              Donate Now <ArrowRight size={18} />
            </Link>
            <Link href="/about" className="btn btn-outline">
              Our Story
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className={styles.scrollIndicator}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <span>Scroll</span>
          <div className={styles.scrollLine} />
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <section className={styles.marqueeSection}>
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              <div className="dot" />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* ===== IMPACT NUMBERS ===== */}
      <section className={styles.impactSection}>
        <div className={styles.impactBg} />
        <div className="container">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", color: "var(--accent)", fontWeight: 700, marginBottom: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", fontSize: "0.85rem" }}
          >
            Our Impact
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", fontSize: "clamp(2rem, 4vw, 3rem)", color: "white", marginBottom: "5rem", letterSpacing: "-0.03em" }}
          >
            Numbers That Tell Our Story
          </motion.h2>
          <div className={styles.impactGrid}>
            <AnimatedCounter target={10} label="Wheelchairs Distributed" />
            <AnimatedCounter target={13} label="Volunteers" />
            <AnimatedCounter target={1} label="Shelters Established" />
            <AnimatedCounter target={230} label="Lives Impacted" />
          </div>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className={styles.programsSection}>
        <div className="container">
          <div className={styles.programsHeader}>
            <motion.h2
              className={styles.programsTitle}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Our Key<br />Programs
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.7 }}
            >
              Comprehensive support designed to prove that disability is not inability. We focus on sustainable, long-term empowerment across six critical areas.
            </motion.p>
          </div>

          <div className={styles.programsGrid}>
            {programs.map((program, i) => (
              <motion.div
                key={i}
                className={styles.programCard}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardContent}>
                  <div className={styles.cardNumber}>0{i + 1}</div>
                  <div className={styles.cardIconWrap}>{program.icon}</div>
                  <h3 className={styles.cardTitle}>{program.title}</h3>
                  <p className={styles.cardDesc}>{program.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className={styles.ctaSection}>
        <div className="container">
          <motion.div
            className={styles.ctaBanner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.ctaTitle}>
              Ready to Make a <span className="gradient-text">Difference?</span>
            </h2>
            <p className={styles.ctaDesc}>
              Whether you donate, volunteer, or simply share our mission — you become part of a movement that transforms lives.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", position: "relative", zIndex: 1 }}>
              <Link href="/get-involved" className="btn btn-accent">
                Donate Now <ArrowRight size={18} />
              </Link>
              <Link href="/contact" className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
                Get In Touch <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

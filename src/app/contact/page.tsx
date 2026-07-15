"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { submitContactForm } from "@/app/actions";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitContactForm(null, formData);
    
    if (result.success) {
      setStatus("success");
    } else {
      setStatus("idle");
      alert(result.error);
    }
  };

  return (
    <div style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <div className="container">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "1rem" }}>Contact Us</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
            We'd love to hear from you. Whether you have a question about our programs, want to partner with us, or just want to say hello.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginTop: '4rem' }}>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "2rem" }}>Get in Touch</h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Our Office</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.4 }}>401 Ushewekunze Co-operative,<br />Harare South, Harare<br />Zimbabwe</p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--accent-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={24} />
                </div>
                <div>
                  <h3 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Email Us</h3>
                  <a href="mailto:shamum1937@gmail.com" style={{ color: 'var(--text-muted)' }}>shamum1937@gmail.com</a>
                </div>
              </div>
            </div>
            
            {/* Embedded Google Map Placeholder */}
            <div style={{ marginTop: '3rem', width: '100%', height: '250px', backgroundColor: '#e9ecef', borderRadius: 'var(--radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
              Interactive Map Integration
            </div>
          </motion.div>

          {/* Secure Form */}
          <motion.div
            className="glass"
            style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{ fontSize: "1.75rem", color: "var(--primary)", marginBottom: "1.5rem" }}>Send a Message</h2>
            
            {status === "success" ? (
              <div style={{ backgroundColor: '#d1e7dd', color: '#0f5132', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Thank You!</h3>
                <p>Your message has been securely sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Full Name</label>
                  <input type="text" id="name" name="name" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Email Address</label>
                  <input type="email" id="email" name="email" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--text-main)', fontWeight: 500 }}>Your Message</label>
                  <textarea id="message" name="message" rows={5} required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', resize: 'vertical' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: '100%', gap: '0.5rem' }}>
                  {status === "submitting" ? "Sending..." : "Send Secure Message"}
                  <Send size={18} />
                </button>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                  Protected by Next.js Server Actions & Rate Limiting.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

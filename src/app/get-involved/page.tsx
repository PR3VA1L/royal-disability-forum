"use client";

import { motion } from "framer-motion";
import { HandHeart, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { submitVolunteerForm } from "@/app/actions";

export default function GetInvolved() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    const result = await submitVolunteerForm(null, formData);
    
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
          <h1 style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "1rem" }}>Get Involved</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
            Every contribution, whether it's your time, voice, or a donation, helps us transform struggles into strength.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          
          {/* Donate Card */}
          <motion.div 
            style={{ background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)', color: 'white', borderRadius: 'var(--radius-xl)', padding: '3rem', position: 'relative', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HandHeart size={120} style={{ position: 'absolute', right: '-20px', bottom: '-20px', opacity: 0.1 }} />
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent)' }}>Make a Donation</h2>
              <p style={{ fontSize: '1.1rem', marginBottom: '2rem', opacity: 0.9 }}>
                Your financial support allows us to provide wheelchairs, medication, shelter, and training to those who need it most.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <a href="https://paypal.me/RoyalDisabilityForum" target="_blank" rel="noopener noreferrer" className="btn btn-accent" style={{ width: 'fit-content', padding: '1rem 2rem' }}>
                  Donate via PayPal (Secure) <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </a>
                <p style={{ fontSize: '0.85rem', opacity: 0.7 }}>
                  * Clicking this will open our secure PayPal link. 100% of your donation goes directly to our programs.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Volunteer Card */}
          <motion.div 
            className="glass"
            style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }}>Become a Volunteer</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Join our network of advocates and volunteers. Help us run our programs, advocate against GBV, and support our community.
            </p>
            {status === "success" ? (
              <div style={{ backgroundColor: '#d1e7dd', color: '#0f5132', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '0.5rem' }}>Application Received!</h3>
                <p>Thank you for volunteering. We will be in touch with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="name" placeholder="Full Name" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                <input type="email" name="email" placeholder="Email Address" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                <input type="tel" name="phone" placeholder="Phone Number" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit' }} />
                <select name="interests" required style={{ width: '100%', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', outline: 'none', fontFamily: 'inherit', color: 'var(--text-main)', background: 'white' }}>
                  <option value="">Select Area of Interest</option>
                  <option value="events">Event Support</option>
                  <option value="advocacy">Advocacy & Outreach</option>
                  <option value="education">Education & Training</option>
                  <option value="other">Other / General</option>
                </select>
                <button type="submit" className="btn btn-primary" disabled={status === "submitting"} style={{ width: '100%', marginTop: '0.5rem' }}>
                  {status === "submitting" ? "Submitting..." : "Join the Team"}
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { Quote, Trophy } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Royal Disability Forum provided me with the wheelchair and medical support I desperately needed. My life has completely transformed.",
      author: "Sarah M.",
      role: "Beneficiary"
    },
    {
      quote: "The advocacy programs have given us a voice in our community. We are finally being heard and respected as equals.",
      author: "David T.",
      role: "Community Advocate"
    },
    {
      quote: "Through their education and training initiatives, I secured a management position. They truly prove that disability is not inability.",
      author: "Grace K.",
      role: "Program Graduate"
    }
  ];

  const accomplishments = [
    { number: "500+", label: "Wheelchairs Distributed" },
    { number: "120", label: "Individuals Trained & Employed" },
    { number: "3", label: "Shelters Established" },
    { number: "10k+", label: "Lives Impacted" },
  ];

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
          <h1 style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "1rem" }}>Impact & Testimonials</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
            See how Royal Disability Forum is transforming struggles into strength across our communities.
          </p>
        </motion.div>

        {/* Accomplishments Bar */}
        <motion.div 
          style={{ background: 'var(--primary)', color: 'white', borderRadius: 'var(--radius-xl)', padding: '3rem', marginBottom: '6rem', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '2rem', boxShadow: 'var(--shadow-lg)' }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {accomplishments.map((item, index) => (
            <div key={index} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--accent)', marginBottom: '0.5rem' }}>{item.number}</div>
              <div style={{ fontSize: '1.1rem', opacity: 0.9 }}>{item.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {testimonials.map((test, index) => (
            <motion.div 
              key={index}
              className="glass"
              style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', position: 'relative' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Quote size={40} style={{ color: 'var(--accent-light)', position: 'absolute', top: '1.5rem', left: '1.5rem', opacity: 0.5 }} />
              <p style={{ fontSize: '1.1rem', color: 'var(--text-main)', fontStyle: 'italic', marginBottom: '2rem', position: 'relative', zIndex: 1, paddingTop: '1rem' }}>
                "{test.quote}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {test.author.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: 'var(--primary)', margin: 0 }}>{test.author}</h4>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{test.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontStyle: 'italic' }}>
            * Note: These are placeholder testimonials until official success stories are compiled by the founder.
          </p>
        </div>

      </div>
    </div>
  );
}

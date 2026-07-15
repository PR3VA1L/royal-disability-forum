"use client";

import { motion } from "framer-motion";
import { Target, Lightbulb } from "lucide-react";

export default function AboutUs() {
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
          <h1 style={{ fontSize: "3rem", color: "var(--primary)", marginBottom: "1rem" }}>About Us</h1>
          <p style={{ fontSize: "1.2rem", color: "var(--text-muted)", maxWidth: "800px", margin: "0 auto" }}>
            Learn about our journey, our founder's vision, and the core mission that drives Royal Disability Forum every day.
          </p>
        </motion.div>

        {/* Founder Story */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid var(--accent)' }}>
              <img src="/images/founder.jpg" alt="Muchaneta Shamu - Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 style={{ fontSize: "2.5rem", color: "var(--primary)", marginBottom: "1.5rem" }}>Our Founder's Story</h2>
            <p style={{ marginBottom: "1rem", color: "var(--text-main)", fontSize: "1.1rem" }}>
              The founder of Royal Disability Forum, <strong>Muchaneta Shamu</strong>, was moved by the suffering of disadvantaged and disabled people she grew up with.
            </p>
            <p style={{ marginBottom: "1rem", color: "var(--text-muted)", fontSize: "1.1rem" }}>
              From the young age of 9, she witnessed peers struggling with hunger, lack of education, inadequate shelter, and family neglect. These experiences deeply touched her heart and fueled a lifelong desire to start this organization.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              Today, Royal Disability Forum stands as a beacon of hope and support for the vulnerable and disabled, turning childhood empathy into powerful, actionable change.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          
          <motion.div 
            className="glass"
            style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--accent)', color: 'var(--primary-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Target size={32} />
            </div>
            <h3 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Mission</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              To build and change the lifestyle of vulnerable men, women, and children with disabilities, helping them stand together for their rights and actively contribute to civil society governance and leadership in Zimbabwe and Africa.
            </p>
          </motion.div>

          <motion.div 
            className="glass"
            style={{ padding: '3rem', borderRadius: 'var(--radius-lg)' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'var(--primary-light)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
              <Lightbulb size={32} />
            </div>
            <h3 style={{ fontSize: "2rem", color: "var(--primary)", marginBottom: "1rem" }}>Our Vision</h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
              To prove to the world that disability is not inability by enabling individuals to achieve competitive management positions in companies and become productive citizens through empowerment and advocacy.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}

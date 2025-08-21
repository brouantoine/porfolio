import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import { useState } from 'react';
import { RiSendPlaneFill, RiUserFill, RiMailFill, RiMessage2Fill } from 'react-icons/ri';

import useRemoteContent from '../hooks/useRemoteContent'; // <-- depuis pages -> hooks
import { ageFrom } from '../utils/age';                   // <-- depuis pages -> utils

const Home = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const content = useRemoteContent();

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const endpoint = `https://formsubmit.co/ajax/${content?.contact?.formEmail || 'brouantoineassanvo@gmail.com'}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok || result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else setSubmitStatus('error');
    } catch {
      setSubmitStatus('error');
    }
  };

  const experiences = content.experiences || [];
  const services = content.services || [];

  return (
    <div className="portfolio-container">
      {/* HERO */}
      <section className="hero-section">
        {/* Couverture */}
        <div className="hero-cover">
          <img
            src={content?.profile?.cover}
            alt=""
            className="hero-cover-image"
            loading="lazy"
          />
        </div>

        <div className="hero-content">
          <motion.div className="profile-text-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            <motion.div className="profile-container" initial={{ scale: 0.95 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 110, damping: 14 }}>
              <img
                src={content?.profile?.avatar}
                alt={content?.profile?.fullName || 'Profil'}
                className="profile-image"
                loading="lazy"
              />
              <motion.div className="profile-decoration" initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 0.22 }} transition={{ delay: 0.25, type: 'spring', stiffness: 160 }} />
            </motion.div>

            <motion.div className="profile-side-text" initial={{ x: 16, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.35 }}>
              <div className="text-bubble">
                <p className="bubble-text">
                  <span className="highlight">{content?.copy?.heroBubbleTitle?.[0]}</span>,
                  <span className="highlight"> {content?.copy?.heroBubbleTitle?.[1]}</span>
                </p>
                <p className="bubble-subtext">
                  {content?.copy?.heroBubbleSubtitle}
                </p>
              </div>
              <div className="text-arrow" />
            </motion.div>
          </motion.div>

          <motion.div className="hero-text" initial={{ y: 8, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1>
              {content?.profile?.fullName || '—'}
              <motion.span className="subtitle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                {content?.profile?.role} • {content?.profile?.birthdate ? `${ageFrom(content.profile.birthdate)} ans` : null}
              </motion.span>
            </h1>

            <motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }}>
              <Link to="/cv" style={{ textDecoration: 'none' }}>
                <motion.button className="action-button" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  CV
                </motion.button>
              </Link>
              <Link to="/projets" style={{ textDecoration: 'none' }}>
                <motion.button className="action-button secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Projets
                </motion.button>
              </Link>
              <Link to="/contact" style={{ textDecoration: 'none' }}>
                <motion.button className="action-button secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Contact
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CV / PARCOURS — serré */}
      <motion.section id="cv" className="section cv-section tight" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '0px 0px -36px 0px' }} transition={{ duration: 0.6 }}>
        <motion.h2 className="section-title" initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          Parcours Professionnel
        </motion.h2>

        <div className="timeline">
          {(experiences).map((exp, index) => (
            <motion.div key={index} className="timeline-item" initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true, margin: '0px 0px -22px 0px' }} transition={{ delay: index * 0.12 + 0.2 }}>
              <h3>{exp.title}</h3>
              <p className="timeline-date">{exp.date}</p>
              <p className="timeline-description">{exp.description}</p>
              <div className="timeline-dot" />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* SERVICES — alt + serré */}
      <motion.section id="services" className="section services-section alt tight" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '0px 0px -36px 0px' }} transition={{ duration: 0.6 }}>
        <motion.h2 className="section-title" initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          Services
        </motion.h2>

        <div className="services-grid">
          {(services).map((s, index) => (
            <motion.article key={s.title} className="service-card" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: isMobile ? '0px' : '-44px' }} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ y: -3 }}>
              <div className="service-top">
                <div className="service-icon" aria-hidden><span>{s.emoji}</span></div>
                <h3>{s.title}</h3>
                <p className="service-short">{s.short}</p>
              </div>
              <ul className="service-points">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <div className="service-cta">
                <a href="#contact" className="service-button">Demander un devis</a>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* CONTACT — alt + serré */}
      <motion.section id="contact" className="section contact-section alt tight" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: '0px 0px -34px 0px' }} transition={{ duration: 0.6 }}>
        <motion.h2 className="section-title" initial={{ y: 14, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          Contactez-moi
        </motion.h2>

        <motion.div className="contact-container" initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.25 }}>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <p hidden><label>Ne pas remplir: <input name="bot-field" /></label></p>

            <AnimatePresence>
              {submitStatus === 'success' && (
                <motion.div className="form-alert success" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  Message envoyé avec succès !
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div className="form-alert error" initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}>
                  Erreur lors de l'envoi.
                </motion.div>
              )}
            </AnimatePresence>

            <div className="input-group">
              <label htmlFor="name" className="label-with-icon"><RiUserFill className="input-icon" /><span>Nom complet</span></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required autoComplete="name" />
            </div>

            <div className="input-group">
              <label htmlFor="email" className="label-with-icon"><RiMailFill className="input-icon" /><span>Email</span></label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required autoComplete="email" />
            </div>

            <div className="input-group">
              <label htmlFor="message" className="label-with-icon"><RiMessage2Fill className="input-icon" /><span>Message</span></label>
              <textarea id="message" rows="5" name="message" value={formData.message} onChange={handleChange} required />
            </div>

            <motion.button type="submit" className="submit-button" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <RiSendPlaneFill className="button-icon" /> Envoyer le message
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;

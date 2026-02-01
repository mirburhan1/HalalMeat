import React from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Heart, Utensils, Award, TrendingUp, MapPin, Phone, Mail, Send } from 'lucide-react';

export const HomePage = () => {
    const navigate = useNavigate();

    const CategoryIcon = ({ type }) => {
        let icon = <Utensils size={48} />;
        return (
            <div style={{
                width: '100px', height: '100px',
                background: 'linear-gradient(135deg, rgba(236, 253, 245, 0.8), rgba(209, 250, 229, 0.8))',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#10b981', margin: '0 auto 1.5rem',
                boxShadow: 'inset 0 2px 4px rgba(255,255,255,0.8), 0 10px 15px -3px rgba(16, 185, 129, 0.2)'
            }}>
                {icon}
            </div>
        );
    };

    const CategoryCard = ({ title, sub }) => (
        <Card className="category-card" onClick={() => navigate('/buyer')}>
            <div style={{ padding: '3rem 2rem', textAlign: 'center', cursor: 'pointer' }}>
                <CategoryIcon />
                <h3 style={{ fontSize: '1.75rem', color: '#111827', fontWeight: '700', marginBottom: '0.5rem' }}>{title}</h3>
                <p style={{ color: '#6b7280', fontSize: '1rem', fontWeight: '500' }}>{sub}</p>
            </div>
        </Card>
    );

    return (
        <div style={{ color: '#1f2937' }}>

            {/* Hero Section */}
            <section style={{ textAlign: 'center', padding: '8rem 0 10rem' }}>
                <h1 style={{
                    fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                    fontWeight: '800',
                    marginBottom: '2rem',
                    letterSpacing: '-0.04em',
                    lineHeight: 1.1,
                    color: '#111827',
                    textShadow: '0 2px 8px rgba(255,255,255,0.8)' /* Stronger text shadow for transparency */
                }}>
                    Premium Halal Meat<br />
                    <span style={{
                        background: 'linear-gradient(135deg, #10b981, #059669)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        textShadow: 'none'
                    }}>Delivered Fresh</span>
                </h1>
                <p style={{ fontSize: '1.5rem', color: '#111827', maxWidth: '700px', margin: '0 auto 4rem', lineHeight: 1.6, fontWeight: '600', textShadow: '0 1px 2px rgba(255,255,255,1)' }}>
                    Certified Zabiha Halal. Sourced from organic farms. Experience the difference in quality and purity.
                </p>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <Button variant="primary" onClick={() => navigate('/buyer')} style={{ padding: '1.25rem 3.5rem', fontSize: '1.25rem' }}>
                        Shop Now <ArrowRight size={24} style={{ marginLeft: '12px' }} />
                    </Button>
                    <Button variant="secondary" onClick={() => navigate('/work')} style={{ padding: '1.25rem 3.5rem', fontSize: '1.25rem' }}>
                        Become a Seller
                    </Button>
                </div>
            </section>

            {/* Categories Section */}
            <section style={{ marginBottom: '10rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Selection</span>
                    <h2 style={{ fontSize: '3rem', color: '#111827', marginTop: '0.5rem', textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>Shop by Category</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem' }}>
                    <CategoryCard title="Premium Beef" sub="Steaks, Ribs & Ground" />
                    <CategoryCard title="Fresh Lamb" sub="Chops, Legs & Shanks" />
                    <CategoryCard title="Organic Chicken" sub="Whole, Breast & Wings" />
                    <CategoryCard title="Goat Meat" sub="Lean Cuts & Curry" />
                </div>
            </section>

            {/* Why Us Section */}
            <section style={{ marginBottom: '10rem' }}>
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <span style={{ color: '#10b981', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Our Promise</span>
                    <h2 style={{ fontSize: '3rem', color: '#111827', marginTop: '0.5rem', textShadow: '0 2px 4px rgba(255,255,255,0.5)' }}>Why Choose Us?</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem' }}>
                    <Card className="feature-card">
                        <div style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ color: '#10b981', marginBottom: '1.5rem' }}><ShieldCheck size={56} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>100% Certified Halal</h3>
                            <p style={{ color: '#6b7280', fontWeight: '500' }}>Strict compliance with Islamic dietary laws. Verified at every step.</p>
                        </div>
                    </Card>
                    <Card className="feature-card">
                        <div style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ color: '#10b981', marginBottom: '1.5rem' }}><Award size={56} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Quality</h3>
                            <p style={{ color: '#6b7280', fontWeight: '500' }}>Hand-picked from the best organic farms. No hormones/antibiotics.</p>
                        </div>
                    </Card>
                    <Card className="feature-card">
                        <div style={{ padding: '3rem', textAlign: 'center' }}>
                            <div style={{ color: '#10b981', marginBottom: '1.5rem' }}><TrendingUp size={56} /></div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Community Focused</h3>
                            <p style={{ color: '#6b7280', fontWeight: '500' }}>Empowering local farmers and delivery partners in your area.</p>
                        </div>
                    </Card>
                </div>
            </section>

            {/* Professional Contact Section - Transparent Curved Box */}
            <section style={{ marginBottom: '5rem', display: 'flex', justifyContent: 'center' }}>
                <Card style={{
                    padding: '0',
                    overflow: 'hidden',
                    maxWidth: '1000px', /* "Little box" -> Constrained width */
                    width: '100%',
                    borderRadius: '48px', /* Rounded "Curved border" */
                    background: 'rgba(255, 255, 255, 0.4)', /* Transparent as requested */
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)'
                }}>
                    <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0', minHeight: '500px' }}>

                        {/* Contact Info & Form */}
                        <div style={{ padding: 'clamp(2rem, 4vw, 4rem)' }}>
                            <span style={{ color: '#10b981', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>Contact Us</span>
                            <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#111827', marginTop: '0.5rem', marginBottom: '2rem' }}>Get in Touch</h2>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.8rem', borderRadius: '12px', color: '#10b981' }}><MapPin size={22} /></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>Visit Us</h4>
                                        <p style={{ color: '#4b5563' }}>Lal Chowk, Srinagar, Kashmir 190001</p>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ background: 'rgba(16, 185, 129, 0.1)', padding: '0.8rem', borderRadius: '12px', color: '#10b981' }}><Mail size={22} /></div>
                                    <div>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.1rem' }}>Email Us</h4>
                                        <p style={{ color: '#4b5563' }}>contact@halalmeatkashmir.com</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'grid', gap: '1rem' }}>
                                <input type="text" placeholder="Your Name" style={{
                                    padding: '1rem', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.1)', outline: 'none',
                                    background: 'rgba(255,255,255,0.6)'
                                }} />
                                <Button variant="primary" style={{ justifyContent: 'center', width: '100%' }}>Send Message <Send size={18} style={{ marginLeft: '8px' }} /></Button>
                            </div>
                        </div>

                        {/* Map of Srinagar */}
                        <div className="map-container" style={{ position: 'relative', height: '100%', minHeight: '400px', width: '100%' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105627.85966468452!2d74.7210219665671!3d34.10657159742411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1855686e3c5ef%3A0x66244b7cc1e305c6!2sSrinagar!5e0!3m2!1sen!2sin!4v1706822200000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, opacity: 0.85, borderRadius: '0 32px 32px 0' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    <style>{`
                        @media (max-width: 900px) {
                            .contact-grid {
                                grid-template-columns: 1fr !important;
                            }
                            .map-container iframe {
                                border-radius: 0 0 32px 32px !important;
                                min-height: 350px;
                            }
                        }
                    `}</style>
                </Card>
            </section>

            {/* Simple Footer - Transparent Pill Box */}
            <div style={{ textAlign: 'center', paddingBottom: '3rem' }}>
                <footer style={{
                    display: 'inline-block',
                    background: 'rgba(255, 255, 255, 0.3)',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '24px',
                    padding: '2rem 4rem',
                    color: '#064e3b',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    fontWeight: '600'
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Halal Meat Market</h2>
                    <p style={{ opacity: 0.9, marginBottom: '0', fontSize: '1rem' }}>&copy; 2026. Made with ❤️ in Kashmir.</p>
                </footer>
            </div>
        </div>
    );
};

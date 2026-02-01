import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, Store, Truck } from 'lucide-react';
import { Button } from '../ui/Button';

export const Navbar = ({ auth = { seller: false, delivery: false } }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const location = useLocation();

    /* "As a buyer I don't wanna see this" -> Remove explicit role links from main nav. */
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
    ];

    const isActive = (path) => location.pathname === path;

    const RoleBadge = ({ icon: Icon, color, label, path }) => (
        <Link to={path} style={{ textDecoration: 'none' }}>
            <div className="role-badge" style={{
                display: 'flex', alignItems: 'center', gap: '0.75rem',
                background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(10px)',
                padding: '0.5rem 1rem 0.5rem 0.5rem',
                borderRadius: '99px',
                border: '1px solid rgba(255, 255, 255, 0.5)',
                boxShadow: `0 4px 12px ${color}20`,
                cursor: 'pointer',
                transition: 'transform 0.2s ease'
            }}>
                <div style={{
                    width: '40px', height: '40px', borderRadius: '50%',
                    background: color, color: 'white',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 0 4px ${color}20`,
                    animation: 'pulse-ring 2s infinite'
                }}>
                    <Icon size={20} />
                </div>
                <span style={{ fontWeight: '700', fontSize: '0.9rem', color: '#1f2937', letterSpacing: '-0.01em', textTransform: 'uppercase' }}>
                    {label}
                </span>
            </div>
        </Link>
    );

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            backgroundColor: 'transparent', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)',
            borderBottom: 'none', padding: '1.25rem 0', transition: 'all 0.3s ease'
        }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 clamp(1rem, 5vw, 2.5rem)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

                {/* Brand */}
                <Link to="/" style={{ fontSize: '1.5rem', fontWeight: '800', textDecoration: 'none', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.75rem', letterSpacing: '-0.03em' }}>
                    <div style={{ color: '#10b981', display: 'flex' }}><ShoppingBag size={28} /></div>
                    <span>Halal Meat</span>
                </Link>

                {/* Desktop Nav - Now with Animated Role Indicators */}
                <div className="hidden-mobile" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>

                    {/* Public Links */}
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                textDecoration: 'none',
                                color: isActive(link.path) ? '#10b981' : '#374151',
                                fontWeight: '600',
                                fontSize: '1.05rem',
                                transition: 'color 0.2s',
                                letterSpacing: '-0.01em'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Animated Role Indicators (Show if Logged In) */}
                    <div style={{ display: 'flex', gap: '1rem', marginLeft: '1rem' }}>
                        {auth.seller && (
                            <RoleBadge icon={Store} color="#10b981" label="Seller Admin" path="/seller" />
                        )}
                        {auth.delivery && (
                            <RoleBadge icon={Truck} color="#f59e0b" label="Delivery Admin" path="/delivery" />
                        )}
                    </div>

                    {!auth.seller && !auth.delivery && (
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button variant="primary" style={{ padding: '0.9rem 2rem', fontSize: '1.1rem', boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)' }}>
                                Sign In / Sign Up
                            </Button>
                        </Link>
                    )}
                </div>

                <style>{`
                    @keyframes pulse-ring {
                        0% { box-shadow: 0 0 0 0px rgba(16, 185, 129, 0.4); }
                        100% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
                    }
                    .role-badge:hover { transform: translateY(-2px); }
                `}</style>

                {/* Mobile Menu Toggle */}
                <div className="show-mobile" style={{ display: 'none' }}>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ background: 'none', border: 'none', color: '#1f2937', cursor: 'pointer' }}>
                        {isOpen ? <X size={32} /> : <Menu size={32} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    right: 0,
                    background: 'rgba(255,255,255,0.95)',
                    backdropFilter: 'blur(20px)',
                    padding: '2rem',
                    borderBottom: '1px solid rgba(0,0,0,0.05)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                    display: 'flex', flexDirection: 'column', gap: '2rem'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{ textDecoration: 'none', color: '#1f2937', fontSize: '1.25rem', fontWeight: '700', textAlign: 'center' }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="primary" style={{ width: '100%', padding: '1.25rem' }}>Sign In</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

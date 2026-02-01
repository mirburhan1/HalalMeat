import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const LoginPage = ({ setAuth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const role = location.state?.role || 'buyer'; // 'seller' | 'delivery' | 'buyer'

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();

        // Log in based on the requested role
        if (role === 'seller') {
            setAuth(prev => ({ ...prev, seller: true }));
        } else if (role === 'delivery') {
            setAuth(prev => ({ ...prev, delivery: true }));
        } else {
            // Default to buyer if no specific role requested
            setAuth(prev => ({ ...prev, buyer: true }));
        }

        // Determine where to go next
        // 1. If we were redirected from a protected page, go back there.
        const from = location.state?.from?.pathname;

        let target = from;

        // 2. If 'from' is missing, or we are at /login, or /, default to the Role's dashboard
        if (!target || target === '/login' || target === '/') {
            if (role === 'seller') target = '/seller-onboarding';
            else if (role === 'delivery') target = '/delivery';
            else target = '/';
        }

        navigate(target, { replace: true });
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <Card className="login-card">
                <div style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', width: '100%', maxWidth: '400px' }}>
                    <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '2rem', color: '#1f2937' }}>
                        {role === 'seller' ? 'Seller Login' : role === 'delivery' ? 'Delivery Login' : 'Welcome Back'}
                    </h2>

                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4b5563', fontWeight: '500' }}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                style={{
                                    width: '100%', padding: '0.75rem', borderRadius: '8px',
                                    border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem'
                                }}
                                required
                            />
                        </div>

                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', color: '#4b5563', fontWeight: '500' }}>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                style={{
                                    width: '100%', padding: '0.75rem', borderRadius: '8px',
                                    border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem'
                                }}
                                required
                            />
                        </div>

                        <Button type="submit" variant="primary" style={{ width: '100%', marginTop: '1rem' }}>
                            Sign In
                        </Button>
                    </form>

                    <p style={{ textAlign: 'center', marginTop: '1.5rem', color: '#6b7280' }}>
                        Don't have an account? <span style={{ color: '#15803d', fontWeight: '600', cursor: 'pointer' }}>Sign up</span>
                    </p>
                </div>
            </Card>
            <style>{`
        .login-card {
           width: 400px;
           max-width: 90vw;
        }
      `}</style>
        </div>
    );
};

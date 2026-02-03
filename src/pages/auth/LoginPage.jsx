import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { ShoppingBag, Truck, Store } from 'lucide-react';

export const LoginPage = ({ setAuth }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialRole = location.state?.role || 'buyer'; // 'seller' | 'delivery' | 'buyer'

    const [selectedRole, setSelectedRole] = useState(initialRole);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (location.state?.role) {
            setSelectedRole(location.state.role);
        }
    }, [location.state]);

    const handleLogin = (e) => {
        e.preventDefault();

        // Log in based on the SELECTED role
        if (selectedRole === 'seller') {
            setAuth(prev => ({ ...prev, seller: true }));
        } else if (selectedRole === 'delivery') {
            setAuth(prev => ({ ...prev, delivery: true }));
        } else {
            setAuth(prev => ({ ...prev, buyer: true }));
        }

        // Determine where to go next based on ROLE
        let target = location.state?.from?.pathname;

        if (!target || target === '/login' || target === '/') {
            if (selectedRole === 'seller') target = '/seller-onboarding';
            else if (selectedRole === 'delivery') target = '/delivery';
            else target = '/buy';
        }

        navigate(target, { replace: true });
    };

    const RoleTab = ({ role, icon: Icon, label }) => (
        <button
            type="button"
            onClick={() => setSelectedRole(role)}
            style={{
                flex: 1,
                padding: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                background: selectedRole === role ? '#10b981' : 'transparent',
                color: selectedRole === role ? 'white' : '#6b7280',
                border: 'none',
                cursor: 'pointer',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.9rem',
                transition: 'all 0.2s ease',
                boxShadow: selectedRole === role ? '0 4px 6px -1px rgba(16, 185, 129, 0.4)' : 'none'
            }}
        >
            <Icon size={18} />
            {label}
        </button>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
            <Card className="login-card">
                <div style={{ padding: 'clamp(1.5rem, 5vw, 2.5rem)', width: '100%', maxWidth: '400px' }}>

                    {/* Role Switcher */}
                    <div style={{
                        display: 'flex',
                        background: '#f3f4f6',
                        padding: '0.3rem',
                        borderRadius: '12px',
                        marginBottom: '2rem'
                    }}>
                        <RoleTab role="buyer" icon={ShoppingBag} label="Buyer" />
                        <RoleTab role="seller" icon={Store} label="Seller" />
                        <RoleTab role="delivery" icon={Truck} label="Delivery" />
                    </div>

                    <h2 style={{ fontSize: '1.75rem', textAlign: 'center', marginBottom: '0.5rem', color: '#1f2937' }}>
                        {selectedRole === 'seller' ? 'Seller Portal' : selectedRole === 'delivery' ? 'Delivery Partner' : 'Welcome Back'}
                    </h2>
                    <p style={{ textAlign: 'center', marginBottom: '2rem', color: '#6b7280', fontSize: '0.95rem' }}>
                        {selectedRole === 'seller' ? 'Manage your shop and orders.' : selectedRole === 'delivery' ? 'Track and deliver orders.' : 'Login to start ordering fresh meat.'}
                    </p>

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
                                    border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem',
                                    background: '#fff', color: '#1f2937'
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
                                    border: '1px solid #d1d5db', outline: 'none', fontSize: '1rem',
                                    background: '#fff', color: '#1f2937'
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

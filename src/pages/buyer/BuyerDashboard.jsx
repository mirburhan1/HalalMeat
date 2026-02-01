import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Search, ShoppingCart, Lock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const BuyerDashboard = ({ isLoggedIn }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    // isLoggedIn comes from prop now


    const products = [
        { id: 1, name: 'Lamb Leg (Whole)', seller: 'Ahmed Meats', price: 45, image: '🥩' },
        { id: 2, name: 'Chicken Breast (1kg)', seller: 'Fresh Halal Cut', price: 12, image: '🍗' },
        { id: 3, name: 'Wagyu Beef Cubes', seller: 'Premium Cuts', price: 85, image: '🍖' },
        { id: 4, name: 'Goat Shoulder', seller: 'City Butchers', price: 35, image: '🐐' },
    ];

    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.seller.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleBuy = () => {
        if (!isLoggedIn) {
            if (window.confirm("You must login to purchase items. Proceed to login?")) {
                navigate('/login');
            }
        } else {
            alert("Added to cart! (Mock)");
        }
    };

    return (
        <div style={{ color: '#1f2937' }}>
            <header style={{ marginBottom: '4rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '0.5rem' }}>Marketplace</h1>
                        <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Find the best halal meat near you</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>

                        <Button variant="secondary" style={{ padding: '0.6rem 1.25rem' }}>
                            <ShoppingCart size={20} /> <span style={{ marginLeft: '8px' }}>Cart (0)</span>
                        </Button>
                    </div>
                </div>

                <div style={{ position: 'relative', width: '100%', maxWidth: '640px', margin: '0 auto' }}>
                    <Search size={22} style={{ position: 'absolute', left: '18px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                    <input
                        type="text"
                        placeholder="Search for meat type, cut, or seller..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1.2rem 1.2rem 1.2rem 3.5rem',
                            borderRadius: '9999px',
                            border: '1px solid #e5e7eb',
                            fontSize: '1rem',
                            boxShadow: 'var(--shadow-md)',
                            outline: 'none',
                            transition: 'all 0.2s',
                            backgroundColor: 'white'
                        }}
                        onFocus={(e) => e.target.style.boxShadow = 'var(--shadow-lg)'}
                        onBlur={(e) => e.target.style.boxShadow = 'var(--shadow-md)'}
                    />
                </div>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
                {filteredProducts.map(product => (
                    <Card key={product.id} className="product-card">
                        <div style={{ padding: '2rem' }}>
                            <div style={{ height: '180px', background: '#f9fafb', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', marginBottom: '1.5rem', transition: 'transform 0.3s' }}>
                                {product.image}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                <div>
                                    <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '0.3rem', fontWeight: '600' }}>{product.name}</h3>
                                    <p style={{ color: '#6b7280', fontSize: '0.95rem' }}>{product.seller}</p>
                                </div>
                                <span style={{ fontWeight: '700', fontSize: '1.4rem', color: '#10b981' }}>${product.price}</span>
                            </div>
                            <Button
                                variant={isLoggedIn ? "primary" : "secondary"}
                                style={{ width: '100%', padding: '0.8rem', justifyContent: 'center', gap: '0.5rem' }}
                                onClick={handleBuy}
                            >
                                {isLoggedIn ? 'Add to Cart' : <><Lock size={16} /> Login to Buy</>}
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

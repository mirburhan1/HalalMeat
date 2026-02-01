import React from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { ShoppingCart, Star, Clock, ChefHat, Tag } from 'lucide-react';

export const BuyerRecommendations = ({ products, title = "Recommended Used For You" }) => {
    // Default mocks if no products provided
    const defaultProducts = [
        { id: 1, name: 'Premium Angus Ribeye', price: '$24.99', weight: '1lb', rating: 4.9, image: '🥩', tag: 'Best Seller', category: 'Beef' },
        { id: 2, name: 'Organic Chicken Breast', price: '$12.99', weight: '2lb', rating: 4.8, image: '🍗', tag: 'Fresh', category: 'Chicken' },
        { id: 3, name: 'Lamb Shoulder Chops', price: '$19.99', weight: '1.5lb', rating: 4.7, image: '🍖', tag: 'Discount', category: 'Lamb' },
        { id: 4, name: 'Ground Beef (Lean)', price: '$9.99', weight: '1lb', rating: 4.6, image: '🍔', tag: 'Popular', category: 'Beef' },
        { id: 5, name: 'Marinated Goat Cubes', price: '$22.50', weight: '1lb', rating: 4.9, image: '🥘', tag: 'New', category: 'Goat' },
        { id: 6, name: 'Chicken Wings (Party Pack)', price: '$15.99', weight: '3lb', rating: 4.7, image: '🍗', tag: 'Value', category: 'Chicken' },
    ];

    const displayProducts = products || defaultProducts;

    return (
        <section style={{ marginBottom: '4rem', padding: '0 1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '2rem' }}>
                <div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#111827', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                        {title} {title.includes('Recommended') && <Star fill="#fbbf24" stroke="none" size={24} />}
                    </h2>
                    <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '1rem' }}>
                        {title.includes('Search') ? 'Found the following fresh cuts for you.' : 'Curated selections based on your previous orders and preferences.'}
                    </p>
                </div>
                <Button variant="outline" style={{ display: 'none' }}>View All</Button>
            </div>

            {/* Horizontal Scroll Container */}
            <div
                className="no-scrollbar"
                style={{
                    display: 'flex',
                    gap: '1.5rem',
                    overflowX: 'auto',
                    padding: '1rem 0.5rem 2rem 0.5rem',
                    scrollSnapType: 'x mandatory',
                    WebkitOverflowScrolling: 'touch'
                }}
            >
                {displayProducts.length > 0 ? displayProducts.map((product) => (
                    <Card key={product.id} className="card-3d" style={{
                        minWidth: '280px',
                        maxWidth: '280px',
                        scrollSnapAlign: 'start',
                        padding: '0',
                        overflow: 'hidden',
                        display: 'flex',
                        flexDirection: 'column',
                        background: 'rgba(255, 255, 255, 0.8)',
                    }}>
                        {/* Product Image Area */}
                        <div style={{
                            height: '160px',
                            background: '#f3f4f6',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '4rem',
                            position: 'relative'
                        }}>
                            {product.image}
                            <span style={{
                                position: 'absolute',
                                top: '12px',
                                right: '12px',
                                background: 'rgba(255,255,255,0.9)',
                                padding: '4px 10px',
                                borderRadius: '20px',
                                fontSize: '0.75rem',
                                fontWeight: '700',
                                color: '#059669',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px'
                            }}>
                                <Tag size={12} /> {product.tag}
                            </span>
                        </div>

                        {/* Product Info */}
                        <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1f2937', margin: 0 }}>{product.name}</h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem', fontWeight: '600', color: '#f59e0b' }}>
                                    <Star size={14} fill="#f59e0b" /> {product.rating}
                                </div>
                            </div>

                            <p style={{ color: '#6b7280', fontSize: '0.9rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={14} /> Fresh today • {product.weight}
                            </p>

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: '800', color: '#059669' }}>{product.price}</span>
                                <Button variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem', borderRadius: '12px' }}>
                                    Add <ShoppingCart size={16} style={{ marginLeft: '6px' }} />
                                </Button>
                            </div>
                        </div>
                    </Card>
                )) : (
                    <div style={{ width: '100%', padding: '2rem', textAlign: 'center', color: '#6b7280' }}>
                        <p style={{ fontSize: '1.1rem' }}>No products found matching your search.</p>
                    </div>
                )}
            </div>

            <style>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
};

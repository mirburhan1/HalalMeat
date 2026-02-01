import React, { useState, useMemo } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Search, X, Star } from 'lucide-react';
import { BuyerRecommendations } from '../components/buyer/BuyerRecommendations';
import { useNavigate } from 'react-router-dom';

// Master Product List (Mock Data)
const ALL_PRODUCTS = [
    { id: 1, name: 'Premium Angus Ribeye', price: '$24.99', weight: '1lb', rating: 4.9, image: '🥩', tag: 'Best Seller', category: 'Beef' },
    { id: 2, name: 'Organic Chicken Breast', price: '$12.99', weight: '2lb', rating: 4.8, image: '🍗', tag: 'Fresh', category: 'Chicken' },
    { id: 3, name: 'Lamb Shoulder Chops', price: '$19.99', weight: '1.5lb', rating: 4.7, image: '🍖', tag: 'Discount', category: 'Lamb' },
    { id: 4, name: 'Ground Beef (Lean)', price: '$9.99', weight: '1lb', rating: 4.6, image: '🍔', tag: 'Popular', category: 'Beef' },
    { id: 5, name: 'Marinated Goat Cubes', price: '$22.50', weight: '1lb', rating: 4.9, image: '🥘', tag: 'New', category: 'Goat' },
    { id: 6, name: 'Chicken Wings (Party Pack)', price: '$15.99', weight: '3lb', rating: 4.7, image: '🍗', tag: 'Value', category: 'Chicken' },
    { id: 7, name: 'Veal Cutlets', price: '$26.00', weight: '1lb', rating: 4.8, image: '🥩', tag: 'Premium', category: 'Beef' },
    { id: 8, name: 'Whole Chicken', price: '$14.50', weight: '4lb', rating: 4.9, image: '🐓', tag: 'Family', category: 'Chicken' },
];

const FILTER_CATEGORIES = ['All', 'Beef', 'Chicken', 'Lamb', 'Goat'];

export const BuyPage = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return ALL_PRODUCTS.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = activeFilter === 'All' || product.category === activeFilter;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, activeFilter]);

    // Dynamic Title Logic
    const getSectionTitle = () => {
        if (searchTerm) return `Search Results for "${searchTerm}"`;
        if (activeFilter !== 'All') return `${activeFilter} Selection`;
        return "Recommended For You";
    };

    return (
        <div style={{ padding: '8rem 1rem 4rem', maxWidth: '1200px', margin: '0 auto', minHeight: '100vh', color: '#1f2937' }}>

            {/* Header & Search Section */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: '800', color: '#111827', marginBottom: '1.5rem' }}>
                    What are you cooking today?
                </h1>

                {/* Search Bar */}
                <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto 2rem' }}>
                    <input
                        type="text"
                        placeholder="Search for steak, chicken, lamb..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '1.2rem 1.2rem 1.2rem 3.5rem',
                            fontSize: '1.1rem',
                            borderRadius: '24px',
                            border: '1px solid rgba(0,0,0,0.1)',
                            background: 'rgba(255,255,255,0.9)',
                            backdropFilter: 'blur(12px)',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                            outline: 'none',
                            color: '#1f2937'
                        }}
                    />
                    <Search size={24} style={{ position: 'absolute', left: '1.2rem', top: '50%', transform: 'translateY(-50%)', color: '#4b5563' }} />
                    {searchTerm && (
                        <button
                            onClick={() => setSearchTerm('')}
                            style={{ position: 'absolute', right: '1.2rem', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#4b5563' }}
                        >
                            <X size={20} />
                        </button>
                    )}
                </div>

                {/* Filter Chips */}
                <div className="no-scrollbar" style={{
                    display: 'flex',
                    gap: '1rem',
                    overflowX: 'auto',
                    padding: '0.5rem',
                    justifyContent: 'center',
                    flexWrap: 'wrap'
                }}>
                    {FILTER_CATEGORIES.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '99px',
                                border: 'none',
                                background: activeFilter === cat ? '#10b981' : 'white',
                                color: activeFilter === cat ? 'white' : '#1f2937', /* Darker text for unselected */
                                fontWeight: '600',
                                fontSize: '0.95rem',
                                cursor: 'pointer',
                                boxShadow: activeFilter === cat ? '0 4px 12px rgba(16, 185, 129, 0.3)' : '0 2px 8px rgba(0,0,0,0.05)',
                                transition: 'all 0.2s ease',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            <style>{`
                @media (max-width: 640px) {
                    .no-scrollbar {
                        justify-content: flex-start !important;
                        flex-wrap: nowrap !important;
                    }
                }
            `}</style>

            {/* Product Showcase */}
            <BuyerRecommendations products={filteredProducts} title={getSectionTitle()} />

            {/* No other sections (Maps/Contact) as requested */}
        </div>
    );
};

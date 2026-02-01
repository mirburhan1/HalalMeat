import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CheckCircle2, Circle } from 'lucide-react';

export const SellerOnboarding = () => {
    const navigate = useNavigate();
    const [selectedMeats, setSelectedMeats] = useState([]);

    const meatTypes = [
        { id: 'lamb', label: 'Fresh Lamb', desc: 'Premium cuts & whole' },
        { id: 'beef', label: 'Quality Beef', desc: 'Steaks, mince & ribs' },
        { id: 'chicken', label: 'Organic Chicken', desc: 'Whole birds & fillets' },
        { id: 'goat', label: 'Tender Goat', desc: 'Curry cuts & chops' },
    ];

    const toggleMeat = (id) => {
        setSelectedMeats(prev =>
            prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
        );
    };

    const handleContinue = () => {
        // Just mock success and go to dashboard
        navigate('/seller');
    };

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem 1rem', paddingBottom: '4rem', color: '#1f2937' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#111827' }}>Setup Your Shop</h1>
                <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '500px', margin: '0 auto' }}>
                    Select the categories of halal meat you intend to sell. This helps us tailor your store.
                </p>
            </div>

            {/* Selection Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                {meatTypes.map((type) => {
                    const isSelected = selectedMeats.includes(type.id);
                    return (
                        <Card
                            key={type.id}
                            style={{
                                padding: '1.5rem',
                                cursor: 'pointer',
                                border: isSelected ? '2px solid #10b981' : '2px solid transparent',
                                background: isSelected ? 'rgba(16, 185, 129, 0.05)' : 'rgba(255,255,255,0.6)',
                                transition: 'all 0.2s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                            onClick={() => toggleMeat(type.id)}
                        >
                            <div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.25rem' }}>{type.label}</h3>
                                <p style={{ color: '#6b7280', fontSize: '0.9rem' }}>{type.desc}</p>
                            </div>
                            <div style={{ color: isSelected ? '#10b981' : '#d1d5db' }}>
                                {isSelected ? <CheckCircle2 size={28} fill="#ecfdf5" /> : <Circle size={28} />}
                            </div>
                        </Card>
                    );
                })}
            </div>

            {/* Action */}
            <div style={{ textAlign: 'center' }}>
                <Button
                    variant="primary"
                    style={{ padding: '1rem 3rem', fontSize: '1.1rem', opacity: selectedMeats.length === 0 ? 0.5 : 1 }}
                    disabled={selectedMeats.length === 0}
                    onClick={handleContinue}
                >
                    Continue to Dashboard
                </Button>
            </div>

        </div>
    );
};

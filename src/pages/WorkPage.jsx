import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../components/ui/Card';
import { Truck, Store } from 'lucide-react';

export const WorkPage = () => {
    const navigate = useNavigate();

    const WorkOption = ({ title, icon: Icon, path, description, color }) => (
        <Card
            className="work-card"
            onClick={() => navigate(path)}
        >
            <div style={{ padding: '3rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', height: '100%', cursor: 'pointer' }}>
                <div style={{ background: color, borderRadius: '50%', padding: '1.5rem', color: 'white', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.2)' }}>
                    <Icon size={64} />
                </div>
                <h2 style={{ fontSize: '2rem', color: '#1f2937' }}>{title}</h2>
                <p style={{ color: '#6b7280', lineHeight: '1.6', fontSize: '1.1rem' }}>{description}</p>
                <div style={{ marginTop: 'auto', fontWeight: 'bold', color: color, fontSize: '1.2rem' }}>
                    Get Started &rarr;
                </div>
            </div>
        </Card>
    );

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', width: '100%' }}>
            <div style={{ textAlign: 'center', color: 'white', marginBottom: '4rem' }}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Work with Us</h1>
                <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>Choose how you want to partner with Halal Market</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', width: '100%', maxWidth: '900px' }}>
                <WorkOption
                    title="Start Selling"
                    icon={Store}
                    path="/seller-onboarding"
                    description="List your premium halal meat products and reach thousands of customers instantly."
                    color="#15803d"
                />
                <WorkOption
                    title="Deliver Orders"
                    icon={Truck}
                    path="/delivery"
                    description="Join our delivery fleet. Flexible hours, competitive earnings, and weekly payouts."
                    color="#ca8a04"
                />
            </div>
        </div>
    );
};

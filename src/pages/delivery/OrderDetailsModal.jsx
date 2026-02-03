import React from 'react';
import { X, Navigation, Clock, DollarSign } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const OrderDetailsModal = ({ order, onClose }) => {
    if (!order) return null;

    // Simulate location coordinates or queries for the embed map
    // In a real app, these would come from the order object
    const pickupQuery = encodeURIComponent(`${order.pickup}, Srinagar`);
    const dropoffQuery = encodeURIComponent(`${order.dropoff}, Srinagar`);

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 1000, padding: '1rem'
        }} onClick={onClose}>
            <Card style={{
                width: '100%', maxWidth: '800px', maxHeight: '90vh', overflowY: 'auto',
                padding: '0', background: '#fff', position: 'relative'
            }} onClick={e => e.stopPropagation()}>

                {/* Header */}
                <div style={{
                    padding: '1.5rem', borderBottom: '1px solid #f3f4f6',
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    position: 'sticky', top: 0, background: '#fff', zIndex: 10
                }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111827' }}>Order {order.id}</h2>
                        <span style={{
                            fontSize: '0.9rem', color: '#10b981', background: '#ecfdf5',
                            padding: '0.25rem 0.75rem', borderRadius: '99px', fontWeight: '600'
                        }}>{order.status}</span>
                    </div>
                    <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem' }}>
                        <X size={24} color="#6b7280" />
                    </button>
                </div>

                <div style={{ padding: '2rem', display: 'grid', gap: '2rem' }}>

                    {/* Order Summary */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                                <Clock size={16} /> Time
                            </div>
                            <div style={{ fontWeight: '600', color: '#111827' }}>{order.time}</div>
                        </div>
                        <div style={{ background: '#f9fafb', padding: '1rem', borderRadius: '12px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#6b7280', marginBottom: '0.25rem' }}>
                                <DollarSign size={16} /> Earnings
                            </div>
                            <div style={{ fontWeight: '600', color: '#10b981' }}>{order.amount}</div>
                        </div>
                    </div>

                    {/* Maps Split View */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>

                        {/* PICKUP */}
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '24px', height: '24px', background: '#dbeafe', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>1</div>
                                Pickup Location
                            </h3>
                            <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>{order.pickup}</div>
                            <div style={{ height: '250px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                                <iframe
                                    width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${pickupQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <Button variant="outline" style={{ marginTop: '0.75rem', width: '100%', fontSize: '0.9rem' }}>
                                <Navigation size={16} style={{ marginRight: '8px' }} /> Navigate to Shop
                            </Button>
                        </div>

                        {/* DROPOFF */}
                        <div>
                            <h3 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '24px', height: '24px', background: '#d1fae5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669' }}>2</div>
                                Dropoff Location
                            </h3>
                            <div style={{ marginBottom: '0.5rem', fontWeight: '600', color: '#374151' }}>{order.dropoff}</div>
                            <div style={{ height: '250px', borderRadius: '16px', overflow: 'hidden', border: '1px solid #e5e7eb' }}>
                                <iframe
                                    width="100%" height="100%" frameBorder="0" style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${dropoffQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <Button variant="primary" style={{ marginTop: '0.75rem', width: '100%', fontSize: '0.9rem' }}>
                                <Navigation size={16} style={{ marginRight: '8px' }} /> Navigate to Customer
                            </Button>
                        </div>
                    </div>


                </div>

                {/* Footer Actions */}
                <div style={{ padding: '1.5rem', borderTop: '1px solid #f3f4f6', background: '#f9fafb', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button variant="outline" onClick={onClose}>Close Details</Button>
                    {order.status !== 'Completed' && (
                        <Button variant="primary">Mark as Completed</Button>
                    )}
                </div>

            </Card>
        </div>
    );
};

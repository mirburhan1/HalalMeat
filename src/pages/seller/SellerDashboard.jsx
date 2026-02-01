import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Plus, Package, DollarSign, Archive, Edit2, Trash2 } from 'lucide-react';

export const SellerDashboard = () => {
    const [products] = useState([
        { id: 1, name: 'Fresh Lamb Chops', price: 25, stock: 15, unit: 'kg', status: 'Active' },
        { id: 2, name: 'Premium Beef Steak', price: 30, stock: 8, unit: 'kg', status: 'Low Stock' },
        { id: 3, name: 'Organic Chicken Whole', price: 12, stock: 42, unit: 'pcs', status: 'Active' },
        { id: 4, name: 'Goat Curry Cut', price: 22, stock: 0, unit: 'kg', status: 'Out of Stock' },
    ]);

    /* "Same layout system" -> Matching DeliveryDashboard alignment strictly */
    /* "Border has half color... shadow not fully colored" -> Switched to full border + colored shadow glow */
    const StatCard = ({ title, value, icon: Icon, color }) => (
        <Card style={{
            height: '100%',
            minHeight: '140px',
            padding: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            border: `1px solid ${color}30`, /* Full subtle border */
            boxShadow: `0 8px 20px -6px ${color}25`, /* Matching colored glow */
            justifyContent: 'flex-start'
        }}>
            <div style={{
                width: '64px', height: '64px',
                borderRadius: '16px',
                background: `${color}10`,
                color: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
            }}>
                <Icon size={32} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2px' }}>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1 }}>{title}</p>
                <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#111827', margin: 0, lineHeight: 1, letterSpacing: '-0.02em' }}>{value}</h3>
            </div>
        </Card>
    );

    return (
        <div style={{ color: '#1f2937', maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '2.5rem', color: '#111827', marginBottom: '0.25rem' }}>Seller Portal</h1>
                    <p style={{ color: '#6b7280' }}>Manage your shop and inventory</p>
                </div>
                <Button variant="primary" style={{ padding: '0.75rem 1.5rem' }}>
                    <Plus size={20} style={{ marginRight: '8px' }} /> Add New Product
                </Button>
            </div>

            {/* Stats Overview */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                <StatCard title="Total Sales" value="$12,450" icon={DollarSign} color="#10b981" />
                <StatCard title="Active Listings" value="12" icon={Package} color="#3b82f6" />
                <StatCard title="Pending Orders" value="5" icon={Archive} color="#f59e0b" />
            </div>

            {/* Inventory Table */}
            <Card style={{ overflow: 'hidden', padding: 0 }}>
                <div style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Inventory Management</h3>
                </div>
                <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                        <thead style={{ background: '#f9fafb' }}>
                            <tr>
                                <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Product Name</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Price</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Stock</th>
                                <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Status</th>
                                <th style={{ padding: '1rem', textAlign: 'right', color: '#6b7280', fontWeight: '600' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map((item, index) => (
                                <tr key={item.id} style={{ borderBottom: index !== products.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                                    <td style={{ padding: '1rem 1.5rem' }}>
                                        <div style={{ fontWeight: '600', color: '#111827' }}>{item.name}</div>
                                        <div style={{ fontSize: '0.85rem', color: '#9ca3af' }}>ID: #{item.id}</div>
                                    </td>
                                    <td style={{ padding: '1rem', fontWeight: '600', color: '#10b981' }}>${item.price}/{item.unit}</td>
                                    <td style={{ padding: '1rem', color: '#374151' }}>{item.stock} {item.unit}</td>
                                    <td style={{ padding: '1rem' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: '500',
                                            background: item.status === 'Active' ? '#ecfdf5' : item.status === 'Low Stock' ? '#fff7ed' : '#fef2f2',
                                            color: item.status === 'Active' ? '#047857' : item.status === 'Low Stock' ? '#c2410c' : '#991b1b'
                                        }}>
                                            {item.status}
                                        </span>
                                    </td>
                                    <td style={{ padding: '1rem', textAlign: 'right' }}>
                                        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                                            <Button variant="outline" style={{ padding: '0.4rem', color: '#374151', borderColor: '#d1d5db' }}><Edit2 size={16} /></Button>
                                            <Button variant="outline" style={{ padding: '0.4rem', color: '#ef4444', borderColor: '#fee2e2' }}><Trash2 size={16} /></Button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Card>

        </div>
    );
};

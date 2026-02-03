import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Upload, Plus, Package, DollarSign, Tag, FileText, Image as ImageIcon } from 'lucide-react';
import './SellerDashboard.css'; // Reusing dashboard styles for consistency

export const SellerProducts = () => {
    // Mock Inventory Data (History)
    const [products, setProducts] = useState([
        { id: 1, name: 'Fresh Lamb Chops', price: 25, sold: 145, unit: 'kg', earning: '$3,625', status: 'Active' },
        { id: 2, name: 'Premium Beef Steak', price: 30, sold: 89, unit: 'kg', earning: '$2,670', status: 'Low Stock' },
        { id: 3, name: 'Organic Chicken Whole', price: 12, sold: 420, unit: 'pcs', earning: '$5,040', status: 'Active' },
    ]);

    return (
        <div className="seller-dashboard" style={{ color: '#1f2937', maxWidth: '1000px', margin: '0 auto', paddingBottom: '4rem' }}>

            {/* Header */}
            <div style={{ textAlign: 'center', margin: '3rem 0 4rem' }}>
                <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', color: '#111827', marginBottom: '0.5rem', fontWeight: '800' }}>Sell Your Products</h1>
                <p style={{ color: '#6b7280', fontSize: '1.1rem' }}>Add new halal meat items to your shop.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

                {/* 1. ADD NEW PRODUCT FORM */}
                <Card style={{ padding: '0', overflow: 'hidden', height: 'fit-content' }}>
                    <div style={{ padding: '1.5rem', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Plus size={20} color="#10b981" /> Add New Item
                        </h3>
                    </div>

                    <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

                        {/* Photo Upload */}
                        <div style={{
                            border: '2px dashed #d1d5db', borderRadius: '16px', padding: '2rem',
                            textAlign: 'center', cursor: 'pointer', background: '#f9fafb', transition: 'all 0.2s ease'
                        }} className="hover:bg-gray-50 border-emerald-500">
                            <div style={{ background: '#ecfdf5', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: '#10b981' }}>
                                <ImageIcon size={24} />
                            </div>
                            <h4 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.25rem' }}>Upload Product Photo</h4>
                            <p style={{ fontSize: '0.85rem', color: '#9ca3af' }}>Main image of your halal meat</p>
                        </div>

                        {/* Title & Category */}
                        <div style={{ display: 'grid', gap: '1.25rem' }}>
                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Product Title</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="text" placeholder="e.g. Fresh Lamb Leg" style={{
                                        width: '100%', padding: '0.8rem 0.8rem 0.8rem 2.5rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none'
                                    }} />
                                    <Tag size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                </div>
                            </div>

                            <div>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Meat Category</label>
                                <select style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', background: 'white' }}>
                                    <option>Select Category...</option>
                                    <option>Lamb/Mutton</option>
                                    <option>Beef</option>
                                    <option>Chicken</option>
                                    <option>Goat</option>
                                    <option>Veal</option>
                                </select>
                            </div>
                        </div>

                        {/* Price & Unit */}
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Price</label>
                                <div style={{ position: 'relative' }}>
                                    <input type="number" placeholder="0.00" style={{
                                        width: '100%', padding: '0.8rem 0.8rem 0.8rem 2.5rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none'
                                    }} />
                                    <DollarSign size={18} style={{ position: 'absolute', left: '0.8rem', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                                </div>
                            </div>
                            <div style={{ flex: 1 }}>
                                <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Unit</label>
                                <select style={{ width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', background: 'white' }}>
                                    <option>per kg</option>
                                    <option>per lb</option>
                                    <option>per piece</option>
                                </select>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Description</label>
                            <div style={{ position: 'relative' }}>
                                <textarea rows="3" placeholder="Describe quality, cut, and source..." style={{
                                    width: '100%', padding: '0.8rem', borderRadius: '12px', border: '1px solid #d1d5db', outline: 'none', fontFamily: 'inherit', resize: 'none'
                                }}></textarea>
                            </div>
                        </div>

                        <Button variant="primary" style={{ width: '100%', justifyContent: 'center', padding: '1rem', marginTop: '0.5rem' }}>
                            Publish Product
                        </Button>

                    </div>
                </Card>


                {/* 2. INVENTORY HISTORY (Products I Have Sold) */}
                <Card style={{ padding: '0', overflow: 'hidden', height: 'fit-content' }}>
                    <div style={{ padding: '1.5rem', background: '#f9fafb', borderBottom: '1px solid #e5e7eb' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Package size={20} color="#3b82f6" /> My Sold Products
                        </h3>
                    </div>

                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                            <thead style={{ background: '#f9fafb', color: '#6b7280', fontSize: '0.85rem' }}>
                                <tr>
                                    <th style={{ padding: '1rem', textAlign: 'left' }}>Product</th>
                                    <th style={{ padding: '1rem', textAlign: 'center' }}>Total Sold</th>
                                    <th style={{ padding: '1rem', textAlign: 'right' }}>Earnings</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((item, index) => (
                                    <tr key={index} style={{ borderBottom: index !== products.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#374151' }}>
                                            {item.name}
                                            <div style={{ fontSize: '0.8rem', color: '#9ca3af', fontWeight: '400' }}>{item.price}/{item.unit}</div>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'center', color: '#3b82f6', fontWeight: '600' }}>
                                            {item.sold} <span style={{ fontSize: '0.8rem', color: '#9ca3af' }}>{item.unit}</span>
                                        </td>
                                        <td style={{ padding: '1rem', textAlign: 'right', fontWeight: '700', color: '#10b981' }}>
                                            {item.earning}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div style={{ padding: '1rem', textAlign: 'center', borderTop: '1px solid #f3f4f6' }}>
                        <Button variant="outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>View Full History</Button>
                    </div>
                </Card>

            </div>
        </div>
    );
};

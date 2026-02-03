import React, { useState } from 'react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Clock, DollarSign, CheckCircle2, TrendingUp, Bell, Map, Package } from 'lucide-react';
import { OrderDetailsModal } from './OrderDetailsModal';
import './DeliveryDashboard.css';

export const DeliveryDashboard = () => {
    const [isAvailable, setIsAvailable] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [notifications, setNotifications] = useState(2); // Mock notification count
    const [showNotifications, setShowNotifications] = useState(false); // Toggle dropdown

    // Mock Data for Admin Table
    const deliveries = [
        { id: '#DLV-1001', time: '10:30 AM', pickup: 'Ahmed Meats', dropoff: 'Downtown Apt 4B', amount: '$12.50', status: 'Completed', type: 'delivery' },
        { id: '#DLV-1002', time: '11:15 AM', pickup: 'Fresh Halal Cut', dropoff: 'Suburbs Ln 22', amount: '$8.00', status: 'Completed', type: 'delivery' },
        { id: '#DLV-1003', time: '12:45 PM', pickup: 'City Butchers', dropoff: 'Business Park', amount: '$15.00', status: 'In Progress', type: 'pickup' }, // Context: Pickup
        { id: '#DLV-1004', time: '02:00 PM', pickup: 'Premium Cuts', dropoff: 'Lal Chowk', amount: '$10.50', status: 'Pending', type: 'pickup' },
    ];

    /* "Cards 3D has bad alignment" -> Ensuring all surface elements are Cards and aligned */

    /* "Border has half color... shadow not fully colored" -> Switched to full border + colored shadow glow */
    const StatCard = ({ title, value, icon: Icon, color, trend }) => (
        <Card className="stat-card" style={{
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
            {/* "Alignment is wrong" -> Fixed with strict vertical centering and tighter gap */}
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '2px', flex: 1, minWidth: 0 }}>
                <p style={{ color: '#6b7280', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.05em', lineHeight: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <h3 style={{ fontSize: '1.9rem', fontWeight: '800', color: '#111827', margin: 0, lineHeight: 1, letterSpacing: '-0.02em', whiteSpace: 'nowrap' }}>{value}</h3>
                    {trend && <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#10b981', background: '#ecfdf5', padding: '0.2rem 0.6rem', borderRadius: '99px', whiteSpace: 'nowrap' }}>{trend}</span>}
                </div>
            </div>
        </Card>
    );

    return (
        <>
            <div className="delivery-dashboard" style={{ color: '#1f2937', maxWidth: '1200px', margin: '0 auto', paddingBottom: '4rem' }}>

                {/* Header & Controls */}
                <div className="header-section" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', paddingTop: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <h1 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', color: '#111827', marginBottom: '0.25rem' }}>Delivery Portal</h1>
                        <p style={{ color: '#6b7280' }}>Welcome back, Partner</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>

                        {/* Notification Bell */}
                        <div style={{ position: 'relative' }}>
                            <div
                                style={{ position: 'relative', cursor: 'pointer', padding: '0.5rem', background: '#fff', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}
                                onClick={() => setShowNotifications(!showNotifications)}
                            >
                                <Bell size={24} color="#6b7280" />
                                {notifications > 0 && (
                                    <span style={{
                                        position: 'absolute', top: '-5px', right: '-5px',
                                        background: '#ef4444', color: 'white', fontSize: '0.75rem', fontWeight: 'bold',
                                        width: '20px', height: '20px', borderRadius: '50%',
                                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {notifications}
                                    </span>
                                )}
                            </div>

                            {/* Mission Brief Dropdown */}
                            {showNotifications && (
                                <div style={{
                                    position: 'absolute', top: '120%', right: 0, width: '320px',
                                    background: 'white', borderRadius: '12px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.1)',
                                    zIndex: 50, overflow: 'hidden', border: '1px solid #f3f4f6'
                                }}>
                                    <div style={{ padding: '1rem', borderBottom: '1px solid #f3f4f6', fontWeight: 'bold' }}>Mission Brief</div>
                                    <div style={{ padding: '1rem', display: 'flex', gap: '1rem', background: '#fffbeb' }}>
                                        <div style={{ width: '40px', height: '40px', background: '#f59e0b', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', flexShrink: 0 }}>
                                            <Package size={20} />
                                        </div>
                                        <div>
                                            <div style={{ fontSize: '0.85rem', fontWeight: '700', color: '#b45309', marginBottom: '0.25rem' }}>INBOUND PICKUP</div>
                                            <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.25rem' }}>New order at City Butchers</div>
                                            <div style={{ fontSize: '0.8rem', color: '#6b7280' }}>Expected by 1:00 PM</div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '0.75rem', textAlign: 'center', borderTop: '1px solid #f3f4f6', fontSize: '0.85rem', color: '#3b82f6', cursor: 'pointer' }}>
                                        View All Missions
                                    </div>
                                </div>
                            )}
                        </div>

                        <Card className="status-card" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '0.75rem 1.5rem', borderRadius: '999px', minWidth: 'auto', width: 'auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: isAvailable ? '#10b981' : '#ef4444' }}></div>
                                <span style={{ fontWeight: '600', color: isAvailable ? '#10b981' : '#ef4444' }}>{isAvailable ? 'Online' : 'Offline'}</span>
                            </div>
                            <Button
                                variant={isAvailable ? "outline" : "primary"}
                                onClick={() => setIsAvailable(!isAvailable)}
                                style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem', minWidth: '120px' }}
                            >
                                {isAvailable ? 'Go Offline' : 'Go Online'}
                            </Button>
                        </Card>
                    </div>
                </div>


                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
                    <StatCard title="Today's Earnings" value="$46.00" icon={DollarSign} color="#10b981" trend="+12%" />
                    <StatCard title="Completed Trips" value="3" icon={CheckCircle2} color="#3b82f6" />
                    <StatCard title="Total Hours" value="4.5 hrs" icon={Clock} color="#f59e0b" />
                    <StatCard title="Rating" value="4.9" icon={TrendingUp} color="#8b5cf6" />
                </div>

                {/* Admin Table - Deliveries */}
                <Card className="table-card" style={{ overflow: 'hidden', padding: 0 }}>
                    <div className="table-header" style={{ padding: '1.5rem', borderBottom: '1px solid #f3f4f6', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: 'clamp(1.1rem, 3vw, 1.25rem)', fontWeight: 'bold' }}>Recent Deliveries</h3>
                        <Button variant="outline" style={{ fontSize: '0.85rem', padding: '0.4rem 1rem' }}>View All</Button>
                    </div>
                    <div className="table-wrapper" style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.95rem' }}>
                            <thead style={{ background: '#f9fafb' }}>
                                <tr>
                                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Order ID</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Time</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Pickup</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Dropoff</th>
                                    <th style={{ padding: '1rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Earnings</th>
                                    <th style={{ padding: '1rem 1.5rem', textAlign: 'left', color: '#6b7280', fontWeight: '600' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {deliveries.map((item, index) => (
                                    <tr key={item.id} style={{ borderBottom: index !== deliveries.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                                        <td style={{ padding: '1rem 1.5rem', fontWeight: '600', color: '#111827' }}>{item.id}</td>
                                        <td style={{ padding: '1rem', color: '#6b7280' }}>{item.time}</td>
                                        <td style={{ padding: '1rem', color: '#374151' }}>{item.pickup}</td>
                                        <td style={{ padding: '1rem', color: '#374151' }}>{item.dropoff}</td>
                                        <td style={{ padding: '1rem', fontWeight: '600', color: '#10b981' }}>{item.amount}</td>
                                        <td style={{ padding: '1rem 1.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{
                                                    padding: '0.25rem 0.75rem', borderRadius: '99px', fontSize: '0.85rem', fontWeight: '500',
                                                    background: item.status === 'Completed' ? '#ecfdf5' : item.status === 'In Progress' ? '#eff6ff' : '#fff7ed',
                                                    color: item.status === 'Completed' ? '#047857' : item.status === 'In Progress' ? '#1d4ed8' : '#c2410c'
                                                }}>
                                                    {item.status === 'In Progress' ? (
                                                        item.type === 'pickup' ? (
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>📦 PICKUP</span>
                                                        ) : (
                                                            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>🚀 DELIVER</span>
                                                        )
                                                    ) : item.status}
                                                </span>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setSelectedOrder(item)}
                                                    style={{ padding: '0.3rem 0.6rem', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '4px' }}
                                                >
                                                    <Map size={14} /> Map
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>



            </div>
            {selectedOrder && <OrderDetailsModal order={selectedOrder} onClose={() => setSelectedOrder(null)} />}
        </>
    );
};

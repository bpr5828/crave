import Link from 'next/link';

export default function OrdersPage() {
    const orders = [
        { id: 'FG-8821', date: 'Dec 15, 2025', status: 'Delivered', total: 45.00, items: ['Zesty Quinoa Bowl', 'Grilled Lemon Herb Chicken'] },
        { id: 'FG-8210', date: 'Dec 10, 2025', status: 'Delivered', total: 22.50, items: ['Spicy Tofu Stir-fry'] },
    ];

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Order History</h1>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {orders.map(order => (
                    <div key={order.id} className="card" style={{ padding: '1.5rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div>
                                <strong style={{ fontSize: '1.1rem' }}>Order #{order.id}</strong>
                                <div style={{ color: 'var(--color-muted)', fontSize: '0.9rem' }}>{order.date}</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontWeight: 'bold', fontSize: '1.1rem' }}>${order.total.toFixed(2)}</div>
                                <span style={{
                                    display: 'inline-block',
                                    padding: '0.25rem 0.75rem',
                                    borderRadius: '12px',
                                    backgroundColor: '#e6fffa',
                                    color: '#00b894',
                                    fontSize: '0.8rem',
                                    fontWeight: '600',
                                    marginTop: '0.25rem'
                                }}>
                                    {order.status}
                                </span>
                            </div>
                        </div>
                        <div>
                            {order.items.map((item, idx) => (
                                <div key={idx} style={{ marginBottom: '0.5rem', color: 'var(--color-dark)' }}>• {item}</div>
                            ))}
                        </div>
                        <div style={{ marginTop: '1rem' }}>
                            <Link href="#" style={{ color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.9rem' }}>View Receipt</Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

'use client';

import { useCart } from '../context/CartContext';
import { useRef, useEffect } from 'react';
import Link from 'next/link';

export default function CartDrawer() {
    const { cart, isCartOpen, setIsCartOpen, removeFromCart } = useCart();
    const drawerRef = useRef(null);

    useEffect(() => {
        // Close on click outside could be implemented here
    }, []);

    if (!isCartOpen) return null;

    const total = cart.reduce((sum, item) => sum + (item.price || 15.00), 0); // Default price $15

    return (
        <div className="cart-drawer" style={{
            position: 'fixed',
            top: 0,
            right: 0,
            width: 'var(--drawer-width, 400px)',
            maxWidth: '100%',
            height: '100vh',
            backgroundColor: 'white',
            boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
            zIndex: 1000,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            transform: isCartOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease-in-out'
        }} ref={drawerRef}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Your Order</h2>
                <button onClick={() => setIsCartOpen(false)} style={{ background: 'none', border: 'none', fontSize: '1.5rem', cursor: 'pointer' }}>×</button>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                {cart.length === 0 ? (
                    <p style={{ color: 'var(--color-muted)' }}>Your cart is empty.</p>
                ) : (
                    cart.map((item, idx) => (
                        <div key={idx} style={{ marginBottom: '1.5rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <h4 style={{ fontWeight: '600' }}>{item.name}</h4>
                                <span>${(item.price || 15).toFixed(2)}</span>
                            </div>
                            <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)' }}>{item.customization || "Standard Recipe"}</p>
                            <button onClick={() => removeFromCart(item.id)} style={{ color: 'red', fontSize: '0.75rem', border: 'none', background: 'none', cursor: 'pointer', marginTop: '0.5rem' }}>Remove</button>
                        </div>
                    ))
                )}
            </div>

            <div style={{ paddingTop: '2rem', borderTop: '2px solid #eee' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', fontWeight: 'bold', fontSize: '1.25rem' }}>
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <Link
                    href="/checkout"
                    className="btn btn-primary"
                    style={{ width: '100%', borderRadius: 'var(--radius-md)' }}
                    onClick={() => setIsCartOpen(false)}
                >
                    Checkout ({cart.length})
                </Link>
            </div>
        </div>
    );
}

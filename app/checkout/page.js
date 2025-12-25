'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';
import Link from 'next/link';

export default function CheckoutPage() {
    const { cart, clearCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const total = cart.reduce((sum, item) => sum + (item.price || 15), 0);

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate API call to Square wrapper
            await fetch('/api/payment', {
                method: 'POST',
                body: JSON.stringify({ amount: total, items: cart })
            });

            // Simulate delay
            await new Promise(resolve => setTimeout(resolve, 2000));

            clearCart();
            setOrderComplete(true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    if (orderComplete) {
        return (
            <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
                <h1 style={{ color: 'green', fontSize: '3rem', marginBottom: '1rem' }}>Order Confirmed!</h1>
                <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Your personal chef is getting to work.</p>
                <Link href="/" className="btn btn-primary">Back Home</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ marginBottom: '2rem' }}>Checkout</h1>

            {cart.length === 0 ? (
                <div>Your cart is empty. <Link href="/discovery" style={{ color: 'var(--color-primary)' }}>Start an order</Link></div>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '1.5rem' }}>Shipping Information</h3>
                        <form id="checkout-form" onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input type="text" placeholder="Full Name" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                            <input type="text" placeholder="Address" required style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <input type="text" placeholder="City" required style={{ flex: 1, padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                                <input type="text" placeholder="Zip Code" required style={{ width: '100px', padding: '1rem', borderRadius: '8px', border: '1px solid #ccc' }} />
                            </div>
                        </form>

                        <h3 style={{ marginTop: '2rem', marginBottom: '1.5rem' }}>Payment</h3>
                        <div style={{ padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9', marginBottom: '1rem' }}>
                            Using <strong>Mock Payment Gateway</strong>
                        </div>
                    </div>

                    <div style={{ backgroundColor: 'white', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)', height: 'fit-content' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Order Summary</h3>
                        {cart.map((item, idx) => (
                            <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: 'var(--color-muted)' }}>
                                <span>{item.name}</span>
                                <span>${(item.price || 15).toFixed(2)}</span>
                            </div>
                        ))}
                        <div style={{ borderTop: '2px solid #eee', marginTop: '1rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.25rem' }}>
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>

                        <button
                            type="submit"
                            form="checkout-form"
                            disabled={loading}
                            className="btn btn-primary"
                            style={{ width: '100%', marginTop: '2rem', opacity: loading ? 0.7 : 1 }}
                        >
                            {loading ? 'Processing...' : 'Place Order'}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

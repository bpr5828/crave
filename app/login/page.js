'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate auth delay
        setTimeout(() => {
            router.push('/profile');
        }, 1000);
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-light)' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Welcome Back</h1>

                <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Email</label>
                        <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Password</label>
                        <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '1rem', width: '100%' }}>
                        {loading ? 'Logging in...' : 'Sign In'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                    Don't have an account? <Link href="/register" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Sign up</Link>
                </p>
            </div>
        </div>
    );
}

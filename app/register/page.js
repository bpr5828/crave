'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleRegister = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            router.push('/profile');
        }, 1000);
    };

    return (
        <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-light)' }}>
            <div className="card" style={{ width: '100%', maxWidth: '400px', padding: '2.5rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '0.5rem' }}>Create Account</h1>
                <p style={{ textAlign: 'center', color: 'var(--color-muted)', marginBottom: '1.5rem' }}>Join Crave today</p>

                <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Full Name</label>
                        <input type="text" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Email</label>
                        <input type="email" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: 'bold' }}>Password</label>
                        <input type="password" required style={{ width: '100%', padding: '0.75rem', borderRadius: '8px', border: '1px solid #ddd' }} />
                    </div>

                    <button type="submit" className="btn btn-primary" disabled={loading} style={{ marginTop: '1rem', width: '100%' }}>
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: 'var(--color-muted)' }}>
                    Already have an account? <Link href="/login" style={{ color: 'var(--color-primary)', fontWeight: 'bold' }}>Sign in</Link>
                </p>
            </div>
        </div>
    );
}

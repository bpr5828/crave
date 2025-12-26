'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
    const pathname = usePathname();

    // Simple active link helper
    const isActive = (path) => pathname === path ? { color: 'var(--color-primary)', fontWeight: 'bold' } : { color: 'var(--color-dark)' };

    return (
        <header style={{
            padding: '1.5rem',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: '1px solid #eee'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--color-primary)' }}>
                    Crave By 'N'
                </Link>

                <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                    <Link href="/discovery" style={{ ...isActive('/discovery') }}>Discovery</Link>
                    <Link href="/orders" style={{ ...isActive('/orders') }}>Orders</Link>
                    <Link href="/profile" style={{ ...isActive('/profile') }}>Profile</Link>

                    <div style={{ width: '1px', height: '20px', backgroundColor: '#ddd' }}></div>

                    <Link href="/login" style={{ ...isActive('/login') }}>Login</Link>
                    <Link href="/register" className="btn btn-primary" style={{ padding: '0.5rem 1.5rem', fontSize: '0.9rem' }}>
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}

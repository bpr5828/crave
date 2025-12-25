import Link from 'next/link';

export default function Home() {
    return (
        <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'linear-gradient(135deg, #FF6B6B 0%, #FF8E53 100%)', color: 'white' }}>
            <div className="container animate-fade-in">
                <h1 style={{ fontSize: '4rem', fontWeight: '800', marginBottom: '1rem', color: 'white' }}>
                    Crave
                </h1>
                <p style={{ fontSize: '1.5rem', marginBottom: '3rem', opacity: '0.9', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Your personal AI chef. Tailored recipes, nutritional precision, and seamless ordering.
                </p>

                <Link href="/discovery" className="btn" style={{
                    backgroundColor: 'white',
                    color: '#FF6B6B',
                    padding: '1rem 3rem',
                    fontSize: '1.25rem',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.15)'
                }}>
                    Start Your Taste Journey
                </Link>

                <div style={{ marginTop: '4rem', display: 'flex', gap: '2rem', justifyContent: 'center', opacity: '0.8' }}>
                    <div>
                        <strong>Smart</strong><br />AI-Powered
                    </div>
                    <div>
                        <strong>Healthy</strong><br />Macro-Balanced
                    </div>
                    <div>
                        <strong>Fast</strong><br />Easy Ordering
                    </div>
                </div>
            </div>
        </main>
    );
}

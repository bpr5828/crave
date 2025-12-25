export default function Footer() {
    return (
        <footer style={{ backgroundColor: 'var(--color-dark)', color: 'white', padding: '1rem 0', marginTop: 'auto', fontSize: '0.8rem' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h3 style={{ color: 'white', margin: 0, fontSize: '1rem' }}>Crave</h3>
                    <span style={{ opacity: 0.5 }}>|</span>
                    <p style={{ opacity: 0.7, margin: 0 }}>Your personal AI chef.</p>
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="/discovery" style={{ opacity: 0.7 }}>Discovery</a>
                    <a href="/orders" style={{ opacity: 0.7 }}>Orders</a>
                    <a href="/about" style={{ opacity: 0.7 }}>About</a>
                    <a href="/privacy" style={{ opacity: 0.7 }}>Privacy</a>
                </div>
            </div>
            <div className="container" style={{ marginTop: '0.5rem', paddingTop: '0.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', textAlign: 'center', opacity: 0.4, fontSize: '0.7rem' }}>
                © {new Date().getFullYear()} Crave.
            </div>
        </footer>
    );
}

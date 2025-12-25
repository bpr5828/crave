export default function ProfilePage() {
    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                <h1 style={{ marginBottom: '2rem' }}>My Profile</h1>

                <div className="card" style={{ marginBottom: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '2rem', fontWeight: 'bold' }}>
                            N
                        </div>
                        <div>
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>N Robop</h2>
                            <p style={{ color: 'var(--color-muted)' }}>nrobop@example.com</p>
                        </div>
                    </div>

                    <h3 style={{ marginBottom: '1rem' }}>Dietary Preferences</h3>
                    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                        <span style={{ padding: '0.5rem 1rem', background: '#f0f0f0', borderRadius: '20px' }}>Vegan</span>
                        <span style={{ padding: '0.5rem 1rem', background: '#f0f0f0', borderRadius: '20px' }}>Gluten-Free</span>
                        <span style={{ padding: '0.5rem 1rem', background: '#f0f0f0', borderRadius: '20px' }}>Low Carb</span>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginBottom: '1.5rem' }}>Account Settings</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <button className="btn btn-secondary" style={{ justifyContent: 'space-between' }}>
                            Change Password <span>→</span>
                        </button>
                        <button className="btn btn-secondary" style={{ justifyContent: 'space-between' }}>
                            Payment Methods <span>→</span>
                        </button>
                        <button className="btn btn-secondary" style={{ justifyContent: 'space-between', color: 'red', borderColor: 'red' }}>
                            Log Out <span>→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

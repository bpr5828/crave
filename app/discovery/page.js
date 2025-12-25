import ChatInterface from '../components/ChatInterface';

export default function DiscoveryPage() {
    return (
        <div style={{
            height: '100%',
            padding: '0.5rem 0',
            background: 'linear-gradient(to bottom, #f7f9fc 0%, #e2e6ea 100%)',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <div className="container" style={{ flex: 1, display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ marginBottom: '0.5rem', textAlign: 'center', flexShrink: 0 }}>
                    <h1 style={{ fontSize: '1.5rem', color: 'var(--color-dark)', margin: 0 }}>Tell Us What You Crave</h1>
                </div>
                <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' }}>
                    <ChatInterface />
                </div>
            </div>
        </div>
    );
}

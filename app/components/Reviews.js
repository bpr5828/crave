'use client';

export default function Reviews() {
    const reviews = [
        {
            id: 1,
            name: "Sarah Jenkins",
            role: "Fashion Blogger",
            content: "Crave By 'N' completely transformed my meal planning. It's chic, smart, and delicious!",
            rating: 5
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Tech Entrepreneur",
            content: "The AI suggestions are spot on. It feels like having a personal chef who knows my macros perfectly.",
            rating: 5
        },
        {
            id: 3,
            name: "Jessica Alva",
            role: "Fitness Instructor",
            content: "Finally, a food app that understands both style and substance. Highly recommend!",
            rating: 4
        }
    ];

    return (
        <section style={{ padding: '4rem 0', backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-primary)' }}>
                    What People Are Saying
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {reviews.map(review => (
                        <div key={review.id} style={{
                            backgroundColor: 'white',
                            padding: '2rem',
                            borderRadius: '1rem',
                            boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                            transition: 'transform 0.2s ease',
                            color: 'var(--color-dark)'
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{ color: '#FFD700', fontSize: '1.2rem', marginBottom: '1rem' }}>
                                {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                            </div>
                            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                                "{review.content}"
                            </p>
                            <div>
                                <strong style={{ display: 'block', fontSize: '1.1rem' }}>{review.name}</strong>
                                <span style={{ fontSize: '0.9rem', color: '#666' }}>{review.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

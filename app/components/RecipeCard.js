'use client';

import { useCart } from '../context/CartContext';
import { useState } from 'react';

export default function RecipeCard({ recipe }) {
    const { addToCart } = useCart();
    const [notes, setNotes] = useState('');
    const [isAdded, setIsAdded] = useState(false);

    const handleAdd = () => {
        addToCart({
            ...recipe,
            id: Date.now(),
            price: 15.00,
            customization: notes
        });
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
        setNotes('');
    };

    return (
        <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{
                height: '200px',
                backgroundColor: '#eee',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1rem',
                backgroundImage: `url(${recipe.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative'
            }}>
                {recipe.tags && (
                    <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '5px' }}>
                        {recipe.tags.map(tag => (
                            <span key={tag} style={{ backgroundColor: 'var(--color-white)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: '600' }}>{tag}</span>
                        ))}
                    </div>
                )}
            </div>
            <div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{recipe.name}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{recipe.description}</p>

                <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--color-dark)' }}>
                    <span><strong>P:</strong> {recipe.macros.protein}</span>
                    <span><strong>C:</strong> {recipe.macros.carbs}</span>
                    <span><strong>F:</strong> {recipe.macros.fats}</span>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                    <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Customize / Special Requests</label>
                    <textarea
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g., No onions, extra spicy, sauce on side..."
                        style={{ width: '100%', padding: '0.5rem', borderRadius: '8px', border: '1px solid #ddd', fontSize: '0.85rem', resize: 'vertical', minHeight: '60px' }}
                    />
                </div>
            </div>
            <div style={{ marginTop: 'auto' }}>
                <button
                    onClick={handleAdd}
                    className="btn btn-primary"
                    style={{ width: '100%', backgroundColor: isAdded ? 'var(--color-secondary)' : 'var(--color-primary)' }}
                >
                    {isAdded ? 'Added to Cart!' : 'Add to Order ($15.00)'}
                </button>
            </div>
        </div>
    );
}

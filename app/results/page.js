'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import RecipeCard from '../components/RecipeCard';

function ResultsContent() {
    const searchParams = useSearchParams();
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const data = searchParams.get('data');
        if (data) {
            try {
                setRecipes(JSON.parse(data));
            } catch (e) {
                console.error("Failed to parse recipe data");
            }
        }
    }, [searchParams]);

    return (
        <div style={{ minHeight: '100vh', padding: '4rem 0', background: 'var(--color-light)' }}>
            <div className="container">
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>Your Curated Menu</h1>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {recipes.map((recipe, idx) => (
                        <RecipeCard key={idx} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function ResultsPage() {
    return (
        <Suspense fallback={<div style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>}>
            <ResultsContent />
        </Suspense>
    );
}

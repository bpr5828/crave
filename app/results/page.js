'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

export default function ResultsPage() {
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

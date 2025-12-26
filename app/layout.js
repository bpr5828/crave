import '../styles/globals.css';
import { CartProvider } from './context/CartContext';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';
import Footer from './components/Footer';
import Head from 'next/head';

export const metadata = {
    title: "Crave By 'N' - Where Fashion meets Taste",
    description: 'Personalized recipe suggestions powered by AI',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            </head>
            <body>
                <CartProvider>
                    <div className="app-container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
                        <Header />
                        <div style={{ flex: 1, overflowY: 'auto', position: 'relative' }}>
                            {children}
                        </div>
                        <Footer />
                        <CartDrawer />
                    </div>
                </CartProvider>
            </body>
        </html>
    );
}

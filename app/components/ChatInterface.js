'use client';

import { useState, useEffect, useRef } from 'react';

export default function ChatInterface() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: "Hello! I'm Crave. I'm here to find your perfect meal. Let's start with a simple question: What kind of cuisine are you craving today?" }
    ]);
    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, loading]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userMessage = { role: 'user', content: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setLoading(true);

        try {
            const response = await fetch('/api/llm', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input, history: messages })
            });
            const data = await response.json();

            const assistantMessage = { role: 'assistant', content: data.message };
            setMessages(prev => [...prev, assistantMessage]);

            if (data.isComplete) {
                setIsComplete(true);
                window.location.href = `/results?data=${encodeURIComponent(JSON.stringify(data.recommendations))}`;
            }

        } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [...prev, { role: 'assistant', content: "I'm having a bit of trouble connecting to my brain. Could you try that again?" }]);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="chat-interface card" style={{
            maxWidth: '800px',
            margin: '0 auto',
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            padding: 0,
            borderRadius: 'var(--radius-lg)'
        }}>
            <div style={{ padding: '0.75rem 1rem', borderBottom: '1px solid #eee', backgroundColor: '#fafafa', flexShrink: 0 }}>
                <h3 style={{ margin: 0, fontSize: '1rem' }}>Chef's Assistant</h3>
            </div>

            <div className="messages-area" style={{
                flex: 1,
                padding: '1rem',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                backgroundColor: 'white'
            }}>
                {messages.map((msg, idx) => (
                    <div key={idx} style={{
                        display: 'flex',
                        justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
                        width: '100%'
                    }}>
                        <div style={{
                            maxWidth: '85%',
                            padding: '0.75rem 1rem',
                            borderRadius: '1rem',
                            backgroundColor: msg.role === 'user' ? 'var(--color-primary)' : '#f0f4f8',
                            color: msg.role === 'user' ? 'white' : 'var(--color-dark)',
                            borderBottomRightRadius: msg.role === 'user' ? '4px' : '1rem',
                            borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '1rem',
                            boxShadow: 'var(--shadow-sm)',
                            lineHeight: '1.4',
                            fontSize: '0.95rem'
                        }}>
                            {msg.content}
                        </div>
                    </div>
                ))}

                {loading && (
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ padding: '0.75rem 1rem', backgroundColor: '#f0f4f8', borderRadius: '1rem', borderBottomLeftRadius: '4px', color: 'var(--color-muted)', fontSize: '0.9rem' }}>
                            <span className="dot-pulse">Thinking...</span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSubmit} style={{
                padding: '0.75rem',
                backgroundColor: 'white',
                borderTop: '1px solid #eee',
                display: 'flex',
                gap: '0.5rem',
                position: 'relative',
                zIndex: 10,
                flexShrink: 0
            }}>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your answer here..."
                    disabled={loading || isComplete}
                    autoFocus
                    style={{
                        flex: 1,
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        border: '2px solid #e2e8f0',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'all 0.2s'
                    }}
                    className="focus:border-primary"
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                />
                <button
                    type="submit"
                    disabled={loading || isComplete || !input.trim()}
                    className="btn btn-primary"
                    style={{
                        width: '3rem',
                        height: '3rem',
                        padding: 0,
                        borderRadius: '50%',
                        fontSize: '1.2rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    ↑
                </button>
            </form>
        </div>
    );
}

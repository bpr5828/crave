import { NextResponse } from 'next/server';

export async function POST(request) {
    // Simulate payment processing
    // In a real app, this would use the Square Node.js SDK

    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({
        success: true,
        transactionId: "mock_txn_" + Date.now()
    });
}

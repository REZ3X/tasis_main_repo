import { NextResponse } from 'next/server';
import { pool, ensureConnection } from '../db/db';
import mysql from 'mysql2/promise';

/**
 * GET endpoint to fetch approved public notes
 * @returns {Promise<NextResponse>} JSON response containing notes or error message
 */
export async function GET() {
    try {
        const isConnected = await ensureConnection();
        if (!isConnected) {
            return NextResponse.json(
                { success: false, error: 'Database connection failed' },
                { status: 503 }
            );
        }

        const [notes] = await pool.query<mysql.RowDataPacket[]>(
            `SELECT * FROM public_notes 
             WHERE is_approved = TRUE 
             ORDER BY created_at DESC`
        );

        return NextResponse.json({ 
            success: true, 
            notes 
        });
    } catch (error) {
        console.error('Error fetching notes:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to fetch notes' },
            { status: 500 }
        );
    }
}
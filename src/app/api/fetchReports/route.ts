import { NextResponse } from 'next/server';
import { pool, ensureConnection } from '../db/db';
import { RowDataPacket } from 'mysql2';

/**
 * GET endpoint to fetch the total count of reports from the database.
 * @returns {Promise<NextResponse>} JSON response with total count or error message
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

        interface CountResult extends RowDataPacket {
            total: number;
        }
        const [result] = await pool.query<CountResult[]>('SELECT COUNT(*) as total FROM reports');
        const total = result[0].total;

        return NextResponse.json({ 
            success: true, 
            total 
        });
    } catch (error) {
        console.error('Error fetching total reports:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Failed to fetch total reports' 
            },
            { status: 500 }
        );
    }
}
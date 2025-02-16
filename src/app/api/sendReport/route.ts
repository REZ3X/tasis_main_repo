import { NextResponse } from 'next/server';
import { pool, ensureConnection } from '../db/db';
import ImageKit from 'imagekit';
import mysql from 'mysql2/promise';

const imagekit = new ImageKit({
    publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY!,
    urlEndpoint: process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!,
});

/**
 * Handles POST requests to submit incident reports.
 * Processes form data including title, datetime, details, and evidence files.
 * Uploads any attached evidence to ImageKit and stores report data in MySQL database.
 * 
 * @param request - The incoming request containing form data
 * @returns JSON response with success status and either insertId or error details
 */
export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const title = formData.get('title') as string;
        const incidentDatetime = formData.get('incidentDatetime') as string;
        const details = formData.get('details') as string;
        const evidence = formData.get('evidence') as File;

        const isConnected = await ensureConnection();
        if (!isConnected) {
            return NextResponse.json(
                { success: false, error: 'Database connection failed' },
                { status: 503 }
            );
        }
        let evidenceUrl = '';
        if (evidence) {
            try {
                const buffer = Buffer.from(await evidence.arrayBuffer());
                const upload = await imagekit.upload({
                    file: buffer,
                    fileName: evidence.name,
                    folder: '/report_tasis',
                });
                evidenceUrl = upload.url;
            } catch (uploadError) {
                console.error('Error uploading image:', uploadError);
                return NextResponse.json(
                    { success: false, error: 'Failed to upload image' },
                    { status: 500 }
                );
            }
        }

        try {
            const [result] = await pool.query<mysql.ResultSetHeader>(
                `INSERT INTO reports (title, incident_datetime, submitted_datetime, details, evidence_url)
                 VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?)`,
                [title, incidentDatetime, details, evidenceUrl]
            );
        
            return NextResponse.json({ 
                success: true, 
                data: result.insertId 
            });
        } catch (dbError: unknown) {
            console.error('Database error:', dbError);
            return NextResponse.json(
                { 
                    success: false, 
                    error: 'Database operation failed',
                    details: dbError instanceof Error ? dbError.message : 'Unknown database error'
                },
                { status: 500 }
            );
        }

    } catch (error: unknown) {
        console.error('Error submitting report:', error);
        return NextResponse.json(
            { 
                success: false, 
                error: 'Failed to submit report',
                details: error instanceof Error ? error.message : 'Unknown error'
            },
            { status: 500 }
        );
    }
}
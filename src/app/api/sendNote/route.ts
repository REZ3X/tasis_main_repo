import { NextResponse } from 'next/server';
import { pool, ensureConnection } from '../db/db';
import mysql from 'mysql2/promise';
import { containsBannedWords, filterBadWords } from '@/utils/wordFilter';

export async function POST(request: Request) {
    try {
        const { content, author } = await request.json();

        const isConnected = await ensureConnection();
        if (!isConnected) {
            return NextResponse.json(
                { success: false, error: 'Database connection failed' },
                { status: 503 }
            );
        }

        if (containsBannedWords(content) || containsBannedWords(author)) {
            return NextResponse.json(
                { success: false, error: 'Konten tidak diperbolehkan' },
                { status: 400 }
            );
        }

        const filteredContent = filterBadWords(content);
        const filteredAuthor = filterBadWords(author);

        const [result] = await pool.query<mysql.ResultSetHeader>(
            `INSERT INTO public_notes (content, author, is_approved) 
             VALUES (?, ?, TRUE)`,
            [filteredContent, filteredAuthor]
        );

        return NextResponse.json({ 
            success: true, 
            data: result.insertId 
        });
    } catch (error) {
        console.error('Error submitting note:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to submit note' },
            { status: 500 }
        );
    }
}
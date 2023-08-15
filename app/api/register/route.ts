import bcrypt from 'bcrypt';

import prisma from '@/app/helpers/prismadb';
import { NextResponse } from 'next/server';

export async function POST(
    request: Request
) {
    try {
        const body = await request.json();
        const {
            email,
            name,
            password
        } = body;

        if (!email || !name || !password) {
            return new NextResponse('Missing fields', { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await prisma.user.create({
            data: {
                name,
                email,
                hashedPassword,

            }
        });

        return new NextResponse(JSON.stringify(user), { status: 201 });
    } catch (error: any) {
        if (error.code === 'P2002') {
            return new NextResponse('Email already exists', { status: 400 });
        }
        return new NextResponse(error.message, { status: 500 });
    };
}
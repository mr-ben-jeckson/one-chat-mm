import { PrismaClient } from '@prisma/client';

declare global {
    var prisma: PrismaClient | undefined;
}

const cleint = new PrismaClient();

if(process.env.NODE_ENV === "development") globalThis.prisma = cleint;

export default cleint;
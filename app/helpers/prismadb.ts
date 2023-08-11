import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

const cleint = globalThis.prisma || new PrismaClient();

if(process.env.NODE_ENV === "development") globalThis.prisma = prisma;

export default cleint;
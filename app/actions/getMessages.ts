import prisma from "@/app/helpers/prismadb";

const getMessages = async (conversationId: string) => {
    try {
        const messages = await prisma.message.findMany({
            where: {
                conversationId: conversationId
            },
            include: {
                sender: true,
                seen: true,
            },
            orderBy: {
                createAt: 'asc'
            }
        });

        return messages;

    } catch (error: any) {
        return [];
    }
};

export default getMessages;
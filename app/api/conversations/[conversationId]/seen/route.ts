import prisma from '@/app/helpers/prismadb';
import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";

interface IPramas {
    conversationId: string;
}

export async function POST(
    request: Request,
    { params } : { params: IPramas}
) {
    try {
        const currentUser = await getCurrentUser();
        const { conversationId } = params;

        if(!currentUser?.email || !currentUser?.id) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        const conversation = await prisma.conversation.findUnique({
            where: {
                id: conversationId
            },
            include: {
                messages: {
                    include: {
                        seen: true
                    }
                },
                users: true
            }
        });

        if(!conversation) {
            return new NextResponse('Not Found', { status: 404 });
        }

        const lastMessage = conversation.messages[conversation.messages.length - 1];

        if(!lastMessage) {
            return NextResponse.json(conversation, { status: 200 });
        }

        const updatedMessage = await prisma.message.update({
            where: {
                id: lastMessage.id
            },
            include: {
                sender: true,
                seen: true
            },
            data: {
                seen: {
                    connect: {
                        id: currentUser.id
                    }
                }
            }
        })

        return NextResponse.json(updatedMessage, { status: 200 });

    } catch (error: any) {
        console.log(error, 'ERROR MESSAGE SEEN');
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
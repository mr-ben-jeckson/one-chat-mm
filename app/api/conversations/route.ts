import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/helpers/prismadb";

export async function POST(
    request: Request
) {
    try {
        const currnetUser = await getCurrentUser();
        const body = await request.json();
        const {
            userId,
            isGroup,
            members,
            name,
        } = body;

        if(!currnetUser?.id ||!currnetUser?.email) {
            return new NextResponse('Unauthorized', { status: 401 });
        }

        if(isGroup && !members || members.length < 2 || !name) {
            return new NextResponse('Bad Request', { status: 400 });
        }

        if(isGroup) {
            const newConversation = await prisma.conversation.create({
                data: {
                    name,
                    isGroup,
                    users: {
                        connect: [
                            ...members.map((member: { value: string }) => ({
                                id: member.value
                            })),
                            {
                                id: currnetUser.id
                            }
                        ]
                    }
                },
                include: {
                    users: true,
                }
            });

            return NextResponse.json(newConversation, { status: 201 });
        }

        const existingConversations = await prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        userIds: {
                            equals: [currnetUser.id, userId]
                        }
                    },
                    {
                        userIds: {
                            equals: [userId, currnetUser.id]
                        }
                    }
                ]
            }
        });

        const singleConversation = existingConversations[0];

        if(singleConversation) {
            return NextResponse.json(singleConversation, { status: 200 });
        }

        const newConversation = await prisma.conversation.create({
            data: {
                users: {
                    connect: [
                        {
                            id: currnetUser.id,
                        },
                        {
                            id: userId,
                        }
                    ]
                }
            },
            include: {
                users: true,
            }
        });

        return NextResponse.json(newConversation, { status: 201 });

    } catch (error: any) {
        return new NextResponse('Internal Server Error', { status: 500 });
    }
}
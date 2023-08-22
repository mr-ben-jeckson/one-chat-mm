'use client';

import useOtherUser from "@/app/hooks/useOtherUser";
import { Conversation, User } from "@prisma/client";
import Link from "next/link";
import { useMemo } from "react";
import { HiChevronLeft } from "react-icons/hi";

interface ConversationHeaderProps {
    conversation: Conversation & {
        users: User[]
    };
}
const ConversationHeader: React.FC<ConversationHeaderProps> = ({
    conversation
}) => {
    const otherUser = useOtherUser(conversation);

    const statusText = useMemo(() => {
        if(conversation.isGroup) {
            return `${conversation.users.length} members`
        }

        return 'Active'
    }, [conversation])
    return (
        <div
            className="
                bg-white
                w-full
                flex
                border-b-[1px]
                sm:px-4
                py-3
                px-4
                lg:px-6
                justyify-between
                items-center
                shadow-sm
            "
        >
            <div
                className="
                    flex
                    gap-3
                    items-center
                "
            >
                <Link
                    className="
                        lg:hidden
                        block
                        text-red-500
                        hover:text-red-600
                        transition
                        cursor-pointer
                    " 
                    href="/conversations"
                >
                    <HiChevronLeft size={32} />
                </Link>
            </div>
        </div>
    )
}

export default ConversationHeader;

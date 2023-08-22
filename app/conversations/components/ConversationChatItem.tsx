'use client'

import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Conversation, Message, User } from "@prisma/client";
import { format } from "date-fns";
import { useSession } from "next-auth/react";
import { clsx } from "clsx";

import { FullConversationType } from "@/app/types";

interface ConversationChatItemProps {
    data: FullConversationType,
    selected?: boolean,
}

const ConversationChatItem: React.FC<ConversationChatItemProps> = ({
    data,
    selected
}) => {
  return (
    <div>
      
    </div>
  )
}

export default ConversationChatItem

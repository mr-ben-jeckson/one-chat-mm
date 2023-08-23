'use client'
import useConversation from "@/app/hooks/useConversation";
import { FullConversationType } from "@/app/types";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MdOutlineGroupAdd } from "react-icons/md";
import ConversationChatItem from "./ConversationChatItem";

interface ConversationListProps {
  initialItems: FullConversationType[];
}

const ConversationList: React.FC<ConversationListProps> = ({
  initialItems
}) => {
  const [items, setItems] = useState(initialItems);

  const router = useRouter();
  const { conversationId, isOpen } = useConversation();
  return (
    <aside
      className={clsx(
        `
            fixed
            inset-y-0
            pb-20
            lg:pb-0
            lg:left-20
            lg:w-80
            lg:block
            overflow-y-auto
            border-r
            border-gray-200
          `,
         isOpen ? 'block w-full left-0' : 'hidden'
      )}
    >
      <div className="px-5">
        <div className="mb-4 pt-4 flex justify-between">
          <div
            className="
            text-2xl
            font-bold
            text-neutral-800
            "
          >
            Messages
          </div>
          <div
            className="
              rounded-full
              p-2
              bg-gray-100
              text-gray-600
              cursor-pointer
              hover:opacity-75
              transition
            "
          >
            <MdOutlineGroupAdd size={20} />
          </div>
        </div>
        {items.map((item) => (
          <ConversationChatItem
            key={item.id}
            data={item}
            selected={item.id === conversationId}
          />
        ))}
      </div>
    </aside>
  );
}

export default ConversationList;
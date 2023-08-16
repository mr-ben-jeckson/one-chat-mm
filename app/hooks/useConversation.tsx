import { useParams } from "next/navigation";
import { useMemo } from "react";

const useConversation = () => {
    const params = useParams();
    const conversationId = useMemo(() => {
        if(!params?.converstationId) {
            return '';
        }
        return params.converstationId as string;
    }, [params?.converstationId]);
    const isOpen = useMemo(() => !!conversationId, [conversationId]);
    
    return useMemo(() => ({
        isOpen,
        conversationId
    }), [isOpen, conversationId]);
}

export default useConversation;

import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import EmptyState from "@/app/components/EmptyState";

import ConversationHeader from "./components/ConversationHeader";
import MessageBody from "./components/MessageBody";
import MessageForm from "./components/MessageForm";

interface IParams {
    conversationId: string;
}

const ConversationId = async({params} : {params: IParams}) => {
    const conversation = await getConversationById(params.conversationId);
    const messages = await getMessages(params.conversationId);

    if(!conversation) {
        return (
            <div className="
                lg:pl-80 
                h-full 
            ">
                <div className="h-full flex flex-col ">
                    <EmptyState />
                </div>
            </div>
        );
    }

    return (
        <div
            className="
                lg:pl-80 
                h-full
            "
        >
            <div 
                className="
                    h-full
                    flex flex-col
                "
            >
                <ConversationHeader conversation={conversation}/>
                <MessageBody/>
                <MessageForm />
            </div>
        </div>
    )
};

export default ConversationId;
'use client';

import useConversation from "@/app/hooks/useConversation";
import axios from "axios";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { HiPaperAirplane, HiPhoto } from "react-icons/hi2";
import MessageInput from "./MessageInput";
import { CldUploadButton, CldUploadWidget } from "next-cloudinary";

const MessageForm = () => {
    const { conversationId } = useConversation();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            message: ""
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setValue("message", "", { shouldValidate: true });
        axios.post(`/api/messages`, {
            ...data,
            conversationId: conversationId
        });
    };

    const handleUpload = (result: any) => {
        axios.post(`/api/messages`, {
            image: result?.info?.secure_url,
            conversationId: conversationId
        })
    };

    return (
        <div
            className="
                py-4
                px-4
                bg-white
                border-t
                flex
                items-center
                gap-2
                lg:gap-4
                w-full
            "
        >
            <CldUploadButton
                options={{ maxFiles: 1 }}
                onUpload={handleUpload}
                uploadPreset="onechatmm"
            >
                <HiPhoto size={30} className="text-red-500 hover:text-red-600 cursor-pointer transition" />
            </CldUploadButton>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center gap-2 lg:gap-4 w-full"
            >
                <MessageInput
                    id="message"
                    register={register}
                    errors={errors}
                    required
                    placeholder="Type a message"
                />
                <button
                    type="submit"
                    className="
                        rounded-full
                        bg-red-500
                        hover:bg-red-600
                        transition
                        p-2
                        cursor-pointer
                    "
                >
                    <HiPaperAirplane size={18} className="text-white" />
                </button>
            </form>
        </div>
    )
}

export default MessageForm

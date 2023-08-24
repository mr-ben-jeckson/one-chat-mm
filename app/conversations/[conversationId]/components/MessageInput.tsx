'use client';

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
    id: string,
    required?: boolean,
    type?: string,
    placeholder?: string,
    register: UseFormRegister<FieldValues>,
    errors: FieldErrors,
}

const MessageInput: React.FC<MessageInputProps> = ({
    id,
    required,
    type,
    placeholder,
    register,
    errors
}) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        autoComplete="off"
        { ...register(id, { required })}
        className="
            text-black
            font-light
            py-2
            px-4
            bg-neutral-100
            w-full
            rounded-full
            focus:outline-none
        "
      />
    </div>
  )
}

export default MessageInput;

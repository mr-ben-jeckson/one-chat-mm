'use client'

import { User } from "@prisma/client";
import UserListItem from "./UserListItem";

interface UserListProps {
    items: User[]
}
const UserList: React.FC<UserListProps> = ({
    items
}) => {
  return (
    <aside
        className="
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
            block
            w-full
            left-0
        "
    >
        <div className="px-5">
            <div className="flex-col">
                <div
                    className="
                        text-2xl
                        font-bold
                        text-netural-800
                        py-4
                    "
                >
                    Users
                </div>
            </div>
            {items.map((item) => (
                <UserListItem 
                    key={item.id}
                    data={item}
                />
            ))}
        </div>
    </aside>
  )
}

export default UserList;

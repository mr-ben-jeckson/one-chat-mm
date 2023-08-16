'use client'

import useConversation from "@/app/hooks/useConversation";
import useRoutes from "@/app/hooks/useRoutes";
import MobileItem from "./MobileItem";

const MobileMenu = () => {
    const routes = useRoutes();
    const { isOpen } = useConversation();

    if(isOpen) {
        return null;
    }

    return (
        <div className="
            fixed
            justify-between
            w-full
            z-40
            bottom-0
            items-center
            flex
            bg-white
            border-t-[1px]
            lg:hidden
        "
        >
            {routes.map((item) => (
                <MobileItem
                    key={item.href}
                    href={item.href}
                    icon={item.icon}
                    onClick={item.onClick}
                    active={item.active}
                />
            ))}
        </div>
    )
}

export default MobileMenu;
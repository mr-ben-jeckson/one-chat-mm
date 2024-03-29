import LargeScreenSidebar from "./LargeScreenSidebar";
import MobileMenu from "./MobileMenu";

import getCurrentUser from "@/app/actions/getCurrentUser";

async function Sidebar({ children }: {
    children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();
    return (
        <div className="h-full">
            <LargeScreenSidebar currentUser={currentUser!}/>
            <MobileMenu />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
};

export default Sidebar;
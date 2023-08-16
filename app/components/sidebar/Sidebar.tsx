import LargeScreenSidebar from "./LargeScreenSidebar";
import MobileMenu from "./MobileMenu";

async function Sidebar({ children }: {
    children: React.ReactNode
}) {
    return (
        <div className="h-full">
            <LargeScreenSidebar />
            <MobileMenu />
            <main className="lg:pl-20 h-full">
                {children}
            </main>
        </div>
    )
};

export default Sidebar;
import { SideMenu } from "@/modules/shared";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dashboard">
            {/* SIDEMENU */}
            <SideMenu/>

            {/* PAGINAS */}
            <main className="w-full">
                { children }
            </main>
        </div>
    );
}
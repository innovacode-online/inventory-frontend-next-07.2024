import { checkToken } from "@/modules/auth/actions/check-token";
import { SideMenu } from "@/modules/shared";
import { redirect } from "next/navigation";

export default async function AdminLayout({ children }: { children: React.ReactNode }) {

    const validate = await checkToken()    
    console.log(validate)
    
    if( !validate ){
        redirect('/auth/login')
    }

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
import { checkToken } from "@/modules/auth/actions/check-token";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {


    const validate = await checkToken()    

    if( validate ){
        redirect('/admin/categories')
    }


    return (
        <>
            <section className="auth__layout">
                { children }
            </section>

        </>
    );
}
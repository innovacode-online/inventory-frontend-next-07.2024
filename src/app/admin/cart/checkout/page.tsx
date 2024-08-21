import { HeaderPage } from "@/modules/shared";
import { CartList, CheckoutForm } from "@/modules/cart";
import { cookies } from "next/headers";
import { IUser } from "@/modules/auth";

export default function CheckoutPage() {

    const userCookies = cookies().get("INV_NEXT_USER")?.value;

    const user = JSON.parse( userCookies! ) as IUser;

    return (
        <>
            <HeaderPage
                title="Finalizar venta"
                description="Genera una nueva venta en el sistema"
                btnTitle="Carrito"
                pathname="/admin/cart"
            />

            <section className="checkout">
                <CartList/>
                <CheckoutForm
                    user={ user }
                />
            </section>


        </>
    );
}
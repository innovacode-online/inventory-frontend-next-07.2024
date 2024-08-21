import { HeaderPage } from "@/modules/shared";
import { CartProductList } from "@/modules/cart";

export default function CartPage() {
    return (
        <>
            <HeaderPage
                title="Carrito"
                description="Agrega productos al carrito de compras"
                btnTitle="Finalizar venta"
                pathname="/admin/cart/checkout"
            />

            <CartProductList/>
        </>
    );
}
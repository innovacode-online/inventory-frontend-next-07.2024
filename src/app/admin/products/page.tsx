import { ProductTable } from "@/modules/products";
import { getProducts } from "@/modules/products/actions/get-products";
import { HeaderPage } from "@/modules/shared";

export default async function ProductsPage() {

    const { data } = await getProducts();

    return (
        <>
            <HeaderPage
                title="Productos"
                description="Gestiona los productos del inventario"
                btnTitle="Agregar producto"
                pathname="/admin/products/new"
            />

            <ProductTable  products={ data!.products }/>
        </>
    );
}
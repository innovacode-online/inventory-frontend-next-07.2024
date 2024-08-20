import { getCategories } from "@/modules/categories";
import { NewProductForm } from "@/modules/products";
import { HeaderPage } from "@/modules/shared";

export default async function NewProductPage() {

  const { categories } = await getCategories();

  return (
    <>
      <HeaderPage
        title="Agregar producto"
        description="Guarda un nuevo producto en el inventario"
        btnTitle="Volver"
        pathname="/admin/products"
      />
      <NewProductForm
        categories={ categories }
      />
    </>
  );
}

import { HeaderPage } from "@/modules/shared";
import { CategoryTable, getCategories } from "@/modules/categories";




export default async function CategoriesPage() {

    const categories = await getCategories();

    return (
        <>
            <HeaderPage
                btnTitle="Agregar Categoria"
                description="Gestiona las categorias de los productos"
                pathname="/admin/categories/new"
                title="Categorias"
            />

            <CategoryTable
                categories={ categories }
            />
        </>
    );
}
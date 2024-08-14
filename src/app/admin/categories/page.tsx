import { HeaderPage } from "@/modules/shared";
import { CategoryTable, getCategories } from "@/modules/categories";



interface Params {
    searchParams: {
       page: string | undefined
    }
}

export default async function CategoriesPage({ searchParams }: Params) {


    const { categories, meta } = await getCategories(searchParams.page);


    return (
        <>
            <HeaderPage
                btnTitle="Agregar Categoria"
                description="Gestiona las categorias de los productos"
                pathname="/admin/categories/new"
                title="Categorias"
            />

            <CategoryTable
                meta={ meta }
                categories={ categories }
            />
        </>
    );
}
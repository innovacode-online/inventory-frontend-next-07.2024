import { Metadata } from "next";

import { HeaderPage } from "@/modules/shared";
import { NewCategoryForm } from "@/modules/categories";

export default function NewCategoryPage() {
    return (
        <>
            <HeaderPage
                btnTitle="Volver"
                description="Guarda una nueva categoria para tus productos"
                pathname="/admin/categories"
                title="Agrega categorias"
            />

            <NewCategoryForm/>
        </>
    );
}

export const metadata: Metadata = {
    title: "Nueva Categoria - Next Inventory"
}
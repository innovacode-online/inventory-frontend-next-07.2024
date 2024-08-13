"use server"

import inventoryDb from "@/db/inventoryDb";
import { ICategoriesResponse } from "@/modules/categories";


export const getCategories = async () => {
    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>("/categories");
        return data.categories
        
    } catch (error: any) {
        console.log(error);
        throw Error( error.response.data.message ?? "Error en el servidor")
    }
}

"use server"

import inventoryDb from "@/db/inventoryDb";
import { ICategoriesResponse } from "@/modules/categories";
import { revalidatePath } from "next/cache";


export const getCategories = async (page: number | string = 1) => {
    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>(`/categories`, {
            params: {
                page
            }
        });

        return data
        
    } catch (error: any) {
        console.log(error);
        throw Error( error.response.data.message ?? "Error en el servidor")
    }
}

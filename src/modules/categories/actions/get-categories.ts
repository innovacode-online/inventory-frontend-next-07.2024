"use server"

import inventoryDb from "@/db/inventoryDb";
import { ICategoriesResponse } from "@/modules/categories";
import { cookies } from "next/headers";


export const getCategories = async (page: number | string = 1) => {
    
    const token = cookies().get("INV_NEXT_TOKEN");

    try {
        const { data } = await inventoryDb.get<ICategoriesResponse>(`/categories`, {
            params: {
                page
            },
            headers: {
                Authorization: "Bearer " + token?.value
            }
        });

        return data
        
    } catch (error: any) {
        console.log(error);
        throw Error( error.response.data.message ?? "Error en el servidor")
    }
}

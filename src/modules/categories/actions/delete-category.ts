"use server"

import inventoryDb from "@/db/inventoryDb"
import { isAxiosError } from "axios";
import { revalidatePath } from "next/cache";


export const deleteCategory = async ( id: string | number ) => {
    try {
        const { data } = await inventoryDb.delete<{ message: string }>(`/categories/${ id }`);

        revalidatePath("/admin/categories");
        return {
            error: null,
            data
        }


    } catch (error) {
        console.log(error);

        if( isAxiosError(error) ){
            return {
                data: null,
                error: error.response?.data.message,
            }
        }

        throw new Error("Error en el servidor")
    }
}
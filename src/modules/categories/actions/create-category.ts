"use server"

import inventoryDb from "@/db/inventoryDb"
import { ICreateCategoryResponse } from "@/modules/categories";
import { isAxiosError } from "axios";


export const createCategory = async (name: string, description: string) => {

    try {

        const { data } = await inventoryDb.post<ICreateCategoryResponse>("/categories", { name, description });
        return {
            error: null,
            data,
        }; 


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
"use server"

import inventoryDb from "@/db/inventoryDb"
import { ICategory } from "../interfaces/category";
import { isAxiosError } from "axios";

export const updateCategory = async (id: number, name: string, description: string) => {

    try {

        const { data } = await inventoryDb.patch<{ message: string, category: ICategory }>(`/categories/${ id }`, { name, description });
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
"use server"

import inventoryDb from "@/db/inventoryDb";
import { isAxiosError } from "axios";
import { cookies } from "next/headers"
import { IProductsResponse } from "../interfaces/products-response";



export const getProducts = async () => {
    try {

        const token = cookies().get('INV_NEXT_TOKEN')?.value;

        const { data } = await inventoryDb.get<IProductsResponse>('/products', {
            headers: {
                Authorization: "Bearer " + token
            }
        })

        return {
            data,
            error: null
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
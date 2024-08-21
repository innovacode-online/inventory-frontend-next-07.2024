"use server"

import inventoryDb from "@/db/inventoryDb";
import { ICart } from "@/modules/cart/interfaces/cart";
import { isAxiosError } from "axios";
import { cookies } from "next/headers";


export const createSale = async (formData: FormData) => {
    const token = cookies().get("INV_NEXT_TOKEN")?.value;
    const cart = JSON.parse( formData.get("cart") as any ) as ICart[];

    const details = cart.map(item => {
        return {
            product_id: item.id,
            productName: item.name,
            productSlug: item.slug,
            productPrice: item.price,
            quantity: item.quantity,
            subTotal: +item.quantity * +item.price, 
        }
    })

    const sale = {
        clientName: formData.get("clientName"),
        userName: formData.get("userName"),
        userEmail: formData.get("userEmail"),
        user_id: formData.get("user_id"),
        total: formData.get("total"),
        details
    }

    try {
        const { data } = await inventoryDb.post<{ message: string }>("/sales", sale, {
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
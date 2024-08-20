"use server"

import inventoryDb from "@/db/inventoryDb";
import { isAxiosError } from "axios";
import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";


interface CreateProduct {
    name: string;
    description: string;
    stock: number;
    price: number;
    category_id: string | number;
    image: string,
}

export const createProduct = async ( formData: FormData ) => {
    const token = cookies().get("INV_NEXT_TOKEN")?.value;

    try {
        const imageUrl = await uploadImage( formData.get('image') as File );

        if( !imageUrl ) {
            throw new Error("No se pudo subir la imagen");
        }

        const product: CreateProduct = {
            category_id: formData.get("category_id") as string,
            description: formData.get("description") as string,
            image: imageUrl,
            name: formData.get("name") as string,
            price: +formData.get("price")!,
            stock: +formData.get("stock")!,
        }

        const { data } = await inventoryDb.post<{ message: string, product: CreateProduct }>("/products", product, {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        
        revalidatePath("/admin/products")
        
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



const uploadImage = async (image:File) => {
    try {
        const buffer = await image.arrayBuffer();
        const base64Image = Buffer.from(buffer).toString("base64");


        return cloudinary.uploader.upload(`data:image/png;base64,${ base64Image }`).
            then( response => response.secure_url )

        
    } catch (error) {
        console.log(error)
    }


}
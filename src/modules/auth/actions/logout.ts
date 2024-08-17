"use server"

import inventoryDb from "@/db/inventoryDb";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"
import { redirect } from "next/navigation";



export const logout = async () => {

    const token = cookies().get("INV_NEXT_TOKEN")?.value;

    cookies().delete("INV_NEXT_TOKEN");
    cookies().delete("INV_NEXT_USER");


    try {
        
        await inventoryDb.post("/auth/logout", {}, {
            headers: {
                Authorization: "Bearer " + token
            }
        })


    } catch (error) {
        console.log(error);
    }

    revalidatePath('/')
    redirect('/auth/login')

}
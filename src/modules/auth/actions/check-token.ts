"use server"

import inventoryDb from "@/db/inventoryDb";
import { cookies } from "next/headers";
import { IUser } from "../interfaces/user";
import { revalidatePath } from "next/cache";



export const checkToken = async () => {
    const token = cookies().get("INV_NEXT_TOKEN");

    if (!token?.value) {
        return false
    }


    const { data } = await inventoryDb.get<{ user: IUser }>("/auth/checkToken", {
        headers: {
            Authorization: "Bearer " + token.value
        }
    })

    if( !data ){

        
        cookies().delete("INV_NEXT_TOKEN");
        cookies().delete("INV_NEXT_USER");

        return false
    }

    return token.value;


}
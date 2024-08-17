"use server"
import { cookies } from "next/headers";

import inventoryDb from "@/db/inventoryDb"

import type { ILoginResponse } from "@/modules/auth";
import { revalidatePath } from "next/cache";
import { isAxiosError } from "axios";


export const login = async (email: string, password: string) => {

    try {
        const { data } = await inventoryDb.post<ILoginResponse>("/auth/login", { email, password });
        
        const { token, user } = data;

        cookies().set("INV_NEXT_TOKEN", token);
        cookies().set("INV_NEXT_USER", JSON.stringify(user));

        // revalidatePath('/')

        return {
            error: null,
            data
        }

    } catch (error) {
        console.log(error)

        if( isAxiosError(error) ){
            return {
                error: error.response?.data.message,
                data: null
            }
        }

        throw new Error("Error en el servidor")

    }

}
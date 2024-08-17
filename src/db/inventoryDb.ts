"use server"
import axios from "axios";
import { cookies } from "next/headers";

const token = cookies().get("INV_NEXT_TOKEN");

const inventoryDb = axios.create({

    


    baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token?.value
    }
});

export default inventoryDb;
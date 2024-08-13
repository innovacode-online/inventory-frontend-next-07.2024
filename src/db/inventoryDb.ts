import axios from "axios";

const inventoryDb = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL ?? '',
    headers: {
        Accept: "application/json"
    }
});

export default inventoryDb;
import { ChartIcon, Home01Icon, Layers01Icon, ShoppingCart01Icon } from "hugeicons-react";


export const sideMenuOptions = [
    {
        path: "/admin/products",
        name: "Productos",
        icon: <Home01Icon/>
    },

    {
        path: "/admin/categories",
        name: "Categorias",
        icon: <Layers01Icon/>
    },

    {
        path: "/admin/cart",
        name: "Carrito",
        icon: <ShoppingCart01Icon/>
    },

    {
        path: "/admin/sales",
        name: "Ventas",
        icon: <ChartIcon/>
    },
]
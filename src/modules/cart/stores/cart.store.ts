import { create, StateCreator } from "zustand"

import { ICart } from "../interfaces/cart";
import { ISimpleProduct } from "@/modules/products/interfaces/simple-product";
import { toast } from "sonner";



interface CartState {
    cart: ICart[],
    total: number;
}


interface CartMethods {
    calcTotal: () => void
    cleanCart: () => void,
    incrementQuantity: (id: number) => void
    decrementQuantity: (id: number) => void
    removeProductToCart: (id: number) => void
    addProductToCart: ( product: ISimpleProduct ) => void;
}



// INFORMACION
const storeApi: StateCreator<CartState & CartMethods> = (set, get) => ({
    cart: [],
    total: 0,


    calcTotal: () => {
        const { cart } = get();

        let subTotal = 0;

        cart.forEach( item => {
            subTotal += +item.price * item.quantity
        })

        set({ total: subTotal })

    },

    addProductToCart: ( product ) => {
        const { cart, calcTotal } = get();

        const productInCart = cart.some( item => item.id == product.id );
        
        if( productInCart ){
            toast.warning(product.name + " ya se agrego al carrito");    
            return;
        }

        set({
            cart: [
                ...cart,
                {
                    id: product.id,
                    image: product.image,
                    name: product.name,
                    price: product.price,
                    quantity: 1,
                    slug: product.slug
                }
            ]
        })

        toast.success(product.name + " se agrego al carrito");
        calcTotal();
    },

    incrementQuantity: (id: number) => {
        const { cart, calcTotal } = get();
        
        const updateCartProducts = cart.map(item => {
            
            if( item.id === id ){
                return {...item, quantity: item.quantity + 1}
            }

            return item;
        })

        set({ cart: updateCartProducts });
        
        calcTotal();
    },

    decrementQuantity: (id: number) => {
        const { cart, calcTotal } = get();
        
        const updateCartProducts = cart.map(item => {
            
            if( item.quantity === 1 ) return item;

            if( item.id === id ){
                return {...item, quantity: item.quantity - 1}
            }

            return item;
        })

        set({ cart: updateCartProducts });
        
        calcTotal();
    },

    removeProductToCart: (id: number) => {
        const { cart, calcTotal } = get();

        const updateCartProducts = cart.filter( item => item.id != id );

        set({ cart: updateCartProducts });
        
        calcTotal();
    },

    cleanCart: () => {
        set({ cart: [], total: 0 })
    }


})






// PROVEEDOR DE INFORMACION
export const useCartStore = create<CartState & CartMethods>()(
    storeApi,
);
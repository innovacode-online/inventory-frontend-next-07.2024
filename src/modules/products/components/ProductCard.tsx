"use client"

import Image from "next/image"

import { useCartStore } from "@/modules/cart";
import { ISimpleProduct } from "../interfaces/simple-product"

import { Button } from "@nextui-org/react";
import { ShoppingCart01Icon } from "hugeicons-react";


interface Props {
    product: ISimpleProduct;
    
}

export const ProductCard = ({ product }: Props) => {

    const { addProductToCart } = useCartStore();

    return (
        <div className="product__card">
            <Image
                src={ product.image }
                width={ 500 }
                height={ 500 }
                alt={product.name}
            />

            <h3 className="font-bold">{ product.name }</h3>

            <div>
                <p>{ product.category.name }</p>
                <p>Precio: BOB{ product.price }</p>
            </div>

            <Button
                startContent={ <ShoppingCart01Icon/> }
                fullWidth
                className="btn-primary"
                onClick={() => addProductToCart( product )}
            >
                Agregar al carrito
            </Button>
        </div>
    )
}

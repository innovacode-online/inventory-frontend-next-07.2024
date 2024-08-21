"use client"

import Image from "next/image";
import { useCartStore } from "../stores/cart.store"
import { Button } from "@nextui-org/react";
import { Add01Icon, Delete01Icon, MinusPlus01Icon, Remove01Icon } from "hugeicons-react";


export const CartList = () => {

    const { cart, incrementQuantity, decrementQuantity, removeProductToCart } = useCartStore();


    return (
        <div className='col-span-2'>
            <ul className='space-y-6'>
                {
                    cart.map( item => (

                        <li key={ item.id } className="cart__item">
                            <Image
                                src={ item.image }
                                width={80}
                                height={80}
                                alt={ item.name  }
                            />

                            <div className="space-y-2">
                                <h4>Nombre: { item.name }</h4>
                                <p>Precio: { item.price }</p>
                                
                                <div className="flex gap-2 items-center">

                                    {/* RESTAR */}
                                    <Button
                                        startContent={ <Remove01Icon/> }
                                        isIconOnly
                                        size="sm"
                                        radius="full"
                                        onClick={() => decrementQuantity( item.id )}
                                    />

                                    {/* CANTIDAD */}
                                    <p>Cantidad: { item.quantity }</p>

                                    {/* INCREMENTAR */}
                                    <Button
                                        startContent={ <Add01Icon/> }
                                        isIconOnly
                                        size="sm"
                                        radius="full"
                                        onClick={() => incrementQuantity( item.id )}
                                    />

                                    {/* ELIMINAR */}
                                    <Button
                                        startContent={ <Delete01Icon size={18}/> }
                                        isIconOnly
                                        color="danger"
                                        className="ml-auto"
                                        size="sm"
                                        radius="full"
                                        onClick={() => removeProductToCart( item.id )}
                                    />
                                </div>

                            </div>

                        </li>

                    ))
                    
                }
            </ul>
        </div>
    )
}

"use client"
import { FormEvent, useState } from 'react'
import { toast } from 'sonner'

import { IUser } from '@/modules/auth'
import { useCartStore } from '../stores/cart.store'

import { Button, Input } from '@nextui-org/react'
import { createSale } from '@/modules/sales'

interface Props {
    user: IUser;
}

export const CheckoutForm = ({ user }: Props) => {

    
    const [isLoading, setIsLoading] = useState(false);

    const { total, cart, cleanCart } = useCartStore();


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true);

        const { clientName } = e.target as HTMLFormElement;

        if( clientName.value.trim() === "" ){
            toast.warning("El nombre del cliente es obligatorio");
            setIsLoading(false)
            return
        }

        const formData = new FormData();

        formData.append("clientName", clientName.value);
        formData.append("userName", user.name);
        formData.append("userEmail", user.email);
        formData.append("user_id", `${ user.id }`);
        formData.append("total", `${ total }`);
        formData.append("cart", JSON.stringify( cart ))


        const { data, error } = await createSale(formData);

        if( error ){
            toast.error(error);
            setIsLoading(false);
            return;
        } 


        toast.success(data?.message);

        cleanCart();

        setIsLoading(false);



    }

    return (
        <div className='col-span-3'>
            <div className='mb-6'>
                <h2 className='text-2xl font-bold'>Generar venta</h2>
                <p>Completa los detalles de la venta</p>
            </div>


            <form onSubmit={handleSubmit} className='checkout__form'>
                <Input
                    isRequired
                    size='sm'
                    label="Cliente"
                    placeholder='Ingrese el nombre del cliente'
                    name='clientName'
                />

                <p className='font-semibold text-xl'>Total: { total }</p>

                <p>Esta venta sera generada por: { user.name }</p>

                <Button
                    type='submit'
                    className='btn-primary'
                    fullWidth
                    isLoading={ isLoading }
                    isDisabled={ isLoading }
                    
                >
                    Confirmar
                </Button>

            </form>


        </div>
    )
}

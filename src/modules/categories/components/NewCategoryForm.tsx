"use client"
import { FormEvent, useState } from 'react'
import { useRouter } from 'next/navigation';

import { createCategory } from '../actions/create-category';

import { toast } from 'sonner';
import { Button, Input, Textarea } from '@nextui-org/react'

export const NewCategoryForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading( true );

        const { categoryName, description } = e.target as HTMLFormElement; 

        if( categoryName.value.trim() === "" || description.value.trim() === "" ){
            setIsLoading(false);
            
            toast.warning("Todos los datos son requeridos")

            return;
        }

        const { data, error } = await createCategory(categoryName.value, description.value)
        
        if( error ){
            setIsLoading(false);
            
            toast.error(error)

            return;
        }


        toast.success(data?.message);
        setIsLoading( false );
        router.push('/admin/categories')
    }


    return (
        <section className='pt-8'>
            <form onSubmit={ handleSubmit } className='container space-y-4'>
                <Input
                    label="Nombre"
                    placeholder='Ingrese un nombre para la categoria'
                    name='categoryName'
                />

                <Textarea
                    label="Descripcion"
                    placeholder='Ingrese una descripcion para la categoria'
                    name='description'
                />

                <Button
                    type="submit"
                    className='btn-primary'
                    isLoading={ isLoading }
                    isDisabled={ isLoading }
                >
                    Guardar
                </Button>

            </form>
        </section>
    )
}

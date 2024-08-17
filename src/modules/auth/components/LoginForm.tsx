"use client"
import { FormEvent, useState } from 'react'

import { login } from '@/modules/auth';

import { Button, Input } from '@nextui-org/react'
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export const LoginForm = () => {

    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading(true);

        const { email, password } = e.target as HTMLFormElement;

        if( email.value.trim() === "" || password.value.trim() === "" ){
            toast.warning("Todos los campos son requeridos");
            setIsLoading(false);
            return;
        }
 
        
        const { data, error } = await login(email.value, password.value)

        if( error ){
            toast.error(error);
            setIsLoading(false);
            return;
        }

        toast.success(`Bienvenido ${ data?.user.name }`);

        setIsLoading(false);

        router.push("/admin/categories")

    }

    return (
        <div className='login__form'>
            <h3 className='text-2xl font-bold mb-4'>Inicia Sesion</h3>

            <form onSubmit={handleSubmit} className='space-y-4'>

                <Input
                    label="Correo electronico"
                    name='email'
                    placeholder='Ingresa tu correo'
                    isRequired
                />

                <Input
                    label="Contraseña"
                    name='password'
                    isRequired

                />

                <Button
                    color='primary'
                    className='btn-primary'
                    fullWidth
                    isLoading={ isLoading }
                    isDisabled={ isLoading }
                    type="submit"
                >
                    Iniciar Sesion
                </Button>

            </form>
        </div>
    )
}

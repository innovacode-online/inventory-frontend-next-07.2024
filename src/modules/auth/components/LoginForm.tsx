import React from 'react'
import { Button, Input } from '@nextui-org/react'

export const LoginForm = () => {
    return (
        <div className='login__form'>
            <h3 className='text-2xl font-bold mb-4'>Inicia Sesion</h3>

            <form className='space-y-4'>

                <Input
                    label="Correo electronico"
                />

                <Input
                    label="Contraseña"
                />

                <Button
                    color='primary'
                    className='btn-primary'
                    fullWidth
                >
                    Iniciar Sesion
                </Button>

            </form>
        </div>
    )
}

"use client"
import React from 'react'

import { IUser } from '@/modules/auth'
import { Button } from '@nextui-org/react'
import { logout } from '@/modules/auth/actions/logout';

interface Props {
    user: IUser;
}

export const SideMenuAvatar = ({ user }: Props) => {

    const handleClick = async () => {
        await logout();
    }

    return (
        <div className='sidemenu__avatar'>

            <h3>{user.name}</h3>
            <p className='text-sm'>{user.email}</p>

            <Button
                className='mt-4'
                variant='light'
                fullWidth
                color='danger'
                onClick={handleClick}
            >
                Cerrar Sesion
            </Button>

        </div>
    )
}

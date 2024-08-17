import React from 'react'
import Image from 'next/image'
import { cookies } from 'next/headers'

import { IUser } from '@/modules/auth'
import { sideMenuOptions } from '@/constants/side-menu-options'

import Logo from '@/assets/images/logo.png'
import { SideMenuOption } from './SideMenuOption'
import { Button } from '@nextui-org/react'
import { SideMenuAvatar } from './SideMenuAvatar'

export const SideMenu = () => {

    const user = JSON.parse( cookies().get("INV_NEXT_USER")?.value! ) as IUser;

    return (
        <nav className='sidemenu'>
            
            {/* LOGO */}
            <div className='sidemenu__logo'>
                <Image
                    src={ Logo }
                    alt='Logo'
                    width={ 50 }
                    height={ 50 }
                />

                <div>
                    <h3 className='font-semibold text-xl'>Gesty</h3>
                    <p className='text-sm font-light'>Gestiona tu inventario</p>
                </div>

            </div>

            {/* MENU OPTIONS */}
            <ul className='space-y-6'>
                {
                    sideMenuOptions.map(option => (
                        <li key={option.path}>
                            <SideMenuOption
                                option={ option }
                            />
                        </li>
                    ))
                }
            </ul>

            <div className="flex-1"></div>

            {/* USER PROFILE */}
            <SideMenuAvatar
                user={ user }
            />

        </nav>
    )
}

import React from 'react'
import Image from 'next/image'

import Logo from '@/assets/images/logo.png'
import { sideMenuOptions } from '@/constants/side-menu-options'
import { SideMenuOption } from './SideMenuOption'

export const SideMenu = () => {
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

            {/* USER PROFILE */}
        </nav>
    )
}

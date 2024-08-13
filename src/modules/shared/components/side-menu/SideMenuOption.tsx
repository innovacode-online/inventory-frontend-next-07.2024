"use client"

import React from 'react'
import { usePathname, useRouter } from 'next/navigation';


interface Props {
    option: {
        path: string;
        name: string;
        icon: React.JSX.Element;
    }
}

export const SideMenuOption = ({ option }: Props) => {



    const router = useRouter();
    const pathname = usePathname();

    console.log(pathname)

    return (
        <div 
            className={`sidemenu__link ${ pathname.includes( option.path ) && "sidemenu__link--active" }`}
            onClick={() => router.push(option.path)}
        >
            <span>{ option.icon }</span>
            { option.name }
        </div>
    )
}

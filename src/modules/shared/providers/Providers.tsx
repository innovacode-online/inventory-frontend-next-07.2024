"use client"

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'



interface Props {
    children: ReactNode;
}


export const Providers = ({ children }: Props) => {
    return (
        <NextUIProvider>
            { children }
        </NextUIProvider>
    )
}

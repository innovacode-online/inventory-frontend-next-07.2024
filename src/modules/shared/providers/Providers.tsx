"use client"

import { ReactNode } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { Toaster } from 'sonner';



interface Props {
    children: ReactNode;
}


export const Providers = ({ children }: Props) => {
    return (
        <NextUIProvider>
            <Toaster
                richColors
                position='top-center'
                style={{
                    position:"absolute"
                }}
            />
            { children }
        </NextUIProvider>
    )
}

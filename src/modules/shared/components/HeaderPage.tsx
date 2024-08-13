"use client"

import { useRouter } from 'next/navigation'

import { Button } from '@nextui-org/react'

interface Props {
    title: string,
    description: string,

    btnTitle: string 
    pathname: string,
}

export const HeaderPage = ({ btnTitle, description, pathname, title }: Props) => {

    const router = useRouter();

    return (
        <section className='pt-8'>
            <div className='header'>
                <div>
                    <h1 className='text-2xl font-bold'>{ title }</h1>
                    <p>{ description }</p>
                </div>

                <Button
                    className='btn-primary'
                    onClick={() => router.push( pathname )}
                >
                    { btnTitle }
                </Button>
            </div>
        </section>
    )
}

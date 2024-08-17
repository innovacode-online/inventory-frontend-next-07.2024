'use client'; // Error components must be Client Components

import { Button } from '@nextui-org/react';
import { useEffect } from 'react';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <section className='min-h-[100vh] flex flex-col items-center justify-center'>
            <h1 className='text-2xl'>Ocurrio un error!</h1>
            <p>{ error.message }</p>
            <Button
                className='btn-primary'
                onClick={() => reset()}
            >
                Try again
            </Button>
        </section>
    );
}
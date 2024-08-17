import { FormEvent, useState } from 'react'
import { toast } from 'sonner';

import type { ICategory } from '@/modules/categories';
import { updateCategory } from '@/modules/categories';

import { Edit01Icon } from 'hugeicons-react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Textarea, Input } from "@nextui-org/react";

interface Props {
    category: ICategory;
}

export const EditCategoryModal = ({ category }: Props) => {

    const [isLoading, setIsLoading] = useState(false);

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsLoading( true );

        const { categoryName, description } = e.target as HTMLFormElement; 

        if( categoryName.value.trim() === "" || description.value.trim() === "" ){
            setIsLoading(false);
            
            toast.warning("Todos los datos son requeridos")

            return;
        }

        const { data, error } = await updateCategory(category.id,  categoryName.value, description.value)
        
        if( error ){
            setIsLoading(false);
            
            toast.error(error)

            return;
        }


        toast.success(data?.message);
        
        setIsLoading( false );
        onClose();
    }

    return (
        <>
            <Button
                onPress={onOpen}
                isIconOnly
                startContent={<Edit01Icon size={18} />}
                size='sm'
                color='primary'
                variant='light'
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={ handleSubmit }>
                            <ModalHeader className="flex flex-col gap-1">
                                Actualiza la categoria
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    label="Nombre"
                                    placeholder='Ingrese un nombre para la categoria'
                                    name='categoryName'
                                    defaultValue={ category.name }
                                />

                                <Textarea
                                    label="Descripcion"
                                    placeholder='Ingrese una descripcion para la categoria'
                                    name='description'
                                    defaultValue={ category.description }
                                />

                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button
                                    color="primary"
                                    isLoading={isLoading}
                                    isDisabled={isLoading}
                                    type="submit"
                                >
                                    Actualizar
                                </Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

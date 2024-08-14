"use client"

import { useState } from 'react';

import { ICategory } from '@/modules/categories';

import { Delete01Icon } from 'hugeicons-react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import { deleteCategory } from '../../actions/delete-category';
import { toast } from 'sonner';



interface Props {
    category: ICategory;
}

export const DeleteCategoryModal = ({ category }: Props) => {
    
    const [isDisabled, setIsDisabled] = useState(false)

    const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

    const handleDeleteCategory = async () => {
        setIsDisabled( true );

        const { data, error } = await deleteCategory( category.id );

        if( error ){
            setIsDisabled(false);
            toast.error(error);
            onClose();

            return;
        }

        toast.success(data?.message);
        setIsDisabled(false);
        onClose();

    }

    return (
        <>
            <Button 
                onPress={onOpen}
                isIconOnly
                startContent={ <Delete01Icon size={ 18 }/> }
                size='sm'
                color='danger'
                variant='light'
            />
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Eliminar Categoria</ModalHeader>
                            <ModalBody>
                                <p>
                                    ¿Esta seguro que desea eliminar la categoria { category.name } ?
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Cancelar
                                </Button>
                                <Button 
                                    isDisabled={ isDisabled }
                                    color="primary" 
                                    onPress={handleDeleteCategory}
                                >
                                    Eliminar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}

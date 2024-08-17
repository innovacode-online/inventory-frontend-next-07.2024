"use client"
import { useRouter } from 'next/navigation';

import { DeleteCategoryModal, ICategory } from '@/modules/categories'
import { IPaginationMeta } from '@/modules/shared';
import { Pagination, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { EditCategoryModal } from './EditCategoryModal';

interface Props {
    categories: ICategory[];
    meta: IPaginationMeta;
}

export const CategoryTable = ({ categories, meta }: Props) => {

    const router = useRouter();

    return (
        <section className='pt-8'>
            <div className="container">

                <Table aria-label='Categories Table'>
                    <TableHeader>
                        <TableColumn>Codigo</TableColumn>
                        <TableColumn>Nombre</TableColumn>
                        <TableColumn>Descripcion</TableColumn>
                        <TableColumn>Creacion</TableColumn>
                        <TableColumn>Ultima Actualizacion</TableColumn>
                        <TableColumn>Acciones</TableColumn>
                    </TableHeader>
                    
                    <TableBody>
                        {
                            categories.map(category => (
                                <TableRow key={category.id}>
                                    <TableCell>#{ category.id }</TableCell>
                                    <TableCell>{ category.name }</TableCell>
                                    <TableCell>{ category.description }</TableCell>
                                    <TableCell>17 de Septiembre de 2024</TableCell>
                                    <TableCell>17 de Septiembre de 2024</TableCell>
                                    <TableCell>
                                        <EditCategoryModal category={ category } />
                                        <DeleteCategoryModal category={ category } />
                                    </TableCell>
                                </TableRow>
                            ))
                        }
                    </TableBody>
                </Table>
                <Pagination
                    onChange={(e) => router.push(`/admin/categories?page=${ e }`)} 
                    className='mt-4' 
                    loop 
                    showControls 
                    color="primary" 
                    total={ meta.last_page } 
                    initialPage={1} 
                />
            </div>


        </section>
    )
}

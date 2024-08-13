"use client"
import { ICategory } from '@/modules/categories'
import { code, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'

interface Props {
    categories: ICategory[]
}

export const CategoryTable = ({ categories }: Props) => {
    return (
        <section className='pt-8'>
            <Table className='container' aria-label='Categories Table'>
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
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </section>
    )
}

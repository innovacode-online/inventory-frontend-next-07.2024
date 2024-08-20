"use client";
import React from "react";
import {
  Table,
  TableColumn,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { ISimpleProduct } from "../../interfaces/simple-product";
import Image from "next/image";
import { ProductTableActions } from "./ProductTableActions";

interface Props {
  products: ISimpleProduct[];
}

export const ProductTable = ({ products }: Props) => {
  return (
    <section className="pt-8">
      <Table className="container">
        <TableHeader>
          <TableColumn>Imagen</TableColumn>
          <TableColumn>Nombre</TableColumn>
          <TableColumn>Categoria</TableColumn>
          <TableColumn>Precio</TableColumn>
          <TableColumn>Fecha de creacion</TableColumn>
          <TableColumn>Acciones</TableColumn>
        </TableHeader>

        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>
                <Image width={75} height={75} src={product.image} alt={product.name} />
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category.name}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>{JSON.stringify(product.createdAt)}</TableCell>
              <TableCell>
                <ProductTableActions product={ product }/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
};

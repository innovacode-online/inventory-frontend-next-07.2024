"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";

import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { ICategory } from "@/modules/categories";
import { toast } from "sonner";
import { createProduct } from "../actions/create-product";
import { useRouter } from "next/navigation";

interface Props {
  categories: ICategory[];
}

export const NewProductForm = ({ categories }: Props) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [previewImage, setPreviewImage] = useState("");

  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    setPreviewImage(URL.createObjectURL(image));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setIsLoading(true);

    const { productName, description, stock, price, category_id, image } =
      e.target as HTMLFormElement;

    const formData = new FormData();

    const product = {
      name: productName.value,
      description: description.value,
      stock: stock.value,
      price: price.value,
      category_id: category_id.value,
    };

    if (Object.values(product).includes("")) {
      toast.warning("Todos los campos son requeridos");
      setIsLoading(false);
      return;
    }

    if (!image.files[0]) {
      toast.warning("Debe agregar una imagen");
      setIsLoading(false);
      return;
    }

    formData.append("name", product.name);
    formData.append("description", product.description);
    formData.append("stock", product.stock);
    formData.append("price", product.price);
    formData.append("category_id", product.category_id);
    formData.append("image", image.files[0]);

    const { data, error } = await createProduct(formData);

    if (error) {
      toast.error(error);
      setIsLoading(false);
      return;
    }

    toast.success(data?.message);

    setIsLoading(false);

    router.push("/admin/products")
  };

  return (
    <section className="pt-8">
      <form onSubmit={handleSubmit} className="container grid grid-cols-2">
        <div className="space-y-6 w-full">
          <Input
            size="sm"
            label="Nombre"
            placeholder="Nombre del producto"
            name="productName"
          />

          <Textarea
            name="description"
            label="Descripcion"
            placeholder="Agrega una descripcion del producto"
          ></Textarea>

          <Input
            size="sm"
            type="number"
            min={0}
            step="0.01"
            name="price"
            label="Precio"
            placeholder="Precio del producto"
          />

          <Input
            size="sm"
            type="number"
            min={0}
            name="stock"
            label="Stock"
            placeholder="Stock disponible del producto"
          />

          {/* CATEGORIAS */}
          <Select
            name="category_id"
            label="Categorias"
            placeholder="Selecciona una categoria"
          >
            {categories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </Select>

          <input name="image" onChange={handleImage} type="file" />

          <Button
            isLoading={isLoading}
            isDisabled={isLoading}
            type="submit"
            className="btn-primary"
            fullWidth
          >
            Guardar Producto
          </Button>
        </div>

        <div className="w-full">
          {previewImage.trim() === "" ? (
            <p className="text-center">No selecciono una imagen</p>
          ) : (
            <img src={previewImage} className="max-w-[400px] mx-auto" />
          )}
        </div>
      </form>
    </section>
  );
};

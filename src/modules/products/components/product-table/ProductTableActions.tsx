import React from "react";
import { Button } from "@nextui-org/react";
import { EyeIcon } from "hugeicons-react";
import { ISimpleProduct } from "../../interfaces/simple-product";
import { useRouter } from "next/navigation";

interface Props {
    product: ISimpleProduct;
}

export const ProductTableActions = ({ product }: Props) => {
    
    const router = useRouter();

    
    return (
        <div>
            <Button
                isIconOnly
                startContent={ <EyeIcon/> }
                variant="light"
                color="primary"
                onClick={() => router.push(`/admin/products/${ product.slug }`)}
            />
        </div>

    );
};


import { getProducts, ProductCard } from '@/modules/products';

export const CartProductList = async () => {

    const { data } = await getProducts();

    return (
        <section className='pt-8'>
            <div className="container">
                <ul className='product__list'>
                    {
                        data!.products.map(product => (
                            <ProductCard
                                key={ product.id }
                                product={ product }
                            />
                        ))
                        
                    }
                </ul>
            </div>
        </section>
    )
}

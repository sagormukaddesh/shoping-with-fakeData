import { useEffect } from "react";
import { useState } from "react";
import Product from "../product/Product";
import PropTypes from 'prop-types';

const Products = ({ handleAddToCart}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`fakeData.json`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className="text-2xl font-bold">All Products </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 mx-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>

        </div>
    );
};
Products.propTypes = {
    handleAddToCart: PropTypes.func.isRequired,
}
export default Products;
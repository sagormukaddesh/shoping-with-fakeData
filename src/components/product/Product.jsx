import PropTypes from 'prop-types'
const Product = ({ product, handleAddToCart }) => {
    const { title, price, image, description, category } = product;
    return (
        <div className="card card-compact w-96 border border-amber-500 bg-slate-100 shadow-xl">
            <figure><img className='w-[200px]' src={image} alt="Shoes" /></figure>

            <div className="card-body">
                <h3 className='text-xl font-bold'>{category} </h3>
                <h2 className="card-title">{title} </h2>
                <p className='font-bold' >Price: {price} $ </p>
                <p>{description} </p>
                <div className="card-actions">
                    <button onClick={() =>handleAddToCart(product)} className="btn bg-amber-600 text-white btn-sm">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

Product.propTypes = {
    product: PropTypes.object.isRequired,
    handleAddToCart: PropTypes.func
}

export default Product;
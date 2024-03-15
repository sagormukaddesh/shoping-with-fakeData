import PropTypes from 'prop-types'
const Cart = ({ singleCart, handleRemove }) => {
    const { title, price, image } = singleCart;
    return (
        <div className="hero min-h-[40px] rounded-xl my-4  bg-base-200">
            <div className="hero-content flex-col rounded-xl bg-slate-300 lg:flex-row">
                <img className='w-40' src={image} />
                <div className=''>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className='font-bold my-2'>Price: {price} </p>

                    <button onClick={()=>handleRemove(singleCart.id)}
                     className="btn btn-error btn-sm text-white px-6 mt-10">Remove</button>
                </div>
            </div>
        </div>
    );
};

Cart.propTypes = {
    singleCart: PropTypes.object.isRequired,
    handleRemove: PropTypes.func
}
export default Cart;
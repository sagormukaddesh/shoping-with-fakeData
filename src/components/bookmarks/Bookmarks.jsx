import Cart from "../cart/Cart";
import PropTypes from 'prop-types'
const Bookmarks = ({ carts }) => {

    return (
        <div className=" md:mx-6">
            <h2 className="text-2xl font-bold ">Add To Cart</h2>
            <h2 className="text-3xl mt-12 font-semibold">Products On Cart</h2>
            <div className="grid grid-cols-1 my-10 ">
                {
                    carts.map((singleCart, idx) => <Cart
                        key={idx}
                        singleCart={singleCart}

                    ></Cart>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    carts: PropTypes.array.isRequired
}
export default Bookmarks;
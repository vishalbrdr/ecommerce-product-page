import image from '../images/image-product-1-thumbnail.jpg'
import { ReactComponent as BinIcon } from '../images/icon-delete.svg'

const Cart = ({ quantity, setQuantity }) => {

    return (
        <div className="Cart" >
            <div className="Cart__header" >
                <h2 className="Cart__header__title">
                    Cart
                </h2>
            </div>
            {quantity > 0 ? (
                <>
                    <div className="Cart__main">
                        <div className="Cart__product">
                            <div className="Cart__product-image">
                                <img src={image} alt="product" />
                            </div>
                            <div className="Cart__product-main">
                                <h3 className="product__name">
                                    Fall Limited Edition Sneakers
                                </h3>
                                <div className="price"> <span>$125.00 x {quantity} </span> <strong> ${125 * quantity}</strong> </div>
                            </div>
                            <button className="btn delete"
                                onClick={() => setQuantity(0)}
                            >
                                <span>delete</span>
                                <BinIcon />
                            </button>
                        </div>
                        <button className="btn btn-primary">Checkout</button>
                    </div>
                </>
            ) : <p>Your cart is empty.</p>}
        </div >
    )
}

export default Cart

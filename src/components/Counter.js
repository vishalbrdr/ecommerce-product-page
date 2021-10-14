import { ReactComponent as PlusIcon } from '../images/icon-plus.svg'
import { ReactComponent as MinusIcon } from '../images/icon-minus.svg'
const Counter = ({ quantity, setQuantity }) => {
    return (
        <div className="counter" >
            <button
                className="btn"
                onClick={() => {
                    if (quantity === 0) {
                        return
                    } else {
                        setQuantity(quantity - 1)
                    }
                }}
            >
                <span>-</span>
                <MinusIcon className="quantity-icon" />
            </button>
            <div className="quantity">{quantity}</div>
            <button
                className="btn"
                onClick={() => setQuantity(quantity + 1)}
            >
                <span>+</span>
                <PlusIcon className="quantity-icon" />
            </button>
        </div>
    )
}

export default Counter

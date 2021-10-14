import logo from '../images/logo.svg'
import NavLink from './NavLink'
import avatar from '../images/image-avatar.png'
import { ReactComponent as CartIcon } from '../images/icon-cart.svg'
import Cart from './Cart'
import { useState } from 'react'
const Navbar = ({ quantity, setQuantity }) => {
    const navLinks = ["Collections", "Men", "Women", "About", "Contact"]
    const [isActive, setIsActive] = useState(true)
    return (
        <nav className="Navbar">
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <ul className="nav__links">
                    {navLinks.map(link => (
                        <NavLink key={link} text={link} />
                    ))}
                </ul>
                <div className="cart">
                    <button className="btn" onClick={() => setIsActive(!isActive)} >
                        <CartIcon fill={isActive || quantity > 0 ? '#1d2025' : '#68707d'} className="cart-icon" />
                    </button>
                    {quantity > 0 && <div className="badge">{quantity}</div>}
                    {isActive && <Cart quantity={quantity} setQuantity={setQuantity} />}
                </div>
                <div className="user">
                    <img src={avatar} alt="user" />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

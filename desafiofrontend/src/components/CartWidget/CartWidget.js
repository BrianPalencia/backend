import cart from './assets/cart.png'
import { Link } from "react-router-dom";

const CartWidget = ({total}) => {
    return (
        <div className='column is-2 cart-widget'>
            <Link className='cartnumber' to="/cart"><img className='cart' src={cart} alt="cart-widget"/>
            <span>{total}</span></Link>
        </div>
    )
}

export default CartWidget
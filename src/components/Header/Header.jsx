import cart from "../../img/cart.svg"
import {Link} from "react-router-dom"
import "./Header.sass"
export const Header = () => {
    return <header class="header">
        <Link to='/'><span class="header-logo">Магазин</span></Link>
        <Link to='/cart'><img src={cart} alt="корзина" class="header-cart"/></Link>
    </header>
}
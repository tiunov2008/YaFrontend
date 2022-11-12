import cart from "../../img/cart.svg"
import {Link} from "react-router-dom"
import "./Header.sass"
export const Header = () => {
    return <header class="header">
        <span class="header-logo"><Link class="header-logo" to='/'>Магазин</Link></span>
        <Link to='/cart'><img src={cart} alt="корзина" class="header-cart"/></Link>
    </header>
}
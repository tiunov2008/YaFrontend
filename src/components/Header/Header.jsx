import cart from "../../img/cart.svg"
import {Link} from "react-router-dom"
import "./Header.sass"
export const Header = () => {
    return <header class="header">
        <span class="header-logo"><Link class="header-logo" to='/a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'>Магазин</Link></span>
        <Link to='/cart'><img src={cart} alt="корзина" class="header-cart"/></Link>
    </header>
}
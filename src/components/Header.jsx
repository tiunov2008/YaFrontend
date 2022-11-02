import cart from "../img/cart.svg"
export const Header = () => {
    return <header class="header">
        <span class="header-logo">Магазин</span>
        <img src={cart} alt="корзина" class="header-cart"/>
    </header>
}
import './Cart.sass';
import { useSelector } from 'react-redux';
import { getCart } from './../../store/cart/selectors';
import { CartItem } from './../CartItem/CartItem';
import { BooksList, CartList } from './../BooksList/BooksList';
export const Cart = () => {
    const cart = useSelector((state) => getCart(state));
    return <>
    <div class="main-left main-block main-cart">
        <h2 class="cart-title">Ваш заказ:</h2>
        <ul class="cart-list">
            {Object.entries(cart).map(([key, value]) => <CartItem props={[key, value]} />)}
        </ul>
        <div class="cart-bottom">
            <span class="cart-sum_title">Итого:</span><span class="cart-sum_value">
                {Object.entries(cart).map(([key, value]) => <CartItem props={[key, value, true]} />)}
            </span>
            <button class="cart-button">Купить</button>
        </div>
    </div>
    <div class="main-right">
        <CartList></CartList>
    </div>
    </>
}
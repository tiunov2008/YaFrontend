import './Cart.sass';
export const Cart = () => {
    return <div class="main-left main-block main-cart">
        <h2 class="cart-title">Ваш заказ:</h2>
        <ul class="cart-list">
            <li class="cart-list_item">
                <span class="cart-list_item--name">Несносное проклятье некроманта</span>
                <span class="cart-list_item--price">250 ₽</span>
            </li>
            <li class="cart-list_item">
                <span class="cart-list_item--name">Несносе некроманта</span>
                <span class="cart-list_item--price">250 ₽</span>
            </li>
            <li class="cart-list_item">
                <span class="cart-list_item--name">Несносноье некроманта</span>
                <span class="cart-list_item--price">250 ₽</span>
            </li>
            <li class="cart-list_item">
                <span class="cart-list_item--name">Несносное пр некроманта</span>
                <span class="cart-list_item--price">250 ₽</span>
            </li>
        </ul>
        <div class="cart-bottom">
            <span class="cart-sum_title">Итого:</span><span class="cart-sum_value">1000₽</span>
            <button class="cart-button">Купить</button>
        </div>
    </div>
}
import '../Cart/Cart.sass';
import { useSelector } from 'react-redux';
import { selectBookCount } from '../../store/cart/selectors';
import { selectBookById } from '../../store/book/selectors';
export const CartItem = (props) => {
    props = props.props
    const book = useSelector((state) => selectBookById(state, props[0]));
    const count = useSelector((state) => selectBookCount(state, props[0]));

    if (props[2]) {
        return props[1] * book.price
    }
    return <li class="cart-list_item">
            <span class="cart-list_item--name">{book.name}</span>
            <span class="cart-list_item--price">{props[1] * book.price}</span>
        </li>
}
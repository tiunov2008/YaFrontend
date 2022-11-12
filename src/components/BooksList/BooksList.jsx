import { Book } from '../Book/Book';
import './BooksList.sass'
import { useSelector } from 'react-redux';
import { selectGenresBookIds, selectIsGenresSuccess } from './../../store/genre/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadBooksIfNotExist } from '../../store/book/loadBooksIfNotExist';
import { useParams } from 'react-router-dom';
import { getCart } from './../../store/cart/selectors';
export const BooksList = () => {
    let genreId = useParams()
    genreId = genreId.genreId
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId));
    }, [genreId]);

    const bookIds = useSelector((state) => selectGenresBookIds(state, genreId));
    const isSuccess = useSelector((state) => selectIsGenresSuccess(state));

    if (!isSuccess) {
        return;
    }

    if (!bookIds) {
        return null;
    }
    return <ul class="main-right_list">
        {
            bookIds.map((id) => <Book key={id} ids={[id, genreId]} />)
        }
    </ul>
}
export const CartList = () => {
    const cart = useSelector((state) => getCart(state));
    console.log(cart);
    return <ul class="main-right_list">
        {
            Object.entries(cart).map(([key, value]) => <Book key={value} ids={[key, '982bfbce-c5e0-41a0-9f99-d5c20ecee49d']} />)
        }
    </ul>
}
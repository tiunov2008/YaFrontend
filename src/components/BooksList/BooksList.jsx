import { Book } from '../Book/Book';
import './BooksList.sass'
import { useSelector } from 'react-redux';
import { selectGenreById, selectGenresBookIds } from './../../store/genres/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadBooksIfNotExist } from './../../store/book/loadBookIfNotExist';
import { selectIsBooksLoading } from '../../store/book/selectors';
import { useParams } from 'react-router-dom';
export const BooksList = () => {
    const {genreId} = useParams()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadBooksIfNotExist(genreId));
    }, [genreId]);
    console.log();
    const bookIds = useSelector((state) => selectGenresBookIds(state, genreId));

    if (!bookIds) {
        return null;
    }
    return <ul class="main-right_list">
        {
            bookIds.map((id) => <Book key={id} bookId={id} />)
        }
    </ul>
}
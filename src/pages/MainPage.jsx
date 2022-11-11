import { BooksList } from '../components/BooksList/BooksList';
import { genres } from '../constants/mock';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectGenres } from '../store/genres/selectors';
import { loadGenresIfNotExist } from './../store/genres/loadGenresIfNotExist';


export const MainPage = (props) => {
    const dispatch = useDispatch();
    const genres2 = useSelector(state => selectGenres(state))
    const [activeGenre, setActiveGenre] = useState(genres[0]);

    useEffect(()=>{
        dispatch(loadGenresIfNotExist);
    }, []);
    return <main class="main">
        <div class="main-left main-block">
            <ul class="main-left_list">
                {
                    genres.map((genre) => <li class="main-left_list--item" key={genre.id} onClick={() => setActiveGenre(genre)}>{genre.name}</li>)
                }
            </ul>
        </div>
        <div class="main-right main-block">
            <BooksList genre={activeGenre} />
        </div>
    </main>
}
import {Book} from '../Book/Book';
import './BooksList.sass'
export const BooksList = (genre) => {
    genre = genre.genre
    return <ul class="main-right_list">
        {
            genre.books.map((book) =><Book key={book.id} book={[book, genre.name]}/>)
        }
    </ul>
}
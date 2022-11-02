import {Book} from './Book';
export const BooksList = (genre) => {
    genre = genre.genre
    console.log(genre);
    return <ul class="main-right_list">
        {
            genre.books.map((book) =><Book key={book.id} book={[book, genre.name]}/>)
        }
    </ul>
}
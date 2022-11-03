import { ReviewsList } from '../components/ReviewsList/ReviewsList';
import { genres } from '../constants/mock';
import { Book } from '../components/Book/Book';
import { Annotation } from '../components/Annotation/Annotation';


export const SecondPage = () => {
    const activeBook = genres[0].books[0]
    return <main class="main main-reviews">
            <div class="main-right main-block">
                <ul class="main-right_list main-right_list-reviews">
                    <Book book={[activeBook, genres[0].name, true]}/>
                    <Annotation annotation={activeBook.annotation}/>
                </ul>
            </div>
            <div class="main-bottom main-block">
                <ReviewsList book={activeBook}/>
            </div>
    </main>
}
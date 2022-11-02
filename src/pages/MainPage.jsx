import { BooksList } from '../components/BooksList';
import { genres } from '../constants/mock';
import { useState } from "react"


export const MainPage = () => {
    const [activeGenre, setActiveGenre] = useState(genres[0]);
    return <main class="main">
            <div class="main-left main-block">
                <ul class="main-left_list">
                    {
                        genres.map((genre) =><li key={genre.id} class="main-left_list--item" onClick={() => setActiveGenre(genre)}>{genre.name}</li>)
                    }
                </ul>
            </div>
            <div class="main-right main-block">
                <BooksList genre={activeGenre}/>
            </div>
    </main>
}
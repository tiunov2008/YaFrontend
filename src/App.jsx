import { Header } from './components/Header/Header';
import { SecondPage } from './pages/SecondPage';
import { MainPage } from './pages/MainPage';
import { CartPage } from './pages/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { BooksList } from './components/BooksList/BooksList';
import { BookMore } from './components/Book/Book';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<MainPage/>}>
                        <Route index path=':genreId' element={<BooksList/>}/>
                    </Route>
                    <Route path=':bookId' element={<SecondPage/>}>
                        <Route path=':bookId' element={<BookMore ids={['bookPage']}/>}/>
                    </Route>
                    <Route path='/cart' element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
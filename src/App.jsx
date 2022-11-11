import { Header } from './components/Header/Header';
import { SecondPage } from './pages/SecondPage';
import { MainPage } from './pages/MainPage';
import { CartPage } from './pages/CartPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route index element={<MainPage/>}/>
                    <Route path='/book' element={<SecondPage/>}/>
                    <Route path='/cart' element={<CartPage/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
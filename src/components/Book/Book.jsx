import { useState } from "react";
import star from "../../img/star.png"
import noStar from "../../img/no-star.png"
import { NavLink } from "react-router-dom"
import './Book.sass'
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { selectBookById } from './../../store/book/selectors';
import { selectGenreById } from "../../store/genre/selectors";
import { useParams } from "react-router-dom";
import { Annotation } from './../Annotation/Annotation';
import { ReviewsList } from './../ReviewsList/ReviewsList';
import { cartSlice } from './../../store/cart/index';
import { selectBookCount } from "../../store/cart/selectors";

export const Book = ({ ids }) => {
    const dispatch = useDispatch();
    console.log(ids);
    const bookId = ids[0]
    const genreId = ids[1]
    const book = useSelector((state) => selectBookById(state, bookId));
    const genre = useSelector((state) => selectGenreById(state, genreId));
    const count = useSelector((state) => selectBookCount(state, bookId));

    if (!book) {
        return null;
    }

    return <li class="main-right_list--item">
        <div class="main-right_list--item_left">
            <h2 class="main-right_list--item_title"><NavLink class="main-right_list--item_title" to={bookId}>{book.name}</NavLink></h2>
            <span class="main-right_list--item_author">{book.authors.join(' ')}</span>
            <span class="main-right_list--item_genre">{genre.name}</span>
            <div class="main-right_list--item_stars">
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                <img src={noStar} alt="незаполненая-зведа" class="main-right_list--item_star" />
            </div>
            <p class="main-right_list--item_price">{book.price + '₽'}</p>
        </div>
        <div class="main-right_list--item_right">
            <div class="main-right_list--item_right__wrapper">
                <button onClick={() => dispatch(cartSlice.actions.removeBook(bookId))} 
                disabled={count === 0}  class="main-right_list--item_less">-</button>
                <span class="main-right_list--item_amount">{count || 0}</span>
                <button onClick={() => dispatch(cartSlice.actions.addBook(bookId))} class="main-right_list--item_more">+</button>
            </div>
        </div>
    </li>


}
export const BookMore = () => {
    const dispatch = useDispatch();
    const bookId = useParams().bookId
    const book = useSelector((state) => selectBookById(state, bookId));
    const count = useSelector((state) => selectBookCount(state, bookId));
    
    if (!book) {
        return null;
    }

    return <main class="main main-reviews">
        <div class="main-right main-block">
            <ul class="main-right_list main-right_list-reviews">
                <li class="main-right_list--item">
                    <div class="main-right_list--item_left">
                        <h2 class="main-right_list--item_title"><NavLink class="main-right_list--item_title" to={bookId}>{book.name}</NavLink></h2>
                        <span class="main-right_list--item_author">{book.authors.join(' ')}</span>
                        <div class="main-right_list--item_stars">
                            <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                            <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                            <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                            <img src={star} alt="заполненая-зведа" class="main-right_list--item_star" />
                            <img src={noStar} alt="незаполненая-зведа" class="main-right_list--item_star" />
                        </div>
                        <p class="main-right_list--item_price">{book.price + '₽'}</p>
                    </div>
                    <div class="main-right_list--item_right">
                        <div class="main-right_list--item_right__wrapper">
                        <button onClick={() => dispatch(cartSlice.actions.removeBook(bookId))} 
                        disabled={count === 0}  class="main-right_list--item_less">-</button>
                        <span class="main-right_list--item_amount">{count || 0}</span>
                        <button onClick={() => dispatch(cartSlice.actions.addBook(bookId))} class="main-right_list--item_more">+</button>
                        </div>
                    </div>
                </li>
                <Annotation props={book.annotation} />
            </ul>
        </div>
        <div class="main-bottom main-block">
            <ReviewsList props={book}/>
        </div>
    </main>
}
import { useState } from "react";
import star from "../../img/star.png"
import noStar from "../../img/no-star.png"
import {Link} from "react-router-dom"
import './Book.sass' 
import { useSelector } from 'react-redux';
import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { selectBookById } from './../../store/book/selectors';
import { loadBooksIfNotExist } from './../../store/book/loadBookIfNotExist';
export const Book = ({ bookId }) => {
    const dispatch = useDispatch();
    const book = useSelector((state) => selectBookById(state, bookId));
    if (!book) {
        return null;
    }
    /*return <li class="main-right_list--item">
        <div class="main-right_list--item_left">
            <h2 class="main-right_list--item_title"><Link props={props} class="main-right_list--item_title" to='/book'>{book.name}</Link></h2>
            <span class="main-right_list--item_author">{book.authors}</span>
            <span class="main-right_list--item_genre">{genre.name}</span>
            <div class="main-right_list--item_stars">
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-right_list--item_star"/>
                <img src={noStar} alt="незаполненая-зведа" class="main-right_list--item_star"/>
            </div>
            <p class="main-right_list--item_price">{book.price + '₽'}</p>
        </div>
        <div class="main-right_list--item_right">
            <div class="main-right_list--item_right__wrapper"> 
                <button onClick={() => setCount(count - 1)} disabled={count === 0} class="main-right_list--item_less">-</button>
                <span class="main-right_list--item_amount">{count}</span>
                <button onClick={() => setCount(count + 1)} class="main-right_list--item_more">+</button>
            </div> 
        </div>
    </li>
*/
}
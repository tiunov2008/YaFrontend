import star from "../../img/star.png"
import noStar from "../../img/no-star.png"
import './Review.sass'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectReviewById } from "../../store/review/selectors";
import { useSelector } from 'react-redux';
import { loadUsersIfNotExist } from './../../store/user/loadUsersIfNotExist';
import { selectIsUsersSuccess } from "../../store/user/selectors";
import { selectUserById } from './../../store/user/selectors';
export const Review = (reviewId) => {
    const review = useSelector((state) => selectReviewById(state,reviewId.id));
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUsersIfNotExist(reviewId));
    }, [reviewId]);
    const user = useSelector((state) => selectUserById(state,review.userId));
    const isSuccess = useSelector((state) => selectIsUsersSuccess(state));
    if (!isSuccess){
        return;
    }
    console.log(user);
    return <li class="main-bottom_list--item">
        <div class="main-bottom_list--item_top">
            <h2 class="main-bottom_list--item_title">{user.name}</h2>
            <div class="main-bottom_list--item_stars">
                <img src={star} alt="заполненая-зведа" class="main-bottom_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-bottom_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-bottom_list--item_star"/>
                <img src={star} alt="заполненая-зведа" class="main-bottom_list--item_star"/>
                <img src={noStar} alt="незаполненая-зведа" class="main-bottom_list--item_star"/>
            </div>
        </div>
        <p class="main-bottom_list--item_text">{review.text}</p>
    </li>
}
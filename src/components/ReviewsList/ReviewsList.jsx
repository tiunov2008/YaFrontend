import {Review} from '../Review/Review';
import './ReviewsList.sass'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadReviewsIfNotExist } from './../../store/review/loadReviewsIfNotExist';
import { useSelector } from 'react-redux';
import { selectIsReviewsSuccess } from '../../store/review/selectors';
export const ReviewsList = (props) => {
    const bookId = props.props;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadReviewsIfNotExist(bookId));
    }, [bookId]);
    const isSuccess = useSelector((state) => selectIsReviewsSuccess(state));

    if (!isSuccess) {
        return;
    }
    return <ul class="main-bottom">
        {
            bookId.reviews.map((id) =><Review key={id} id={id}/>)
        }
    </ul>
}
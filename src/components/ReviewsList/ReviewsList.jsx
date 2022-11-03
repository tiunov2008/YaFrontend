import {Review} from '../Review/Review';
import './ReviewsList.sass'
export const ReviewsList = (props) => {
    props = props.book.reviews
    return <ul class="main-bottom">
        {
            props.map((review) =><Review key={review.id} review={review}/>)
        }
    </ul>
}
import {Review} from './Review';
export const ReviewsList = (props) => {
    props = props.book.reviews
    console.log(props);
    return <ul class="main-bottom">
        {
            props.map((review) =><Review key={review.id} review={review}/>)
        }
    </ul>
}
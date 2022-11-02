export const Review = (props) => {
    let review = props.review
    return <li class="main-bottom_list--item">
        <div class="main-bottom_list--item_top">
            <h2 class="main-bottom_list--item_title">{review.name}</h2>
            <div class="main-bottom_list--item_stars">
                <img src="./img/star.png" alt="" class="main-bottom_list--item_star"/>
                <img src="./img/star.png" alt="" class="main-bottom_list--item_star"/>
                <img src="./img/star.png" alt="" class="main-bottom_list--item_star"/>
                <img src="./img/star.png" alt="" class="main-bottom_list--item_star"/>
                <img src="./img/no-star.png" alt="" class="main-bottom_list--item_star"/>
            </div>
        </div>
        <p class="main-bottom_list--item_text">{review.text}</p>
    </li>
}
export const Annotation = (props) => {
    props = props.annotation
        return <li class="main-right_list--item">
        <div class="main-right_list--item_left">
            <h2 class="main-right_list--item_title">Аннотация</h2>
            <p class="main-right_list--item_text">{props}</p>
        </div>
    </li>

}
import s from './Post.module.css'

const Post = (props) => {
    return (
        <div className={s.body}>
            <div className={s.body__item}>
                <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="image"/>
                <p className={s.body__textPost}>{props.age}</p>
            </div>
            <div className={s.body__likes}>
                <span>likes: {props.likesCount}</span>
            </div>
        </div>

    )
}
export default Post;
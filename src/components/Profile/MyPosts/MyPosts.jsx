import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElements = props.post.map(postEl => <Post likesCount = {postEl.likesCount} age = {postEl.message}/>)
    return (
        <div className={s.body}>
            <h2 className={s.title}>My posts</h2>
            <form className={s.form__body}>
                <textarea placeholder="Введите текст"></textarea>
                <button className={s.addBtn}>Добавить новый пост</button>
            </form>
            <h2 className={s.title}>Посты</h2>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )
}
export default MyPosts;
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.body}>
            <h2 className={s.title}>My posts</h2>
            <form className={s.form__body}>
                <textarea cols="30" rows="10"></textarea>
                <button className={s.addBtn}>Добавить новый пост</button>
            </form>
            <h2 className={s.title}>Посты</h2>
            <div className={s.posts}>
                <Post likesCol = '5' age = "Валера"/>
                <Post likesCol = '2' age = "Артёмка"/>
            </div>
        </div>
    )
}
export default MyPosts;
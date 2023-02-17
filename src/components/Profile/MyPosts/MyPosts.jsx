import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Текст поста 1', likesCount: 5},
        {id: 2, message: 'Текст поста 2', likesCount: 16},
        {id: 3, message: 'Текст поста 3', likesCount: 11},
        {id: 4, message: 'Текст поста 4', likesCount: 634},
        {id: 5, message: 'Текст поста 5', likesCount: 1},
        {id: 6, message: 'Текст поста 6', likesCount: 2},
    ]

    let postElements = postData.map(postEl => <Post likesCount = {postEl.likesCount} age = {postEl.message}/>)

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
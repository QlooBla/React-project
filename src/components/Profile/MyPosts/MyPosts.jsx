import c from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea cols="30" rows="10"></textarea>
                <button>Add new post</button>
            </div>
            <div>New Post</div>
            <div className={c.posts}>
                <Post likesCol = '5' age = "Валера"/>
                <Post likesCol = '2' age = "Артёмка"/>
            </div>
        </div>
    )
}
export default MyPosts;
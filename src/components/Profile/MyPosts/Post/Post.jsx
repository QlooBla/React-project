import c from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea cols="30" rows="10"></textarea>
                <button>Add new post</button>
            </div>
            <div>New Post</div>
            <div>
                <div className={c.item}>
                    <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="image"/>
                    Post 1
                </div>
                <div className={c.item}>Post 2</div>
            </div>
        </div>
    )
}
export default MyPosts;
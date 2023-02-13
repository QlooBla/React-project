import c from './MyPost.module.css'

const MyPost = () => {
    return (
        <div>
            my post
            <div>New Post</div>
            <div>
                <div className={c.item}>Post 1</div>
                <div className={c.item}>Post 2</div>
            </div>

        </div>
    )
}
export default MyPost;
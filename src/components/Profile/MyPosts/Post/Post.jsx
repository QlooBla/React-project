import c from './Post.module.css'

const Post = (props) => {
    return (
        <div className={c.body}>
            <div className={c.item}>
                <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt="image"/>
                {props.age}
            </div>
            <div>
                <span>likes: {props.likesCol}</span>
            </div>
        </div>

    )
}
export default Post;
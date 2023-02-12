import c from './Profile.module.css'

const Profile = () => {
    return (
        <div className={c.content}>
            <div>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                     alt="image"/>
            </div>
            <div>ava + description</div>
            <div>
                my post
                <div>New Post</div>
                <div>
                    <div className={c.item}>Post 1</div>
                    <div className={c.item}>Post 2</div>
                </div>
            </div>
        </div>
    )
}
export default Profile;
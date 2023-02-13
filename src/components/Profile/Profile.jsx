import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                     alt="image"/>
            </div>
            <div>ava + description</div>
            <MyPosts/>
        </div>
    )
}
export default Profile;
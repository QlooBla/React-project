import s from './ProfileInfo.module.css'
const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
                     alt="image"/>
            </div>
            <div className={s.description}>ava + description</div>
        </div>
    )
}
export default ProfileInfo;
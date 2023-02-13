import navbar from './Nav.module.css'

console.log(navbar)
const Nav = () => {
    return (
        <nav className={navbar.nav}>
            <ul>
                <li className={`${navbar.item} ${navbar.active}`}>
                    <a href="">Profile</a>
                </li>
                <li className={navbar.item}>
                    <a href="">Messages</a>
                </li>
                <li className={navbar.item}>
                    <a href="">News</a>
                </li>
                <li className={navbar.item}>
                    <a href="">Music</a>
                </li>
                <li className={navbar.item}>
                    <a href="">Settings</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
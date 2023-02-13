import navbar from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={navbar.nav}>
            <ul>
                <li className={`${navbar.item} ${navbar.active}`}>
                    <a href="/profile">Profile</a>
                </li>
                <li className={navbar.item}>
                    <a href="/dialogs">Messages</a>
                </li>
                <li className={navbar.item}>
                    <a href="/news">News</a>
                </li>
                <li className={navbar.item}>
                    <a href="/music">Music</a>
                </li>
                <li className={navbar.item}>
                    <a href="/settings">Settings</a>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
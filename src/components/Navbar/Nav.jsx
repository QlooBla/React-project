import navbar from './Nav.module.css'
import {NavLink} from "react-router-dom";

const setActive = ({isActive}) => isActive ? navbar.activeLink : navbar.item;

const Nav = () => {
    return (
        <nav className={navbar.nav}>
            <ul>
                <li className={navbar.item}>
                    <NavLink className={setActive} to="/profile">Profile</NavLink>
                </li>
                <li className={navbar.item}>
                    <NavLink className={setActive} to="/dialogs">Messages</NavLink>
                </li>
                <li className={navbar.item}>
                    <NavLink className={setActive} to="/news">News</NavLink>
                </li>
                <li className={navbar.item}>
                    <NavLink className={setActive} to="/music">Music</NavLink>
                </li>
                <li className={navbar.item}>
                    <NavLink className={setActive} to="/settings">Settings</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default Nav;
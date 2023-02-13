import s from './Header.module.css'
const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Wikimedia-logo.png/480px-Wikimedia-logo.png"
                alt="logo"/>
        </header>
    )
}
export default Header;
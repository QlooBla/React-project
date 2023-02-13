import './App.css';
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";

const App1 = () => {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <Profile />
        </div>
    )
}
export default App1;

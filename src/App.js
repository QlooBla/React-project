import './App.css';
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

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

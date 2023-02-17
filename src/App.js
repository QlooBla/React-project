import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/Header/Header";
import Nav from "./components/Navbar/Nav";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";



const App1 = (props) => {
    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className="container">
                    <div className="app-wrapper">
                        <Header/>
                        <Nav/>
                        <div className='content'>
                            <Routes>
                                <Route path='/profile' element = {<Profile valuePost = {props.postData} />}/>
                                <Route path='/dialogs/*' element={<Dialogs valueDialog = {props.dialogData} valueMessage = {props.messageData}/>}/>
                                <Route path='/news' element={<News/>}/>
                                <Route path='/music' element={<Music/>}/>
                                <Route path='/settings' element={<Settings/>}/>
                            </Routes>
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}
export default App1;

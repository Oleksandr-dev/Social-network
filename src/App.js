import './App.css';
import Profile from "./components/Profile/Profile";
import {Route, Routes} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import FindUsers from "./components/FindUsers/FindUsers";
import HeaderContainer from "./components/Header/HeaderContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import LoginContainer from "./components/Login/LoginContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    /*console.log("app")*/
    return (
        <div className="App-wrapper">
            <HeaderContainer />
            <NavbarContainer/>
            <div className="App-wrapper-content">
                <Routes>
                    <Route path="/profile/:userId" element={
                        <Profile />}
                    />
                    <Route path="/dialogs/*" element={
                        <DialogsContainer />}
                    />
                    <Route path="/find_users/*" element={
                        <FindUsers />}
                    />
                    <Route path="/news/*" element={
                        <News/>}
                    />
                    <Route path="/music/*" element={
                        <Music/>}
                    />
                    <Route path="/settings/*" element={
                        <Settings/>}
                    />
                    <Route path="/login/*" element={
                        <LoginContainer/>}
                    />
                </Routes>
            </div>
        </div>
    );
}

export default App;

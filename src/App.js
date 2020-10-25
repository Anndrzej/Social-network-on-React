import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/dialogs' render={ () => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/>}/> 
                    <Route path='/profile' render={ () => <Profile posts={props.state.posts}/>}/>
                    <Route path ='/news' render={ () => <News />} />
                    <Route path ='/music' render={ () => <Music />} />
                    <Route path ='/settings' render={ () => <Settings />} />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
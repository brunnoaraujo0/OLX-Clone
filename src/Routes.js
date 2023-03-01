import React from "react";
import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import SignIn from './pages/Signin';
import SignUp from './pages/SignUp';
import AdPage from './pages/AdPage';
import AddAd from './pages/AddAd';
import Ads from './pages/Ads'

import RouterHandler from "./components/RouterHandler";

const Rotas = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route exact path='/about' element={<About/>} />
            <Route exact path='/signin' element={<SignIn/>}/>
            <Route exact path='/signup' element={<SignUp/>}/>
            <Route exact path='/ad/:id' element={<AdPage/>}/>
            <Route exact path='/post-an-ad'  element={<RouterHandler><AddAd/></RouterHandler>}/>
            <Route exact path='/ads' element={<Ads/>}/>
            <Route exact path='*' element={<NotFound/>}/>

        </Routes>
    )

}
export default Rotas
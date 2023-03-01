import React from "react";
import {Route, Navigate} from 'react-router-dom'
import { isLogged } from "../helpers/AuthHandler";

export default ({children}) => {
    let logged = isLogged();
    
    
    
       if(logged){
            return children;
       }else {
        return <Navigate to = "/signin"/>
       }
}
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Profile from "../pages/Profile.js";
import {authRoutes, publicRoutes}  from "../routes";



const AppRouter = (props) => {
    const isAuth = props.state.auth.isAuth
    return(
        <Routes>
            {isAuth && authRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component state={props.state}/>} ></Route>
            ))}
            {publicRoutes.map(({path, Component}) => (
                <Route key={path} path={path} element={<Component state={props.state}/>} ></Route>
            ))}
             <Route path={'*'} element={<Profile state={props.state}/>}/>
        </Routes>
    )
}

export default AppRouter
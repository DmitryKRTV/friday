import React from "react"
import {HashRouter, NavLink, Route, Routes} from "react-router-dom"
import Login from "../../../n2-features/f1-auth/a1-login/Login";
import Registration from "../../../n2-features/f1-auth/a2-register/Registration";
import Profile from "../../../n2-features/f2-profile/Profile";
import Error404 from "./p10-Error404/Error404";
import RecoverPassword from "../../../n2-features/f1-auth/a3-recoverPassword/RecoverPassword";
import EnterNewPassword from "../../../n2-features/f1-auth/a4-enterNewPassword/EnterNewPassword";
import TestSuperComponents from "../../../n2-features/f0-test/TestSuperComponents";

export const PATH = {
    LOGIN: "/login",
    REGISTER: "/register",
    PROFILE: "/profile",
    RECOVERPASSWORD: "/recPass",
    ENTERNEWPASSWORD:"/EnterNewPassword",
    TESTSUPERCOMPONENTS: "/test"

}

const Pages = () => {
    return (
        <div>
            <HashRouter basename="/">
             {/* для gh-pages нужен HashRouter*/}
                <NavLink to={PATH.LOGIN}>Login </NavLink>
                <NavLink to={PATH.REGISTER}>Registration </NavLink>
                <NavLink to={PATH.PROFILE}>Profile </NavLink>
                <NavLink to={PATH.RECOVERPASSWORD}>RecoverPassword </NavLink>
                <NavLink to={PATH.ENTERNEWPASSWORD}>EnterNewPassword </NavLink>
                <NavLink to={PATH.TESTSUPERCOMPONENTS}>Test</NavLink>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.REGISTER} element={<Registration/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.RECOVERPASSWORD} element={<RecoverPassword/>}/>
                    <Route path={PATH.ENTERNEWPASSWORD} element={<EnterNewPassword/>}/>
                    <Route path={PATH.TESTSUPERCOMPONENTS} element={<TestSuperComponents/>}/>

                    <Route path={"/*"} element={<Error404/>}/>
                </Routes>
            </HashRouter>
        </div>
    )
}

export default Pages

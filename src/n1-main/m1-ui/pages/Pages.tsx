import React from "react"
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom"
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
            <BrowserRouter>
             {/* для gh-pages нужен HashRouter*/}
                <Routes>
                    <Route path={"/friday"} element={<Login/>}/>
                    <Route path={PATH.LOGIN} element={<Login/>}/>
                    <Route path={PATH.REGISTER} element={<Registration/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}/>
                    <Route path={PATH.RECOVERPASSWORD} element={<RecoverPassword/>}/>
                    <Route path={PATH.ENTERNEWPASSWORD} element={<EnterNewPassword/>}/>
                    <Route path={PATH.TESTSUPERCOMPONENTS} element={<TestSuperComponents/>}/>

                    <Route path={"*"} element={<Error404/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Pages

import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sidebar from './Sidebar'
import Content from './Content'
import Categories from './Categories'
import Login from './Login'
import LogOut from './LogOut'

import "../resources/css/sidebar.css"
import "../resources/css/stylesheet.css"

export default function Structure({ activeClass, setActiveClass, loginForm, setLoginForm, setRegisterForm, isLogIn }) {

    const [tableNo, setTableNo] = useState();

    const [search, setSearch] = useState("")

    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Sidebar activeClass={activeClass} setTableNo={setTableNo} setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} isLogIn={isLogIn} />

                <Routes>
                    <Route exact path="" element={<Content setActiveClass={setActiveClass} tableNo={tableNo} search={search} setSearch={setSearch} />} />
                    <Route exact path="/categories" element={<Categories setActiveClass={setActiveClass} tableNo={tableNo} search={search} setSearch={setSearch} />} />
                    <Route exact path="/login" element={<Login setActiveClass={setActiveClass} loginForm={loginForm} setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />} />
                    <Route exact path="/signup" element={<Login setActiveClass={setActiveClass} loginForm={loginForm} setLoginForm={setLoginForm} setRegisterForm={setRegisterForm} />} />
                    <Route exact path="/logout" element={<LogOut />} />
                </Routes>
            </BrowserRouter>

        </div>
    )
}

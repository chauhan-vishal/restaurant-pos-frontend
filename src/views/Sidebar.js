import React from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

export default function Sidebar({ activeClass, setTableNo, setLoginForm, setRegisterForm, isLogIn }) {

    const [useSe] = useSearchParams();

    setTableNo(useSe.get("tableNo"))

    return (
        <div className="sidebar">
            <div className="icons">
                <ul>
                    <li className={activeClass == "home" ? "active" : ""}> <NavLink to="/"> <img src="/resources/icons/home.svg" className="menu-icon" alt="home" /> </NavLink> </li>
                    <li className={activeClass == "categories" ? "active" : ""}> <NavLink to="/categories"> <img src="/resources/icons/menu.svg" className="menu-icon" alt="menu" /> </NavLink> </li>
                    {isLogIn && <li className={activeClass == "loginform" ? "active" : ""}> <NavLink to="/login"> <img src="/resources/icons/login.svg" className="menu-icon" alt="bookmark" style={{ width: "25px" }} /> </NavLink> </li>}
                    {!isLogIn && <li> <NavLink to="/logout"> <img src="/resources/icons/logout.svg" className="menu-icon" alt="menu" style={{ width: "25px" }} /> </NavLink> </li>}

                    {/*<li> <NavLink> <img src="/resources/icons/cart.svg" className="menu-icon" alt="cart" /> </NavLink> </li> */}
                </ul>
            </div>
        </div >
    )
}

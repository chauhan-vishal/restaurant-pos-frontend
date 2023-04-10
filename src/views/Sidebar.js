import React from 'react'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src="" alt="logo"/>
            </div>
            <div className="icons">
                <ul>
                    <li className="active"> <img src="/resources/icons/home.svg" className="menu-icon" alt="home" /> </li>
                    <li> <img src="/resources/icons/menu.svg" className="menu-icon" alt="menu" /> </li>
                    <li> <img src="/resources/icons/pie.svg" className="menu-icon" alt="pie" /> </li>
                    <li> <img src="/resources/icons/bookmark.svg" className="menu-icon" alt="bookmark" /> </li>
                    <li> <img src="/resources/icons/cart.svg" className="menu-icon" alt="cart" /> </li>
                </ul>
            </div>
        </div>
    )
}

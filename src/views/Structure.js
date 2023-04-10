import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Sidebar from './Sidebar'
import Content from './Content'

import "../resources/css/sidebar.css"
import "../resources/css/stylesheet.css"

export default function Structure() {
    return (
        <div className="container-fluid">
            <Sidebar />
            <Content />
        </div>
    )
}

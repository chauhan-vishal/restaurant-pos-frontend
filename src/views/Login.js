import React, { useState } from 'react'

import LoginForm from "./components/LoginForm"
import RegisterForm from "./components/RegisterForm"

import "../resources/landrick/css/style.css"

export default function Login({ setActiveClass, loginForm, setLoginForm, setRegisterForm, setIsLogIn }) {

    setActiveClass("loginform")

    const currentPath = window.location.pathname

    if (currentPath == "/login") {
        setLoginForm(true)
        setRegisterForm(false)
    }
    else if (currentPath == "/signup") {
        setRegisterForm(true)
        setLoginForm(false)
    }

    const [formData, setFormData] = useState(null)

    const updateFormData = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const submitLoginForm = (e) => {
        e.preventDefault();

        const sub_path = (loginForm) ? "api/customer/login" : "api/customer/new"

        formData["status"] = "active"

        fetch(process.env.REACT_APP_API_URL + sub_path, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(res => {
                alert(res.msg)
                if (res.success) {
                    if (loginForm && res.success) {

                        localStorage.setItem("login", true)
                        localStorage.setItem("token", res.token)
                        localStorage.setItem("customerName", res.document.name)
                        localStorage.setItem("customerContact", res.document.contact)
                        localStorage.setItem("customerEmail", res.document.email)

                        window.location.href = "/"
                    }
                    if (!loginForm && res.success) {
                        setIsLogIn(true)
                        window.location.href = "/login"
                    }
                }
                else {
                    window.location.reload()
                }
            })
    }

    return (
        <section className="cover-user bg-white">
            <div className="container-fluid px-0">
                <div className="row g-0 position-relative">
                    <div className="col-lg-4 cover-my-30 order-2">
                        <div className="cover-user-img d-flex align-items-center">
                            <div className="row">
                                <div className="col-12">
                                    <div className="card login-page border-0" style={{ zIndex: "1" }}>
                                        <div className="card-body p-0">
                                            <h4 className="card-title text-center">
                                                {
                                                    loginForm ? "Login" : "Sign Up"
                                                }
                                            </h4>

                                            {
                                                loginForm
                                                    ? <LoginForm updateFormData={updateFormData} submitLoginForm={submitLoginForm} />
                                                    : <RegisterForm updateFormData={updateFormData} submitLoginForm={submitLoginForm} />
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8 offset-lg-4 padding-less img order-1" style={{ backgroundImage: "url('./resources/images/background_img.jpg')" }} data-jarallax='{"speed": 0.5}'>&nbsp;</div>
                </div>
            </div>
        </section >
    )
}

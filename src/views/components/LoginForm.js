import React from 'react'
import { NavLink } from 'react-router-dom'

export default function LoginForm({ updateFormData, submitLoginForm }) {
    return (
        <form className="login-form mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label className="form-label">Email ID <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                            <i data-feather="user" className="fea icon-sm icons"></i>
                            <input type="email" className="form-control ps-5" placeholder="Email ID :" name="email" required="" onChange={updateFormData} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="mb-3">
                        <label className="form-label">Password <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                            <i data-feather="key" className="fea icon-sm icons"></i>
                            <input type="password" className="form-control ps-5" name="password" placeholder="Password :" required="" onChange={updateFormData} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="d-flex justify-content-between">
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                            </div>
                        </div>
                        <p className="forgot-pass mb-0"><a href="reset-password-cover.html" className="text-dark fw-bold">Forgot password ?</a></p>
                    </div>
                </div>

                <div className="col-lg-12 mb-2">
                    <div className="d-grid">
                        <button onClick={submitLoginForm} className="btn btn-primary">Sign in</button>
                    </div>
                </div>

                <div className="col-lg-12 mb-0">
                    <div className="d-flex justify-content-between">
                        <p className='mb-0'>Don't have an account ?</p>
                        <a href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

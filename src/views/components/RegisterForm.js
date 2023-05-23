import React from 'react'

export default function RegisterForm({ updateFormData, submitLoginForm }) {
    return (
        <form className="login-form mt-4">
            <div className="row">
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label className="form-label">Full Name <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                            <i data-feather="user" className="fea icon-sm icons"></i>
                            <input type="email" className="form-control ps-5" placeholder="Full Name :" name="name" required="" onChange={updateFormData} />
                        </div>
                    </div>
                </div>
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
                    <div className="mb-3">
                        <label className="form-label">Contact <span className="text-danger">*</span></label>
                        <div className="form-icon position-relative">
                            <i data-feather="user" className="fea icon-sm icons"></i>
                            <input type="email" className="form-control ps-5" placeholder="Contact :" name="contact" required="" onChange={updateFormData} />
                        </div>
                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="mb-3">
                        <label className="form-label">Gender <span className="text-danger">*</span></label>
                        <div className="custom-control custom-radio custom-control-inline">
                            <div className="form-check mb-0 me-3" style={{ display: "inline-block" }}>
                                <input className="form-check-input" type="radio" name="gender" value="M" id="rbdMale" onChange={updateFormData} />
                                <label className="form-check-label" htmlFor="rbdMale">Male</label>
                            </div>
                            <div className="form-check mb-0 me-3" style={{ display: "inline-block" }}>
                                <input className="form-check-input" type="radio" name="gender" value="F" id="rbdFemale" onChange={updateFormData} />
                                <label className="form-check-label" htmlFor="rbdFemale">Female</label>
                            </div>
                            <div className="form-check mb-0" style={{ display: "inline-block" }}>
                                <input className="form-check-input" type="radio" name="gender" value="O" id="rbdOther" onChange={updateFormData} />
                                <label className="form-check-label" htmlFor="rbdOther">Other</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div>&nbsp;</div>

                <div className="col-lg-12 mb-2">
                    <div className="d-grid">
                        <button onClick={submitLoginForm} className="btn btn-primary">Sign Up</button>
                    </div>
                </div>

                <div className="col-lg-12 mb-0">
                    <div className="d-flex justify-content-between">
                        <p className='mb-0'>Alredy have an account ?</p>
                        <a href="/login">Log In</a>
                    </div>
                </div>
            </div>
        </form>
    )
}

import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/img/Logo_google_g_icon.png";
import "../css/Login.css"; // Reuse login styles

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        console.log("Signing up with:", email, password);
    };

    return (
        <div className="d-flex align-items-center justify-content-center login-page">
            <div className="card shadow p-4 bg-white bg-opacity-90" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4 text-primary fw-bold">Create your TrainWise account</h3>

                <form onSubmit={handleSignup}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Create a password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Sign Up
                    </button>

                    <div className="text-center mt-4">
                        <small className="text-muted">Already have an account?</small>
                        <Link to="/login" className="text-decoration-none text-primary fw-semibold"> Log In</Link>
                    </div>
                </form>

                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="px-2 text-muted">or continue with</span>
                    <hr className="flex-grow-1" />
                </div>

                <div className="d-grid gap-2 mt-3">
                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <img
                            src={googleLogo}
                            alt="Google"
                            style={{ width: "25px", height: "25px", marginRight: "5px" }}
                        />
                        <span className="fw-medium text-muted">Sign up with Google</span>
                    </button>

                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <i className="bi bi-apple fs-5 me-2 text-dark"></i>
                        <span className="fw-medium text-muted">Sign up with Apple</span>
                    </button>

                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <i className="bi bi-facebook fs-5 me-2 text-primary"></i>
                        <span className="fw-medium text-muted">Sign up with Facebook</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

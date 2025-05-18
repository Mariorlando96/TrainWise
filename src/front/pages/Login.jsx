import React, { useState } from "react";
import { Link } from "react-router-dom";
import googleLogo from "../assets/img/Logo_google_g_icon.png";
import loginBackground from "../assets/img/login_bg.jpg";
import "../css/Login.css";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="d-flex align-items-center justify-content-center bg-light login-page">
            <div className="card shadow p-4 bg-white bg-opacity-90" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4 text-primary fw-bold">Login to TrainWise</h3>
                <form onSubmit={handleLogin}>
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

                    <div className="mb-1">
                        <label className="form-label fw-semibold">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="d-flex justify-content-end mb-3">
                        <Link to="/forgot-password" className="text-decoration-none text-primary small">
                            Forgot password?
                        </Link>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Log In
                    </button>

                    {/* Signup link */}
                    <div className="text-center mt-4">
                        <small className="text-muted">Don’t have an account?</small>
                        <Link to="/signup" className="text-decoration-none text-primary fw-semibold"> Sign Up</Link>
                    </div>
                </form>

                {/* Divider */}
                <div className="d-flex align-items-center my-4">
                    <hr className="flex-grow-1" />
                    <span className="px-2 text-muted">or continue with</span>
                    <hr className="flex-grow-1" />
                </div>

                {/* Social Buttons */}
                <div className="d-grid gap-2 mt-3">
                    {/* Google Button */}
                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <img
                            src={googleLogo}
                            alt="Google"
                            style={{ width: "25px", height: "25px", marginRight: "5px" }}
                        />
                        <span className="fw-medium text-muted">Sign in with Google</span>
                    </button>

                    {/* Apple Button */}
                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <i className="bi bi-apple fs-5 me-2 text-dark"></i>
                        <span className="fw-medium text-muted">Sign in with Apple</span>
                    </button>

                    {/* Facebook Button */}
                    <button
                        type="button"
                        className="btn w-100 bg-white border rounded d-flex align-items-center justify-content-center social-btn"
                    >
                        <i className="bi bi-facebook fs-5 me-2 text-primary"></i>
                        <span className="fw-medium text-muted">Sign in with Facebook</span>
                    </button>
                </div>

            </div>
        </div>
    );
};

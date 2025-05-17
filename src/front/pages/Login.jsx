import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with:", email, password);
    };

    return (
        <div className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: "100vh" }}>
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
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
                <div className="d-grid gap-2">
                    <button className="btn btn-outline-danger" type="button">
                        <i className="bi bi-google me-2"></i> Sign in with Google
                    </button>
                    <button className="btn btn-outline-dark" type="button">
                        <i className="bi bi-apple me-2"></i> Sign in with Apple
                    </button>
                    <button className="btn btn-outline-primary" type="button">
                        <i className="bi bi-facebook me-2"></i> Sign in with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

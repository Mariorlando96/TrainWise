import React from "react";

import { Link } from "react-router-dom";

export const LandingPage = () => {
    return (
        <>
            <header className="bg-light text-center py-5">
                <div className="container">
                    <h1 className="display-4 fw-bold text-dark">Train Smarter. Lift Harder.</h1>
                    <p className="lead text-muted">
                        Track your workouts, monitor your gains, and dominate your fitness goals with TrainWise.
                    </p>
                    <Link to="/signup" className="btn btn-primary btn-lg mt-3">
                        Get Started
                    </Link>
                </div>
            </header>

            <section className="py-5 bg-white text-center">
                <div className="container">
                    <h2 className="mb-4 fw-bold">Why Choose TrainWise?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <i className="bi bi-clipboard-check fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Smart Workout Tracking</h5>
                                <p className="text-muted">Log sets, reps, and weight effortlessly to monitor your strength progression.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <i className="bi bi-bar-chart-line fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Progress Visualization</h5>
                                <p className="text-muted">Visual graphs and charts to keep you motivated and goal-oriented.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded shadow-sm h-100">
                                <i className="bi bi-clock-history fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">Routine Planning</h5>
                                <p className="text-muted">Plan your weekly splits and workout routines with ease and flexibility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-5 bg-light text-center">
                <div className="container">
                    <h2 className="mb-4 fw-bold">How It Works</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <i className="bi bi-person-plus fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">1. Create Your Account</h5>
                                <p className="text-muted">Sign up and set your training preferences and goals.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <i className="bi bi-calendar-check fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">2. Build Your Routine</h5>
                                <p className="text-muted">Design your weekly workout split or use a ready-made template.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="p-4 border rounded bg-white shadow-sm h-100">
                                <i className="bi bi-graph-up-arrow fs-1 text-primary mb-3"></i>
                                <h5 className="fw-bold">3. Track & Progress</h5>
                                <p className="text-muted">Log workouts, monitor progress, and crush your goals with data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

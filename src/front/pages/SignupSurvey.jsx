import React, { useState } from "react";
import "../css/Login.css";

export const SignupSurvey = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: "",
        gender: "",
        heightFeet: "",
        heightInches: "",
        weight: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submit data:", formData);
        // TODO: Send to backend
    };

    return (
        <div className="d-flex align-items-center justify-content-center login-page">
            <div className="card shadow p-4 bg-white bg-opacity-90" style={{ maxWidth: "500px", width: "100%" }}>
                <h3 className="text-center mb-4 text-primary fw-bold">Create your TrainWise Account</h3>

                <form onSubmit={handleSubmit}>
                    {/* Step 1: Email and Password */}
                    {step === 1 && (
                        <>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}

                    {/* Step 2: Name and Gender */}
                    {step === 2 && (
                        <>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Gender</label>
                                <select
                                    name="gender"
                                    className="form-select"
                                    value={formData.gender}
                                    onChange={handleChange}
                                >
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </>
                    )}

                    {/* Step 3: Height & Weight */}
                    {step === 3 && (
                        <>
                            <div className="mb-3">
                                <label className="form-label fw-semibold">Height</label>
                                <div className="d-flex gap-2">
                                    <input
                                        type="number"
                                        name="heightFeet"
                                        className="form-control"
                                        placeholder="Feet"
                                        min="3"
                                        max="8"
                                        value={formData.heightFeet}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="number"
                                        name="heightInches"
                                        className="form-control"
                                        placeholder="Inches"
                                        min="0"
                                        max="11"
                                        value={formData.heightInches}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="mb-3">
                                <label className="form-label fw-semibold">Weight (lbs)</label>
                                <input
                                    type="number"
                                    name="weight"
                                    className="form-control"
                                    placeholder="e.g. 180"
                                    min="50"
                                    max="600"
                                    value={formData.weight}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </>
                    )}


                    {/* Navigation Buttons */}
                    <div className="d-flex justify-content-between mt-4">
                        {step > 1 && (
                            <button type="button" className="btn btn-outline-secondary" onClick={prevStep}>
                                Back
                            </button>
                        )}
                        {step < 7 && (
                            <button type="button" className="btn btn-primary ms-auto" onClick={nextStep}>
                                Next
                            </button>
                        )}
                        {step === 7 && (
                            <button type="submit" className="btn btn-success ms-auto">
                                Create Account
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

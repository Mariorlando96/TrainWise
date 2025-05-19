import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import "./styles.css";

export const Step7_Height = ({ heightData = {}, onNext, onBack }) => {
    const [unit, setUnit] = useState(heightData.unit || "imperial");
    const [feet, setFeet] = useState(heightData.feet || "");
    const [inches, setInches] = useState(heightData.inches || "");
    const [cm, setCm] = useState(heightData.cm || "");

    const handleContinue = () => {
        if (unit === "imperial" && feet && inches !== "") {
            onNext({ height: { unit, feet, inches } });
        } else if (unit === "metric" && cm) {
            onNext({ height: { unit, cm } });
        }
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={50} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What’s your height?</h2>

                {/* Unit Toggle */}
                <div className="d-flex justify-content-center gap-2 mb-4">
                    <button
                        className={`btn ${unit === "imperial" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setUnit("imperial")}
                    >
                        ft / in
                    </button>
                    <button
                        className={`btn ${unit === "metric" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setUnit("metric")}
                    >
                        cm
                    </button>
                </div>

                {/* Inputs */}
                <div className="row justify-content-center">
                    {unit === "imperial" ? (
                        <>
                            <div className="col-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Feet"
                                    value={feet}
                                    onChange={(e) => setFeet(e.target.value)}
                                    min="0"
                                />
                            </div>
                            <div className="col-4">
                                <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Inches"
                                    value={inches}
                                    onChange={(e) => setInches(e.target.value)}
                                    min="0"
                                    max="11"
                                />
                            </div>
                        </>
                    ) : (
                        <div className="col-6">
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Centimeters"
                                value={cm}
                                onChange={(e) => setCm(e.target.value)}
                                min="50"
                            />
                        </div>
                    )}
                </div>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        onClick={handleContinue}
                        disabled={
                            (unit === "imperial" && (!feet || inches === "")) ||
                            (unit === "metric" && !cm)
                        }
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

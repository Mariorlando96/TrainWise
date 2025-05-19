import React, { useEffect, useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import "./styles.css";

export const Step8_Weight = ({ weightData = {}, heightData = {}, onNext, onBack }) => {
    const [unit, setUnit] = useState(weightData.unit || "imperial");
    const [lbs, setLbs] = useState(weightData.lbs || "");
    const [kg, setKg] = useState(weightData.kg || "");
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const calculateBMI = () => {
            let heightCm;
            let weightKg;

            // Get height in cm
            if (heightData.unit === "imperial") {
                const totalInches = Number(heightData.feet || 0) * 12 + Number(heightData.inches || 0);
                heightCm = totalInches * 2.54;
            } else {
                heightCm = Number(heightData.cm || 0);
            }

            // Get weight in kg
            if (unit === "imperial") {
                weightKg = Number(lbs) * 0.453592;
            } else {
                weightKg = Number(kg);
            }

            // Calculate BMI
            if (heightCm > 0 && weightKg > 0) {
                const heightM = heightCm / 100;
                const result = weightKg / (heightM * heightM);
                setBmi(result.toFixed(1));

                if (result < 18.5) setStatus("Underweight");
                else if (result < 24.9) setStatus("Normal weight");
                else if (result < 29.9) setStatus("Overweight");
                else setStatus("Obese");
            } else {
                setBmi(null);
                setStatus("");
            }
        };

        calculateBMI();
    }, [lbs, kg, unit, heightData]);

    const handleContinue = () => {
        if (unit === "imperial" && lbs) {
            onNext({ weight: { unit, lbs } });
        } else if (unit === "metric" && kg) {
            onNext({ weight: { unit, kg } });
        }
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={57} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What's your current weight?</h2>

                {/* Unit Toggle */}
                <div className="d-flex justify-content-center gap-2 mb-4">
                    <button
                        className={`btn ${unit === "imperial" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setUnit("imperial")}
                    >
                        lbs
                    </button>
                    <button
                        className={`btn ${unit === "metric" ? "btn-primary" : "btn-outline-primary"}`}
                        onClick={() => setUnit("metric")}
                    >
                        kg
                    </button>
                </div>

                {/* Input */}
                <div className="row justify-content-center">
                    <div className="col-6">
                        {unit === "imperial" ? (
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Pounds"
                                value={lbs}
                                onChange={(e) => setLbs(e.target.value)}
                                min="50"
                            />
                        ) : (
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Kilograms"
                                value={kg}
                                onChange={(e) => setKg(e.target.value)}
                                min="25"
                            />
                        )}
                    </div>
                </div>

                {bmi && (
                    <div className="text-center mt-3">
                        <h5 className="mb-1">Your BMI: <strong>{bmi}</strong></h5>
                        <p className="text-muted mb-0">Category: <strong>{status}</strong></p>
                    </div>
                )}

                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        onClick={handleContinue}
                        disabled={
                            (unit === "imperial" && !lbs) ||
                            (unit === "metric" && !kg)
                        }
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import "./styles.css";

export const Step9_GoalWeight = ({ weightData = {}, goalWeightData = {}, onNext, onBack }) => {
    const defaultUnit = weightData.unit || "imperial";
    const [unit, setUnit] = useState(goalWeightData.unit || defaultUnit);
    const [lbs, setLbs] = useState(goalWeightData.lbs || "");
    const [kg, setKg] = useState(goalWeightData.kg || "");

    const getWeightInKg = () => {
        if (unit === "imperial") return Number(lbs || 0) * 0.453592;
        else return Number(kg || 0);
    };

    const getCurrentWeightInKg = () => {
        if (weightData.unit === "imperial") return Number(weightData.lbs || 0) * 0.453592;
        else return Number(weightData.kg || 0);
    };

    const goalKg = getWeightInKg();
    const currentKg = getCurrentWeightInKg();
    const lossPercentage = ((currentKg - goalKg) / currentKg) * 100;

    const isValidGoal = currentKg > 0 && goalKg > 0 && lossPercentage >= 4 && lossPercentage <= 15;

    const handleContinue = () => {
        if (unit === "imperial" && lbs) {
            onNext({ goalWeight: { unit, lbs } });
        } else if (unit === "metric" && kg) {
            onNext({ goalWeight: { unit, kg } });
        }
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={71} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What’s your goal weight?</h2>

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

                {isValidGoal && (
                    <div className="alert alert-light mt-3 text-start">
                        <strong>💡 That’s a great goal!</strong> You’re aiming to reduce about {lossPercentage.toFixed(1)}% of your current weight.
                        <p className="mt-2 mb-0 text-muted">
                            Even modest weight loss can lead to impactful health benefits like improved blood pressure, cholesterol, and energy levels.
                        </p>
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

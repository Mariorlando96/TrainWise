import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { FaClock } from "react-icons/fa";
import "./styles.css";

const options = [
    { id: "under_30", label: "Under 30 minutes" },
    { id: "30_45", label: "30 – 45 minutes" },
    { id: "45_60", label: "45 – 60 minutes" },
    { id: "over_60", label: "Over 60 minutes" },
];

export const Step13_WorkoutDuration = ({ workoutDuration = "", onNext, onBack }) => {
    const [selected, setSelected] = useState(workoutDuration);

    const handleContinue = () => {
        if (selected) onNext({ workoutDuration: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={98} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What’s your ideal workout duration?</h2>

                <div className="goal-options">
                    {options.map((option) => (
                        <div
                            key={option.id}
                            className={`goal-card ${selected === option.id ? "selected" : ""}`}
                            onClick={() => setSelected(option.id)}
                        >
                            <div className="goal-icon"><FaClock size={32} /></div>
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        onClick={handleContinue}
                        disabled={!selected}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

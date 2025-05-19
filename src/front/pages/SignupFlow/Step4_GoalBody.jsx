import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { FaUserAlt, FaUser, FaUserTie } from "react-icons/fa";
import "./styles.css";

const goalBodies = [
    {
        id: "lean_muscular",
        label: "Lean & Muscular",
        icon: <FaUserAlt size={40} />,
    },
    {
        id: "fit_athletic",
        label: "Fit & Athletic",
        icon: <FaUser size={40} />,
    },
    {
        id: "bulk_muscle",
        label: "Bulky & Strong",
        icon: <FaUserTie size={40} />,
    },
];

export const Step4_GoalBody = ({ selectedGoalBody, onNext, onBack }) => {
    const [selected, setSelected] = useState(selectedGoalBody || "");

    const handleContinue = () => {
        if (selected) onNext({ goalBodyType: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={28} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What's your goal body type?</h2>

                <div className="goal-options">
                    {goalBodies.map((type) => (
                        <div
                            key={type.id}
                            className={`goal-card ${selected === type.id ? "selected" : ""}`}
                            onClick={() => setSelected(type.id)}
                        >
                            <div className="goal-icon">{type.icon}</div>
                            <span>{type.label}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        disabled={!selected}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

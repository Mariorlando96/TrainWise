import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { FaSeedling, FaDumbbell, FaStar } from "react-icons/fa";
import "./styles.css";

const levels = [
    { id: "beginner", label: "Beginner", icon: <FaSeedling size={40} /> },
    { id: "intermediate", label: "Intermediate", icon: <FaDumbbell size={40} /> },
    { id: "advanced", label: "Advanced", icon: <FaStar size={40} /> },
];

export const Step6_FitnessLevel = ({ selectedLevel, onNext, onBack }) => {
    const [selected, setSelected] = useState(selectedLevel || "");

    const handleContinue = () => {
        if (selected) onNext({ fitnessLevel: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={42} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">What's your fitness level?</h2>

                <div className="goal-options">
                    {levels.map((level) => (
                        <div
                            key={level.id}
                            className={`goal-card ${selected === level.id ? "selected" : ""}`}
                            onClick={() => setSelected(level.id)}
                        >
                            <div className="goal-icon">{level.icon}</div>
                            <span>{level.label}</span>
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

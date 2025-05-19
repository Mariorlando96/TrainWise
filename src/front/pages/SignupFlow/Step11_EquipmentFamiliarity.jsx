import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { FaSmile, FaMeh, FaFrown } from "react-icons/fa";
import "./styles.css";

const levels = [
    {
        id: "beginner",
        label: "Beginner",
        icon: <FaFrown size={32} />,
    },
    {
        id: "intermediate",
        label: "Intermediate",
        icon: <FaMeh size={32} />,
    },
    {
        id: "advanced",
        label: "Advanced",
        icon: <FaSmile size={32} />,
    },
];

export const Step11_EquipmentFamiliarity = ({ equipmentFamiliarity = "", onNext, onBack }) => {
    const [selected, setSelected] = useState(equipmentFamiliarity || "");

    const handleContinue = () => {
        if (selected) onNext({ equipmentFamiliarity: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={85} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">How familiar are you with gym equipment?</h2>

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

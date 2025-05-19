import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import "./styles.css";
import { FaUserAlt, FaUser, FaUserTie } from "react-icons/fa";

// Placeholder body type images (replace with real paths later)
const bodyTypes = [
    {
        id: "skinny",
        label: "Slim / Ectomorph",
        icon: <FaUserAlt size={40} />,
    },
    {
        id: "average",
        label: "Average / Mesomorph",
        icon: <FaUser size={40} />,
    },
    {
        id: "overweight",
        label: "Stocky / Endomorph",
        icon: <FaUserTie size={40} />,
    },
];


export const Step3_CurrentBody = ({ selectedBodyType, onNext, onBack }) => {
    const [selected, setSelected] = useState(selectedBodyType || "");

    const handleContinue = () => {
        if (selected) onNext({ currentBodyType: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={21} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">Which describes your current build best?</h2>

                <div className="goal-options">
                    {bodyTypes.map((type) => (
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

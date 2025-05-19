// Step2_Goal.jsx
import React from "react";
import "./styles.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaWeight, FaDumbbell, FaRunning, FaHeartbeat, FaAppleAlt, FaChild } from "react-icons/fa";
import ProgressHeader from "../../components/ProgressHeader";

const goals = [
    { id: "lose_weight", label: "Lose weight", icon: <FaWeight size={50} /> },
    { id: "build_muscle", label: "Gain muscle & build strength", icon: <FaDumbbell size={50} /> },
    { id: "lean_defined", label: "Get lean & defined", icon: <FaHeartbeat size={50} /> },
    { id: "endurance", label: "Improve endurance", icon: <FaRunning size={50} /> },
    { id: "healthy", label: "Feel healthier", icon: <FaAppleAlt size={50} /> },
    { id: "flexibility", label: "Increase flexibility", icon: <FaChild size={50} /> },
];


export const Step2_Goal = ({ selectedGoal, onNext, onBack }) => {
    const handleSelect = (goalId) => {
        onNext({ goal: goalId });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                {/* Progress Header */}
                <ProgressHeader progressPercent={14} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title">What's your main goal for training?</h2>

                <div className="goal-options">
                    {goals.map((goal) => (
                        <div
                            key={goal.id}
                            className={`goal-card ${selectedGoal === goal.id ? "selected" : ""}`}
                            onClick={() => handleSelect(goal.id)}
                        >
                            <div className="goal-icon">{goal.icon}</div>
                            <span className="ms-2">{goal.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

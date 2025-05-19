import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { GiBiceps, GiChestArmor, GiMuscleUp, GiLeg, GiAbdominalArmor } from "react-icons/gi";
import "./styles.css";

const zones = [
    { id: "abs", label: "Abs", icon: <GiAbdominalArmor size={40} /> },
    { id: "chest", label: "Chest", icon: <GiChestArmor size={40} /> },
    { id: "arms", label: "Arms", icon: <GiBiceps size={40} /> },
    { id: "legs", label: "Legs", icon: <GiLeg size={40} /> },
    { id: "shoulders", label: "Shoulders", icon: <GiMuscleUp size={40} /> },
];

export const Step5_TargetZones = ({ selectedZones = [], onNext, onBack }) => {
    const [selected, setSelected] = useState(selectedZones);

    const toggleZone = (id) => {
        setSelected((prev) =>
            prev.includes(id) ? prev.filter((z) => z !== id) : [...prev, id]
        );
    };

    const handleContinue = () => {
        if (selected.length > 0) onNext({ targetZones: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper">
                <ProgressHeader progressPercent={35} canGoBack={true} onBack={onBack} />

                <h2 className="signup-title text-center">Which areas do you want to focus on?</h2>

                <div className="goal-options">
                    {zones.map((zone) => (
                        <div
                            key={zone.id}
                            className={`goal-card ${selected.includes(zone.id) ? "selected" : ""}`}
                            onClick={() => toggleZone(zone.id)}
                        >
                            <div className="goal-icon">{zone.icon}</div>
                            <span>{zone.label}</span>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        disabled={selected.length === 0}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
};

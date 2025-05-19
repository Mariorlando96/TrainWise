import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import "./styles.css";

export const Step12_TrainingFrequency = ({ frequency = "", onNext, onBack }) => {
  const [selected, setSelected] = useState(frequency);

  const handleContinue = () => {
    if (selected) onNext({ trainingFrequency: selected });
  };

  return (
    <div className="signup-step-container">
      <div className="signup-step-wrapper">
        <ProgressHeader progressPercent={92} canGoBack={true} onBack={onBack} />

        <h2 className="signup-title text-center">How many days a week do you want to train?</h2>

        <div className="d-flex justify-content-center flex-wrap gap-2 mt-4 mb-4">
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <div
              key={day}
              className={`frequency-box ${selected === day ? "selected" : ""}`}
              onClick={() => setSelected(day)}
            >
              {day}
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

import React, { useState } from "react";
import ProgressHeader from "../../components/ProgressHeader";
import { FaHome, FaDumbbell } from "react-icons/fa";
import "./styles.css";

export const Step10_AgeLocation = ({ ageLocationData = {}, onNext, onBack }) => {
  const [age, setAge] = useState(ageLocationData.age || "");
  const [location, setLocation] = useState(ageLocationData.location || "");

  const handleContinue = () => {
    if (age && location) {
      onNext({ ageLocation: { age, location } });
    }
  };

  return (
    <div className="signup-step-container">
      <div className="signup-step-wrapper">
        <ProgressHeader progressPercent={78} canGoBack={true} onBack={onBack} />

        <h2 className="signup-title text-center">Tell us a little more</h2>

        {/* Age Input */}
        <div className="text-center mb-4">
          <label htmlFor="age" className="form-label fw-semibold">Your Age</label>
          <input
            type="number"
            id="age"
            className="form-control text-center"
            style={{ maxWidth: "150px", margin: "0 auto" }}
            value={age}
            onChange={(e) => setAge(e.target.value)}
            min="10"
            max="100"
          />
        </div>

        {/* Workout Location */}
        <div className="text-center mb-3">
          <label className="form-label fw-semibold">Where do you usually train?</label>
        </div>

        <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
          <div
            className={`goal-card ${location === "home" ? "selected" : ""}`}
            onClick={() => setLocation("home")}
          >
            <div className="goal-icon"><FaHome size={32} /></div>
            <span>Home</span>
          </div>

          <div
            className={`goal-card ${location === "gym" ? "selected" : ""}`}
            onClick={() => setLocation("gym")}
          >
            <div className="goal-icon"><FaDumbbell size={32} /></div>
            <span>Gym</span>
          </div>
        </div>

        {/* Continue */}
        <div className="text-center mt-4">
          <button
            className="btn btn-primary btn-lg w-100"
            onClick={handleContinue}
            disabled={!age || !location}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

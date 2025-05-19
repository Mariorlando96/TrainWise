import React, { useState } from "react";
import "./styles.css";
import maleImg from "../../assets/img/male.jpg";
import femaleImg from "../../assets/img/female.jpg";
import { FaArrowLeft } from "react-icons/fa";
import ProgressHeader from "../../components/ProgressHeader";

export const Step1_Gender = ({ onNext }) => {
    const [selected, setSelected] = useState("");

    const handleSelect = (gender) => {
        setSelected(gender);
    };

    const handleContinue = () => {
        if (selected) onNext({ gender: selected });
    };

    return (
        <div className="signup-step-container">
            <div className="signup-step-wrapper"> {/* All content inside here */}

                {/* Progress Header */}
                <ProgressHeader progressPercent={7} />

                <h2 className="text-center mb-2 fw-bold">Select your gender</h2>
                <p className="text-center text-muted mb-4">
                    We use this information to create a personalized training plan for you
                </p>

                <div className="d-flex justify-content-center gap-2 mb-4 flex-wrap">
                    {/* Male Card */}
                    <div className={`gender-card ${selected === "male" ? "selected" : ""}`} onClick={() => handleSelect("male")}>
                        <div className="gender-img-wrapper">
                            <img src={maleImg} alt="Male" />
                        </div>
                        <p className="text-center mt-2 fw-semibold">Male</p>
                    </div>

                    {/* Female Card */}
                    <div className={`gender-card ${selected === "female" ? "selected" : ""}`} onClick={() => handleSelect("female")}>
                        <div className="gender-img-wrapper">
                            <img src={femaleImg} alt="Female" />
                        </div>
                        <p className="text-center mt-2 fw-semibold">Female</p>
                    </div>
                </div>

                <div className="text-center">
                    <button
                        className="btn btn-primary btn-lg w-100"
                        disabled={!selected}
                        onClick={handleContinue}
                    >
                        Continue
                    </button>
                </div>

            </div> {/* END .signup-step-wrapper */}
        </div>
    );
};

import React, { useState } from "react";
import "./styles.css";
import maleImg from "../../assets/img/male.jpg";
import femaleImg from "../../assets/img/female.jpg";
import { FaArrowLeft } from "react-icons/fa";

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
                <div className="progress-container w-100 mb-4">
                    <div className="d-flex align-items-center justify-content-between">
                        <FaArrowLeft className="fs-5 text-primary" style={{ cursor: "not-allowed", opacity: 0.5 }} />
                        <div className="progress w-100 mx-3" style={{ height: "8px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}>
                            <div
                                className="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "7%", height: "100%", borderRadius: "5px" }}
                            ></div>
                        </div>
                    </div>
                </div>

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

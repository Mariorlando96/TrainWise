import React, { useState } from "react";
import { Step1_Gender } from "./Step1_Gender";

export const SignupFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ gender: "" });

    const handleNext = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
        setStep((prev) => prev + 1);
    };

    return (
        <div>
            {step === 1 && <Step1_Gender onNext={handleNext} />}
            {/* Step 2, 3, 4 etc will go here */}
        </div>
    );
};

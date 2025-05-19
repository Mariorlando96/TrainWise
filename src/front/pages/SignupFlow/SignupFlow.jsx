import React, { useState } from "react";
import { Step1_Gender } from "./Step1_Gender";
import { Step2_Goal } from "./Step2_Goal";
import { Step3_CurrentBody } from "./Step3_CurrentBody";
import { Step4_GoalBody } from "./Step4_GoalBody";
import { Step5_TargetZones } from "./Step5_TargetZones";
import { Step6_FitnessLevel } from "./Step6_FitnessLevel";
import { Step7_Height } from "./Step7_Height";
import { Step8_Weight } from "./Step8_Weight";
import { Step9_GoalWeight } from "./Step9_GoalWeight";
import { Step10_AgeLocation } from "./Step10_AgeLocation";
import { Step11_EquipmentFamiliarity } from "./Step11_EquipmentFamiliarity";
import { Step12_TrainingFrequency } from "./Step12_TrainingFrequency";

export const SignupFlow = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        gender: "",
        goal: ""
    });

    // Move to the next step and update form data
    const handleNext = (newData) => {
        setFormData((prev) => ({ ...prev, ...newData }));
        setStep((prev) => prev + 1);
    };

    // Go back to previous step
    const handleBack = () => {
        setStep((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div>
            {step === 1 && (
                <Step1_Gender onNext={handleNext} />
            )}
            {step === 2 && (
                <Step2_Goal
                    selectedGoal={formData.goal}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 3 && (
                <Step3_CurrentBody
                    selectedBodyType={formData.currentBodyType}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 4 && (
                <Step4_GoalBody
                    selectedGoalBody={formData.goalBodyType}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 5 && (
                <Step5_TargetZones
                    selectedZones={formData.targetZones}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 6 && (
                <Step6_FitnessLevel
                    selectedLevel={formData.fitnessLevel}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 7 && (
                <Step7_Height
                    heightData={formData.height}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 8 && (
                <Step8_Weight
                    weightData={formData.weight}
                    heightData={formData.height}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 9 && (
                <Step9_GoalWeight
                    weightData={formData.weight}
                    goalWeightData={formData.goalWeight}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 10 && (
                <Step10_AgeLocation
                    ageLocationData={formData.ageLocation}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 11 && (
                <Step11_EquipmentFamiliarity
                    equipmentFamiliarity={formData.equipmentFamiliarity}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}
            {step === 12 && (
                <Step12_TrainingFrequency
                    frequency={formData.trainingFrequency}
                    onNext={handleNext}
                    onBack={handleBack}
                />
            )}








        </div>
    );
};

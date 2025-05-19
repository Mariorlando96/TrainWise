import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ProgressHeader = ({ progressPercent = 0, onBack, canGoBack = false }) => {
    return (
        <div className="d-flex justify-content-center w-100 mb-4">
            <div className="d-flex align-items-center gap-3" style={{ maxWidth: "800px", width: "100%" }}>
                <FaArrowLeft
                    className="text-primary"
                    style={{
                        fontSize: "16px",
                        cursor: canGoBack ? "pointer" : "not-allowed",
                        opacity: canGoBack ? 1 : 0.5,
                    }}
                    onClick={canGoBack && onBack ? onBack : null}
                />
                <div className="progress w-100" style={{ height: "8px", borderRadius: "5px", backgroundColor: "#e0e0e0" }}>
                    <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: `${progressPercent}%`, height: "100%", borderRadius: "5px" }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default ProgressHeader;

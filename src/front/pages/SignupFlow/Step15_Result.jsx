import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Container, Row, Col, Button } from "react-bootstrap";

export const Step15_Result = ({ startWeight = 190, goalWeight = 180, goalDate = "Aug 13", onContinue }) => {
    const data = [
        { month: "Jun", weight: startWeight },
        { month: "Jul", weight: (startWeight + goalWeight) / 2 },
        { month: "Aug", weight: goalWeight }
    ];

    return (
        <Container className="py-5 text-center">
            <h2 className="text-primary fw-bold mb-3">
                Your personalized plan to get your dream body is ready!
            </h2>
            <p className="mb-4">
                According to the information you provided, you will be able to achieve your goals by {goalDate},
                if you stick to your personalized workout plan.
            </p>

            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data} margin={{ top: 10, right: 30, left: 30, bottom: 10 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={['auto', 'auto']} />
                    <Tooltip />
                    <Line type="monotone" dataKey="weight" stroke="#00bfff" strokeWidth={3} dot={{ r: 5 }} />
                </LineChart>
            </ResponsiveContainer>

            <Button className="mt-4 btn-lg" onClick={onContinue}>
                Continue
            </Button>
        </Container>
    );
};

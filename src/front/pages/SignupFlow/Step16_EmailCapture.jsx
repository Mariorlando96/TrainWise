import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

export const Step16_EmailCapture = ({ onNext, onBack }) => {
    const [email, setEmail] = useState("");
    const [isValid, setIsValid] = useState(false);

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsValid(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value));
    };

    const handleContinue = () => {
        if (isValid) {
            onNext({ email });
        }
    };

    return (
        <Container className="py-5 text-center">
            <Row className="justify-content-center mb-4">
                <Col xs={12} md={8}>
                    <h2 className="fw-bold">Your plans are ready!</h2>
                    <p className="mb-4">Enter your email to get started</p>
                </Col>
            </Row>

            <Row className="justify-content-center">
                <Col xs={12} md={6}>
                    <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                        className="mb-3"
                    />
                    <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                        We safeguard your privacy and are committed to protecting your personal data.
                        We never send spam emails, only relevant information.
                    </p>
                    <Button
                        className="w-100 btn-lg"
                        variant="primary"
                        onClick={handleContinue}
                        disabled={!isValid}
                    >
                        Continue
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

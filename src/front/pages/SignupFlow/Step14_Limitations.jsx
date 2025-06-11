import React, { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import ProgressHeader from "../../components/ProgressHeader";

const limitations = [
    "Sensitive back",
    "Sensitive knees",
    "Other",
    "No, I don't have any"
];

export const Step14_Limitations = ({ limitationsData = "", onNext, onBack }) => {
    const [selected, setSelected] = useState(limitationsData);

    const handleContinue = () => {
        if (selected) onNext({ trainingLimitations: selected });
    };

    return (
        <Container className="py-5">
            <ProgressHeader progressPercent={100} canGoBack={true} onBack={onBack} />

            <Row className="justify-content-center mb-4">
                <Col xs={12} md={8} className="text-center">
                    <h2>Do you have any limitations to your training?</h2>
                </Col>
            </Row>

            <Row className="justify-content-center">
                {limitations.map((item, index) => (
                    <Col xs={12} md={6} lg={4} className="mb-3" key={index}>
                        <Card
                            onClick={() => setSelected(item)}
                            className={`h-100 shadow-sm ${selected === item ? "border-primary" : ""
                                }`}
                            role="button"
                        >
                            <Card.Body className="d-flex justify-content-center align-items-center">
                                <Card.Text className="text-center fs-5 mb-0">{item}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

            <Row className="justify-content-center mt-4">
                <Col xs={12} md={6}>
                    <Button
                        className="w-100 btn-lg"
                        variant="primary"
                        onClick={handleContinue}
                        disabled={!selected}
                    >
                        Continue
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

import React from "react";
import {Card, Col, Container, Row } from "react-bootstrap";
// import ProfileCard from "../ProfileCard";

export default function Directors() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <hr />
      <h2>Directors</h2>
      {/* <ProfileCard /> */}
      <Container>
        <Row>
          <Col md={4}>
            <Card bg={"default"} className="mb-2">
              <Card.Header>Director,</Card.Header>
              <Card.Body>
                <Card.Title>Dr. Imran Adeleke </Card.Title>
                <Card.Text>Multifacet Technologies</Card.Text>
              </Card.Body>
            </Card>
            <Card bg={"default"} className="mb-2">
              <Card.Header>Global Instructor</Card.Header>
              <Card.Body>
                <Card.Title> Engr. Bolaji Joshua</Card.Title>
                <Card.Text>
                  Cisco Networking Academy United Kingdom 
                  The Open University–Academy Incubator
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

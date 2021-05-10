import React from "react";
import {Card, Col, Container, Row } from "react-bootstrap";

export default function Directors() {
  return (
    <div style={{ marginTop: "2rem" }}>
      <hr />
      <h2>Directors</h2>
      
      <Container>
        <Row>
          <Col md={6}>
            <Card bg={"default"} >
              <Card.Header>Director,</Card.Header>
              <Card.Body>
                <Card.Title>Dr. Imran Adeleke </Card.Title>
                <Card.Text>Multifacet Technologies</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <br></br>

          <Col md={6}>
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

        <Row>
          <Col md={6}>
            <Card bg={"default"} >
              <Card.Header>Instructor</Card.Header>
              <Card.Body>
                <Card.Title>Nurudeen Ajayi </Card.Title>
                <Card.Text>
                  Instructor at Multifacet Technologies
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <br></br>
          <br></br>

          <Col md={6}>
            <Card bg={"default"} className="mb-2">
                <Card.Header>Instructor</Card.Header>
                <Card.Body>
                  <Card.Title> Arubiewe Wasiu </Card.Title>
                  <Card.Text>
                    Instructor at Multifacet Technologies
                  </Card.Text>
                </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

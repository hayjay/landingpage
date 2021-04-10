import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards";
import cisco from "../../static/images/cisco.jpeg";
import microsoft from "../../static/images/microsoft.png";
import it from "../../static/images/it.jpeg";
import comp from "../../static/images/comp.jpeg"

const services = [
  {
    name: "Cisco Networking training and Examination",
    image: cisco,
  },
  {
    name: "Microsoft Certified training and Examinations",
    image: microsoft,
  },
  {
    name: "Education Management Information Systems",
    image: it,
  },
  { name: "IT Training", image: it},
  { name: "Consultancy and Outsourcing", image: it },
  {
    name: "Buying, Selling and Maintenance of Computers",
    image: comp,
  },
];
export default function Services() {
  return (
    <Container fluid>
      <Row>
        {services.map((service, index) => (
          <Col md={4}>
            <Cards title={service.name} image={service.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards";
import INT from  "../../static/images/INT.jpeg"
import swr from "../../static/images/swr.jpeg"
import NE from "../../static/images/networking.jpeg";
// import ANE from "../../static/images/advanced_networking.jpeg";
// import python from "../../static/images/python.jpeg";
import c from "../../static/images/c.png"
// import cpp from "../../static/images/cpp.png"
import iot from "../../static/images/iot.jpeg"
import iot2 from "../../static/images/iot2.jpeg"
import cyb from "../../static/images/cyb.jpeg"
import ent from "../../static/images/ent.jpeg"
import './coursesStyles/style.css'


export const courses = [
  { 
    name: "Networking Essentials", 
    image: NE 
  },
  {
    name: "CCNA1v7: Introduction to Networking (ITN)",
    image: INT,
  },
  {
    name: "CCNA2v7: Switching, Routing, and Wireless Essentials (SRWE)",
    image: swr,
  },
  {
    name: "CCNA3v7: Enterprise Networking, Security and Automation (ENSA)",
    image: INT,
  },
  {
    name: "CCNP Enterprise: Advanced Routing (ENARSI)",
    image: swr,
  },
  {
    name: "CCNP Enterprise: Core Networking (ENCOR)",
    image: NE 
  },
  {
    name: "CLA: Programming Essential in C",
    image: c,
  },
  {
    name: "Entrepreneurship",
    image: ent,
  },
  {
    name: "CLP: Advanced Programming in C",
    image: c,
  },
  {
    name: "IoT Fundamentals: Connecting Things",
    image: iot2,
  },
  {
    name: "Introduction to Internet of Things (IoT)",
    image: iot,
  },
  {
    name: "IoT Fundamentals: Connecting Things",
    image: iot2,
  },
  {
    name: "Introduction to Cybersecurity",
    image: cyb,
  },
  {
    name: "Cybersecurity Essentials",
    image: cyb,
  },
  {
    name: "Entrepreneurship",
    image: ent,
  },
];

export default function Courses() {
  return (
    <Container fluid>
      <Row>
        {courses.map((course, index) => (
          <Col key={index} md={4}>
            <Cards key={index} title={course.name} image={course.image ? course.image : ""} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

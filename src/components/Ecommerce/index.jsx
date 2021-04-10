import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards";
import bom from "../../static/images/ecom/bom.jpeg"
import web from "../../static/images/ecom/web.jpeg"
import asd from "../../static/images/ecom/asd.jpeg";
import mpd from "../../static/images/ecom/mpd.jpeg";
import wh from "../../static/images/ecom/wh.png";
import dnr from "../../static/images/ecom/dnr.jpeg";

const ecoms = [
  {
    name: "Conducting business on-line over the Internet ",
    image: bom,
  },
  {
    name: "Complete web site development",
    image: web,
  },
  {
    name: "Application Software development",
    image: asd,
  },
  {
    name: "Multimedia presentation design",
    image: mpd,
  },
  { name: "Website Hosting", image: wh },
  { name: "Domain name Registration", image: dnr },
];

export default function Ecommerce() {
  return (
    <Container fluid>
      <Row>
        {ecoms.map((ecom, index) => (
          <Col md={4}>
            <Cards title={ecom.name} image={ecom.image} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

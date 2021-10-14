import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row style={{ marginTop: -10 }}>
        <Col className="text-center mb-3" style={{ fontSize: 18 }}>Copyright © Note Keeper</Col>
      </Row>
      <Row style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div style={{ fontSize: 30, marginTop: -12 }} className="mr-3">
          <a href="https://www.facebook.com/zeeshan.lodhi.35977" target="_blank" rel="noreferrer" >
            <i className="fab fa-facebook-square iconn"></i>
          </a>
          <a href="https://www.instagram.com/zeeshan__lodhi/" target="_blank" className="mx-3" rel="noreferrer">
            <i className="fab fa-instagram iconn"></i>
          </a>
          <a href="https://github.com/Zeeshan-Lodhi/" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </div>

      </Row>
    </Container>
  );
};

export default Footer;

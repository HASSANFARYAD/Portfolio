import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiVisualstudio,
  SiVercel,
  SiNetlify,
  SiSlack,
  SiMicrosoftazure,
  SiAsana,
  SiJira,
  SiFilezilla,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman title="Postman" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify title="Netlify" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudio title="Visual Studio" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack title="Slack" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure title="Azure" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAsana title="Asana" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJira title="Jira" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFilezilla title="FileZilla" />
      </Col>
    </Row>
  );
};

export default Toolstack;

import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiGit } from "react-icons/di";
import {
  SiMicrosoftsqlserver,
  SiCsharp,
  SiPython,
  SiRedux,
  SiMongodb,
  SiHtml5,
  SiJquery,
} from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 title="HTML5" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJquery title="Jquery" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact title="ReactJS" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux title="Redux-toolkit" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb title="MongoDB" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp title="C#" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython title="python" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftsqlserver title="MSSQL" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit title="GIT" />
      </Col>
    </Row>
  );
};

export default Techstack;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Greetings, I'm <span className="yellow">Hassan Faryad, </span>
              based in <span className="yellow"> Lahore, Pakistan.</span> and I
              bring over 5 years of experience as a seasoned Full-Stack
              developer.
              <br />
              <br />
              In my journey as a <b className="yellow"> Full-Stack </b>{" "}
              developer, I thrive on overcoming challenges and continually
              evolving my skillset to stay ahead of industry trends.
              <br />
              <br />I wield expertise in an array of programming languages,
              including <b className="yellow"> C#, Python, and Node.js, </b>
              and frameworks such as{" "}
              <b className="yellow"> .Net Core(MVC), Asp.Net(MVC) and Django</b>
              <br />
              <br />
              My passion lies in the realm of C#, MongoDB, MSSQL and
              cutting-edge JavaScript libraries and frameworks like React.js. I
              have successfully applied these technologies to deliver robust and
              scalable solutions in my previous endeavors.
              <br />
              <br />
              Beyond the code, I harbor a keen interest in pioneering new web
              technologies and products. I'm enthusiastic about exploring the
              realms of Artificial Intelligence and leveraging it to create
              innovative and impactful solutions.
              <br />
              Looking forward to contributing my skills and experience to your
              dynamic projects.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Please don't hesitate to reach out to me and{" "}
              <span className="yellow">connect.</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/HASSANFARYAD"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/faisalraj596"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="twitter"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hassan-faryad-0250bb113/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import Carboxe from "../assets/projects/Carboxe.PNG";
import chameleons from "../assets/projects/chameleons.PNG";
import lift from "../assets/projects/zuptu.png";
import ITValet from "../assets/projects/ITValet.PNG";
import Ebay from "../assets/projects/Ebay.PNG";
import shiftBook from "../assets/projects/Shift-book.png";

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Zuptu"
              description="Zuptu is a powerful and simple-to-use project management tool designed to improve project coordination. Customers can create a progressive design for their initiatives using Zuptu, allocating each stage to certain clients. This plan allows for the assignment of tasks to customers with well defined norms and consents, ensuring easy communication and efficient assignment distribution. Zuptu also provides email notice components to inform all collaborators of project updates and deadlines. The stage is also designed to be portable, making it easy for users to access it quickly and complete their tasks. For groups and organizations seeking for a thorough venture the executives tool that works with constant cooperation and increases efficiency, Zuptu is the clear-cut solution."
              demoLink="https://zuptu.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chameleons}
              isBlog={false}
              title="Cardano Chameleons"
              description="TThe primary goal of the Cardano Chameleon project was to totally alter the NFT collectibles market on the Cardano Blockchain. In order to produce unique and various NFTs that appeal to collectors' tastes and interests, our development team at Nodlays decided to use an agile and creative approach. Cardano Chameleon NFTs were created with the goal of standing out in the realm of digital art through the use of a platform that would bring themes and artwork to life. In order to allow collectors to look into a variety of topics and find digital artifacts that suit their tastes, our group focused on user engagement. We intended to combine artistic ability with cutting-edge blockchain technology to deliver an amazing NFT experience that leaves collectors with a long-lasting impression."
              demoLink="https://cardanochameleons.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ebay}
              isBlog={false}
              title="Ebay NFts"
              description="The major goal of the eBay NFT project was to provide a comprehensive platform that would give users access to crucial information and viewpoints on NFTs and sports trading cards. Our development team at Nodlays employed an agile methodology to better understand the specific needs and expectations of sports and NFT enthusiasts while directly collaborating with them. In order to provide a user-friendly interface that ensures a faultless research experience, we set out to develop an all-in-one solution with a customer-centric emphasis that incorporates data from the sports card and NFT markets. eBay NFT helps consumers to take advantage of this industry's potential and profit from its quick expansion by providing up-to-date market trends and insights."
              demoLink="http://ebay.nodlays.co.uk"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Carboxe}
              isBlog={false}
              title="CarBoxe"
              description="CarBoxe project was to create an efficient and user-friendly internet platform for selling automobiles that would make it simple for people to sell their cars. In order to better understand the preferences and difficulties faced by vehicle dealers, our development team at Nodlays applied an agile methodology. We set out to create a platform that streamlines each step of the car-selling process, from valuation to payment, in order to deliver the best possible client experience. By providing quick bids and on-site inspections, we hoped to eliminate the traditional hassles associated with selling a car and give sellers the confidence to trade with CarBoxe."
              demoLink="https://www.carboxe.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ITValet}
              isBlog={false}
              title="IT Valet"
              description="Main goal in creating IT VALET was to revolutionize the industry for IT freelancing by creating a comprehensive platform that links clients with highly qualified IT specialists. Our development team actively sought out industry experts and employed an agile methodology to better understand the unique challenges encountered by both clients and independent contractors. We set out to develop a user-friendly, feature-rich website using their helpful suggestions that would increase the networking prospects for IT experts while also ensuring project management and payment transparency. Because of our collaborative and customer-centered approach, we were able to create IT VALET, a revolutionary product in the freelancing sector."
              demoLink="http://usman78056-001-site10.gtempurl.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shiftBook}
              isBlog={false}
              title="ShiftBook"
              description="Supply chain management transformation for businesses was the main goal of the Shift Book initiative. In order to do this, the Nodlays development team closely collaborated with stakeholders to understand their distinct goals and issue-solving needs. They did this by utilizing an agile methodology. In order to simplify supply chain management tasks and facilitate data analysis, we set out to build a reliable and user-friendly platform. Our aim was to provide organizations with an integrated system that would allow them to effectively manage categories, work orders, and analytics. Shift Book now satisfies the demands of a variety of industries while offering a seamless and productive supply chain management experience thanks to our customer-centered approach."
              demoLink="http://shiftbook.nodlays.co.uk"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Projects;

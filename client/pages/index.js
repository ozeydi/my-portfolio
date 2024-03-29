import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import BaseLayout from "../components/layouts/BaseLayout";
import { Container, Row, Col } from "reactstrap";
import { TypeAnimation } from "react-type-animation";

const roles = [
  "Fullstack web Developer",
  1000,
  "Team player",
  1000,
  "Javascipt",
  1000,
  "ES6",
  1000,
  "Typescript",
  1000,
  "React js",
  1000,
  "Redux",
  1000,
  "Mobx",
  1000,
  "Vue Js",
  1000,
  "React native",
  1000,
  "Node js",
  1000,
  "Express",
  1000,
  "Mongodb",
  1000,
  "Agile Scrum",
  1000,
];
const Index = () => {
  const { user, isLoading } = useUser();

  return (
    <BaseLayout
      user={user}
      loading={isLoading}
      navClass="transparent"
      className="cover"
    >
      <div className="main-section">
        <div className="background-image">
          <img src="/images/background-index.png" />
        </div>
        <Container>
          <Row>
            <Col md="6">
              <div className="hero-section">
                <div className={`flipper`}>
                  <div className="back">
                    <div className="hero-section-content">
                      <h2> Full Stack Web Developer </h2>
                      <div className="hero-section-content-intro">
                        Have a look at my portfolio and job history.
                      </div>
                    </div>
                    <img className="image" src="/images/section-1.png" />
                    <div className="shadow-custom">
                      <div className="shadow-inner"> </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col md="6" className="hero-welcome-wrapper">
              <div className="hero-welcome-text">
                <h1>
                  Welcome to the portfolio website of Oussama ZEYDI. Get
                  informed, collaborate and discover projects I was working on
                  through the years!
                </h1>
              </div>
              <TypeAnimation
                sequence={roles}
                style={{
                  fontSize: "2em",
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "2px",
                }}
                wrapper="span"
                repeat={Infinity}
                cursor={false}
              />
              <div className="hero-welcome-bio">
                <h1>Let's take a look on my work.</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </BaseLayout>
  );
};

export default Index;

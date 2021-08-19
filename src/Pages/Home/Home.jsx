import React from "react";
import SubNavbar from "../../Components/Navbar/SubNavbar";
import ProfileHeader from "../../Components/ProfileHeader/ProfileHeader";
import HomeHeadLine from "./HomeHeadLine";
import "./Home.css";
import WatchCard from "../../Components/Card/Card";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <ProfileHeader />
      <SubNavbar />
      <HomeHeadLine />
      {/* <div className="watch_card_container"> */}
      <Container>
        <Row>
          {[1, 2, 3, 4].map(() => (
            <Col xs={6} sm={4} lg={true}>
              <WatchCard />
            </Col>
          ))}
        </Row>
        <Row>
          <div className="homeSignUps">
            <Col>
              <div className="leftHead">
                <h1>Some Heading</h1>
              </div>
            </Col>
            <Col>
              <div className="rightBtn">
                <Link className="link_btn" to="/">
                  Sign up
                </Link>
              </div>
            </Col>
          </div>
        </Row>
      </Container>
    <Footer />
      {/* </div> */}
    </div>
  );
};

export default Home;

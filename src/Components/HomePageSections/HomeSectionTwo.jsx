import React from "react";
import SimonGame from "../../Images/SimonGame.jpeg";
import Newsletter from "../../Images/Newsletter.jpeg";
import Drums from "../../Images/Drums.jpeg";
import Todolist from "../../Images/Todolist.jpeg";
import Server from "../../Images/Server.jpeg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";

function HomeSectionTwo() {
  return (
    <div className="home-sections section-two" id="section-two">
      <Container>
        <Fade duration="2000">
          <Row>
            <Col xs={12} s={6} md={6} lg={4}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={SimonGame} className="card-img" />
                <Card.Body>
                  <Card.Title>Simon Game</Card.Title>
                  <Card.Text>
                    Built using jQuery. The game requires a user to repeat the
                    sequence. If the user succeeds, the series becomes
                    progressively longer and more complex. Once the user fails,
                    the game is over.
                  </Card.Text>

                  <Button
                    variant="primary"
                    className="card-btn-left"
                    href="https://mike1234-pixel.github.io/Simon-Game/"
                    target="_blank"
                  >
                    Project
                  </Button>

                  <Button
                    variant="danger"
                    className="card-btn-right"
                    href="https://github.com/mike1234-pixel/Simon-Game/blob/master/index.js"
                    target="_blank"
                  >
                    Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} s={6} md={6} lg={4}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={Newsletter} className="card-img" />
                <Card.Body>
                  <Card.Title>Newsletter SignUp</Card.Title>
                  <Card.Text>
                    Using Express server with Mailchimp API to allow users to
                    sign up to mailing list, server deployed on Heroku.
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="card-btn-left"
                    href="https://ancient-stream-79404.herokuapp.com/"
                    target="_blank"
                  >
                    Project
                  </Button>
                  <Button
                    variant="danger"
                    className="card-btn-right"
                    href="https://github.com/mike1234-pixel/Newsletter-Signup"
                    target="_blank"
                  >
                    Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} s={6} md={6} lg={4}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={Todolist} className="card-img" />
                <Card.Body>
                  <Card.Title>To-do List</Card.Title>
                  <Card.Text>
                    Todo-list made with node.js / express / ejs. Uses mongoDB
                    and mongoose, hosted on Heroku / MongoDB Atlas. User can
                    create their own todolist using express route params. Data
                    persists.
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="card-btn-left"
                    href="https://immense-spire-07308.herokuapp.com/"
                    target="_blank"
                  >
                    Project
                  </Button>
                  <Button
                    variant="danger"
                    className="card-btn-right"
                    href="https://github.com/mike1234-pixel/todolist-app-v2"
                    target="_blank"
                  >
                    Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Fade>
        <Fade duration="2000">
          <Row>
            <Col xs={12} s={6} md={6} lg={4}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={Drums} className="card-img" />
                <Card.Body>
                  <Card.Title>Drum Kit</Card.Title>
                  <Card.Text>
                    Simple drum kit app made using vanilla JS.<br></br>
                    <br></br>Ba
                    <br></br>da<br></br>boom.<br></br>
                    <br></br>
                  </Card.Text>
                  <Button
                    variant="primary"
                    className="card-btn-left"
                    href="https://mike1234-pixel.github.io/Drum-Machine/"
                    target="_blank"
                  >
                    Project
                  </Button>
                  <Button
                    variant="danger"
                    className="card-btn-right"
                    href="https://github.com/mike1234-pixel/Drum-Machine"
                    target="_blank"
                  >
                    Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={12} s={6} md={6} lg={4}>
              <Card style={{ width: "18rem" }} className="card">
                <Card.Img variant="top" src={Server} className="card-img" />
                <Card.Body>
                  <Card.Title>RESTful API</Card.Title>
                  <Card.Text>
                    Basic wiki API built using Node.js, Express, MongoDB and
                    Mongoose. Handles get, post, put, patch and delete requests.
                  </Card.Text>
                  <Button
                    variant="danger"
                    className="card-btn-right"
                    href="https://github.com/mike1234-pixel/REST-API/blob/master/app.js"
                    target="_blank"
                  >
                    Code
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
}

export default HomeSectionTwo;

// Image Attributions
// SimonGame & Newsletter images - public domain images taken from wikimedia commons - This file is made available under the Creative Commons CC0 1.0 Universal Public Domain Dedication
// Drums, TodoList and Server images - taken from pexels, no attr required

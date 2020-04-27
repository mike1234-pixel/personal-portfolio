import React from "react";
import SimonGame from "../../Images/SimonGame.jpeg";
import Newsletter from "../../Images/Newsletter.jpeg";
import Drums from "../../Images/Drums.jpeg";
import Todolist from "../../Images/Todolist.jpeg";
import London from "../../Images/London.jpeg";
import Clock from "../../Images/Clock.jpeg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function HomeSectionTwo() {
  return (
    <div className="home-sections section-two" id="section-two">
      <Container>
        <Row className="section-two-container">
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
              <Card.Img variant="top" src={Clock} className="card-img" />
              <Card.Body>
                <Card.Title>Pomodoro Clock</Card.Title>
                <Card.Text>
                  Pomodoro Clock App made using React.<br></br>
                  <br></br>The user can set their own session and break lengths,
                  and the fourth break will be four times longer than the
                  specified break length.
                </Card.Text>
                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://master.d2icos6v1wkh08.amplifyapp.com/"
                  target="_blank"
                >
                  Project
                </Button>
                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/Pomodoro-Clock/blob/master/src/Clock.jsx"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={London} className="card-img" />
              <Card.Body>
                <Card.Title>SeeLondon.com</Card.Title>
                <Card.Text>
                  London visitor site made using Sass only and no JavaScript.
                  Applies Sass architecture and modern CSS properties.
                </Card.Text>
                <br></br>
                <br></br>
                <br></br>
                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://mike1234-pixel.github.io/SeeLondon-Project/"
                  target="_blank"
                >
                  Project
                </Button>
                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/SeeLondon-Project"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="section-two-container">
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
              <Card.Img variant="top" src={Todolist} className="card-img" />
              <Card.Body>
                <Card.Title>To-do List</Card.Title>
                <Card.Text>
                  Todo-list made with node.js / express / ejs. Uses mongoDB and
                  mongoose, hosted on Heroku / MongoDB Atlas. User can create
                  their own todolist using express route params. Data persists.
                </Card.Text>
                <br></br>
                <br></br>
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

          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={Newsletter} className="card-img" />
              <Card.Body>
                <Card.Title>Newsletter SignUp</Card.Title>
                <Card.Text>
                  Using Express server with Mailchimp API to allow users to sign
                  up to mailing list, server deployed on Heroku.
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
        </Row>
      </Container>
    </div>
  );
}

export default HomeSectionTwo;

// Image Attributions
// SimonGame & Newsletter images - public domain images taken from wikimedia commons - This file is made available under the Creative Commons CC0 1.0 Universal Public Domain Dedication
// Drums, TodoList and Server images - taken from pexels, no attr required

/* 
POMODORO CARD

<Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={Newsletter} className="card-img" />
              <Card.Body>
                <Card.Title>Newsletter SignUp</Card.Title>
                <Card.Text>
                  Using Express server with Mailchimp API to allow users to sign
                  up to mailing list, server deployed on Heroku.
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
*/

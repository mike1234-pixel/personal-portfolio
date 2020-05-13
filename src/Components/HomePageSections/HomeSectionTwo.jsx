import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import LOTRQuote from "../../Images/LOTRQuote.jpg";
import MarkdownPreviewer from "../../Images/MarkdownPreviewer.jpg";
import DrumMachine from "../../Images/DrumMachine.jpg";
import JSCalculator from "../../Images/JSCalculator.jpg";
import PomodoroClock from "../../Images/PomodoroClock.jpg";
import SimonGame from "../../Images/SimonGame.jpg";

function HomeSectionTwo() {
  return (
    <div className="home-sections section-two" id="section-two">
      <Container>
        <Row className="section-two-container">
          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={LOTRQuote} className="card-img" />
              <Card.Body>
                <Card.Title>Movie Quote Generator</Card.Title>
                <Card.Text>Random Quote Generator made with React.</Card.Text>

                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://mike1234-pixel.github.io/LOTRQuote/"
                  target="_blank"
                >
                  Project
                </Button>

                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/LOTRQuote"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src={MarkdownPreviewer}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Markdown Previewer</Card.Title>
                <Card.Text>Markdown previewer made with React.</Card.Text>
                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://mike1234-pixel.github.io/MarkdownPreviewer/"
                  target="_blank"
                >
                  Project
                </Button>
                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/MarkdownPreviewer"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={DrumMachine} className="card-img" />
              <Card.Body>
                <Card.Title>Drum Machine</Card.Title>
                <Card.Text>Drum Machine made with React.</Card.Text>
                <br></br>
                <br></br>
                <br></br>
                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://mike1234-pixel.github.io/Drums/"
                  target="_blank"
                >
                  Project
                </Button>
                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/Drums"
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
              <Card.Img variant="top" src={JSCalculator} className="card-img" />
              <Card.Body>
                <Card.Title>JS Calculator</Card.Title>
                <Card.Text>JavaScript Calculator made with React.</Card.Text>
                <Button
                  variant="primary"
                  className="card-btn-left"
                  href="https://mike1234-pixel.github.io/JSCalculator/"
                  target="_blank"
                >
                  Project
                </Button>
                <Button
                  variant="danger"
                  className="card-btn-right"
                  href="https://github.com/mike1234-pixel/JSCalculator"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img
                variant="top"
                src={PomodoroClock}
                className="card-img"
              />
              <Card.Body>
                <Card.Title>Pomodoro Clock</Card.Title>
                <Card.Text>Pomodoro Clock made with React.</Card.Text>
                <br></br>
                <br></br>
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
                  href="https://github.com/mike1234-pixel/Pomodoro-Clock"
                  target="_blank"
                >
                  Code
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} s={6} md={6} lg={4}>
            <Card style={{ width: "18rem" }} className="card">
              <Card.Img variant="top" src={SimonGame} className="card-img" />
              <Card.Body>
                <Card.Title>Simon Game</Card.Title>
                <Card.Text>Simon Game made using jQuery.</Card.Text>
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
                  href="https://github.com/mike1234-pixel/Simon-Game"
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

// Built using jQuery. The game requires a user to repeat the
// sequence. If the user succeeds, the series becomes
// progressively longer and more complex. Once the user fails,
// the game is over.

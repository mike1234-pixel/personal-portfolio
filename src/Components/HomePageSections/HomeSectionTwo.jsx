import React from "react";
import { Card } from "react-bootstrap";
import LOTRQuote from "../../Images/LOTRQuote.jpg";
import MarkdownPreviewer from "../../Images/MarkdownPreviewer.jpg";
import DrumMachine from "../../Images/DrumMachine.jpg";
import JSCalculator from "../../Images/JSCalculator.jpg";
import PomodoroClock from "../../Images/PomodoroClock.jpg";
import SimonGame from "../../Images/SimonGame.jpg";

function HomeSectionTwo() {
  return (
    <div className="home-section-two-container" id="section-two">
      <div className="home-grid">
        <div className="home-grid-item home-grid-item-1">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={LOTRQuote} className="card-img" />
            <Card.Body>
              <Card.Title>Movie Quote Generator</Card.Title>
              <Card.Text>Random Quote Generator made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/LOTRQuote/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/LOTRQuote"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="home-grid-item home-grid-item-2">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img
              variant="top"
              src={MarkdownPreviewer}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Markdown Previewer</Card.Title>
              <Card.Text>Markdown previewer made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/MarkdownPreviewer/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/MarkdownPreviewer"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="home-grid-item home-grid-item-3">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={DrumMachine} className="card-img" />
            <Card.Body>
              <Card.Title>Drum Machine</Card.Title>
              <Card.Text>Drum Machine app made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/Drums/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/Drums"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="home-grid-item home-grid-item-4">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={JSCalculator} className="card-img" />
            <Card.Body>
              <Card.Title>JS Calculator</Card.Title>
              <Card.Text>JavaScript Calculator made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/JSCalculator/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/JSCalculator"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="home-grid-item home-grid-item-5">
          {" "}
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={PomodoroClock} className="card-img" />
            <Card.Body>
              <Card.Title>Pomodoro Clock</Card.Title>
              <Card.Text>Pomodoro Clock app made with React.</Card.Text>
              <a
                href="https://master.d2icos6v1wkh08.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/Pomodoro-Clock"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
        <div className="home-grid-item home-grid-item-6">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img variant="top" src={SimonGame} className="card-img" />
            <Card.Body>
              <Card.Title>Simon Game</Card.Title>
              <Card.Text>Simon Game app made using jQuery.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/Simon-Game/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/Simon-Game"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--right"
              >
                Code
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default HomeSectionTwo;

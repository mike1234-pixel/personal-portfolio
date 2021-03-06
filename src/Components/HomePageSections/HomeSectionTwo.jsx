import React from "react";
import { Card } from "react-bootstrap";
import LOTRQuoteCompressed from "../../Images/LOTRQuoteCompressed.jpg";
import MarkdownPreviewerCompressed from "../../Images/MarkdownPreviewerCompressed.jpg";
import DrumMachineCompressed from "../../Images/DrumMachineCompressed.jpg";
import JSCalculatorCompressed from "../../Images/JSCalculatorCompressed.jpg";
import PomodoroClockCompressed from "../../Images/PomodoroClockCompressed.jpg";
import SimonGameCompressed from "../../Images/SimonGameCompressed.jpg";

function HomeSectionTwo() {
  return (
    <div className="home-section-two-container" id="section-two">
      <div className="home-grid">
        <div className="home-grid-item home-grid-item-1">
          <Card style={{ width: "18rem" }} className="card">
            <Card.Img
              variant="top"
              src={LOTRQuoteCompressed}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Movie Quote Generator</Card.Title>
              <Card.Text>Random Quote Generator made with React.</Card.Text>
              <a
                href="https://master.d3fb1rattu62ed.amplifyapp.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/fcc-frontend-libraries-project-one"
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
              src={MarkdownPreviewerCompressed}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Markdown Previewer</Card.Title>
              <Card.Text>Markdown previewer made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/fcc-frontend-libraries-project-two/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/fcc-frontend-libraries-project-two"
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
            <Card.Img
              variant="top"
              src={DrumMachineCompressed}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Drum Machine</Card.Title>
              <Card.Text>Drum Machine app made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/fcc-frontend-libraries-project-three/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/fcc-frontend-libraries-project-three"
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
            <Card.Img
              variant="top"
              src={JSCalculatorCompressed}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>JS Calculator</Card.Title>
              <Card.Text>JavaScript Calculator made with React.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/fcc-frontend-libraries-project-four/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/fcc-frontend-libraries-project-four"
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
            <Card.Img
              variant="top"
              src={PomodoroClockCompressed}
              className="card-img"
            />
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
                href="https://github.com/mike1234-pixel/fcc-frontend-libraries-project-five"
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
            <Card.Img
              variant="top"
              src={SimonGameCompressed}
              className="card-img"
            />
            <Card.Body>
              <Card.Title>Simon Game</Card.Title>
              <Card.Text>Simon Game app made using jQuery.</Card.Text>
              <a
                href="https://mike1234-pixel.github.io/simon-game/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--left"
              >
                Project
              </a>
              <a
                href="https://github.com/mike1234-pixel/simon-game"
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

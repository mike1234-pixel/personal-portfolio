import React from "react";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClassName: "initialState",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClick() {
    if (this.state.menuClassName === "initialState") {
      this.setState({
        menuClassName: "visible",
      });
    } else if (this.state.menuClassName === "visible") {
      this.setState({
        menuClassName: "invisible",
      });
    } else {
      this.setState({
        menuClassName: "visible",
      });
    }
  }

  handleClickOutside(e) {
    if (
      e.target.id !== "dropdown-menu" &&
      e.target.className !== "nav-item" &&
      e.target.className !== "nav-link" &&
      e.target.className !== "dropdown-button"
    ) {
      if (this.state.menuClassName === "visible") {
        this.setState({
          menuClassName: "invisible",
        });
      }
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillReceiveProps() {
    if (this.props.hamburgerOpen === false) {
      this.setState(() => ({
        menuClassName: "initialState",
      }));
    }
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  // click event checks whether target is not div

  render() {
    return (
      <div className="dropdown-container">
        <button className="dropdown-button" onClick={this.handleClick}>
          Projects
        </button>
        <ul className={this.state.menuClassName} id="dropdown-menu">
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/LOTRQuote/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Random Quote Machine
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/MarkdownPreviewer/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Markdown Previewer
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/Drums/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Drum Machine
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/JSCalculator/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              JS Calculator
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://master.d2icos6v1wkh08.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Pomodoro Clock
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/Simon-Game/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              Simon Game
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://mike1234-pixel.github.io/SeeLondon-Project/"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link"
            >
              SeeLondon.co.uk
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Dropdown;

import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { Link } from 'react-router-dom'
import "../assets/css/App.css";
import ReactPlayer from "react-player";
import podcast from "../assets/podcasts/election_audio.mp3";
import IconButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";
import ReactCursorPosition from "react-cursor-position";

class HighlightMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   const {
  //     detectedEnvironment: {
  //       isMouseDetected = false,
  //       isTouchDetected = false,
  //     } = {},
  //     elementDimensions: { width = 0, height = 0 } = {},
  //     isActive = false,
  //     isPositionOutside = false,
  //     position: { x = 0, y = 0 } = {},
  //   } = props;

  render() {
    const x = this.props.position.x;
    const y = this.props.position.y;

    return (
      <div
        style={{
          background: "white",
          width: "200px",
          height: "150px",
          position: "absolute",
          left: { x },
          top: `${y}px`,
        }}
      >
        ello
      </div>
    );
  }
}

// const HighlightMenu = (props) => {
//   const {
//     detectedEnvironment: {
//       isMouseDetected = false,
//       isTouchDetected = false,
//     } = {},
//     elementDimensions: { width = 0, height = 0 } = {},
//     isActive = false,
//     isPositionOutside = false,
//     position: { x = 0, y = 0 } = {},
//   } = props;

//   return (
//     <div
//       style={{
//         background: "white",
//         width: "200px",
//         height: "150px",
//         position: "absolute",
//         left: `${x}px`,
//         top: `${y}px`,
//       }}
//     >
//       ello
//     </div>
//   );
// };

export default HighlightMenu;

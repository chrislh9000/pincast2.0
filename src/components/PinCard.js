import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "../assets/css/App.css";
import ReactPlayer from "react-player";
import IconButton from "@material-ui/core/Button";
import NonExtendedPin from "./NonExtendedPin";
import ExtendedPin from "./ExtendedPin";

class PinCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      extended: false,
      favoriteButton: this.props.favorited,
      playpause: false
    };
  }

  handleExtendPin = () => {
    // console.log(this.props.ccId, this.props.text, this.props.key, this.props.time, this.props.note, this.props.episode, this.props.user_id)
    this.setState({ extended: !this.state.extended });
  };

  handleFavoriteButton = () => {
    this.setState({ favoriteButton: !this.state.favoriteButton });
    const url = "http://localhost:5000/pins/pinFavorite";
    fetch(url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: this.props.user_id,
        episode: this.props.episode,
        favorite: !this.state.favoriteButton,
        ccId: this.props.ccId
      })
    })
      .then(json => {
        console.log("ohelo");
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  };

  handlePlay = () => {
    this.setState({ playpause: !this.state.playpause });
    if (this.state.playpause) {
      this.props.handlePause()
    } else {
      this.props.handleSeekTo(this.props.time)
      this.props.handlePlay()
    }
  };

  render() {
    return (
      <div
        className="mb-5"
        style={{
          display: "flex",
          flexDirection: "row",
          background: "grey"
        }}
      >
        {/* <Col xs={1}> */}
        <IconButton
          style={{
            width: "20px",
            minWidth: "0px",
            outline: "none",
            backgroundColor: "transparent"
          }}
          onClick={this.handleExtendPin}
          className="pl-0 pr-0"
          disableTouchRipple={true}
        >
          <img
            style={{
              height: 20,
              width: 20
            }}
            src="/whitepin.png"
          />
        </IconButton>
        {/* </Col> */}
        <Col xs={9} className="pl-4">
          {this.state.extended ? (
            <ExtendedPin
              text={this.props.text}
              key={this.props.key}
              time={this.props.time}
              note={this.props.note}
              handleEdit={this.props.handleEdit}
            />
          ) : (
            <NonExtendedPin
              text={this.props.text}
              key={this.props.key}
              time={this.props.time}
              note={this.props.note}
              handleEdit={this.props.handleEdit}
            />
          )}
        </Col>
        <Col xs={2}>
          <Row>
            <Col>
              <IconButton
                style={{
                  width: "20px",
                  minWidth: "0px",
                  outline: "none",
                  backgroundColor: "transparent"
                }}
                onClick={this.handlePlay}
                className="pl-0 pr-0"
                disableTouchRipple={true}
              >
                {this.state.playpause ? (
                  <img
                    style={{
                      height: 20,
                      width: 20
                    }}
                    src="/pause.png"
                  />
                ) : (
                  <img
                    style={{
                      height: 20,
                      width: 20
                    }}
                    src="/play.png"
                  />
                )}
              </IconButton>
            </Col>
            <Col>
              <IconButton
                style={{
                  width: "20px",
                  minWidth: "0px",
                  outline: "none",
                  backgroundColor: "transparent"
                }}
                onClick={this.handleFavoriteButton}
                className="pl-0 pr-0"
                disableTouchRipple={true}
              >
                {this.state.favoriteButton ? (
                  <img
                    style={{
                      height: 20,
                      width: 20
                    }}
                    src="/favorite_filled.png"
                  />
                ) : (
                  <img
                    style={{
                      height: 20,
                      width: 20
                    }}
                    src="/favorite_hollow.png"
                  />
                )}
              </IconButton>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}

export default PinCard;

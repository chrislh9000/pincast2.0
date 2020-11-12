import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom'
import '../assets/css/App.css';
import Navibar from './Navbar.jsx'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Search from './SearchPage'
import PlayBox from './SearchBar'
import TextField from '@material-ui/core/TextField'

class Discussion extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //pre-rendering code
    return (
      <Container fluid className="discussion_background" style={{ backgroundColor: "#353B74" }}>
        <Row>
          <Col className="pl-0 pr-0" id="far_left" xs={2} style={{ display: "flex", alignItems: "center", flexDirection: "column", backgroundColor: "#5C719B" }}>
            <Row>
              <p style={{ color: "white", fontSize: "30px" }}>PINCAST</p>
            </Row>
            <Row>
              <Search />
            </Row>
            <Container style={{ padding: "10px" }}>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Home</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Search</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Pins</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Profile</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Saved Podcastss</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Followed</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>Discovered</p>
              </Row>
              <Row className="ml-4">
                <p style={{ color: "white", fontSize: "16px" }}>New Releases</p>
              </Row>
              <Row>
                <PlayBox />
              </Row>
            </Container>

          </Col>
          <Col id="middle" xs={3} style={{
            borderRadius: "30px 0px 0px 30px", backgroundColor: "#4F57AA", boxShadow: "12px 0 15px -4px rgba(0,0,0,0.5), -12px 0 8px -4px rgba(0,0,0,0.5)"
          }}>
            <div style={{ height: "100px" }
            } >
              <p style={{ color: "white", fontSize: "20px", padding: "30px", paddingRight: "130px", overFlow: "scroll", height: "100px" }}> Hello dog my name is ... David Wang  Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang
               Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang Hello dog my name is ... David Wang


       </p>
            </div>
          </Col>
          <Col xs={4}>
          </Col>
          <Col id="far_right" xs={3} style={{ justifyContent: "space-between", display: 'flex', flexDirection: 'column', backgroundColor: "#5C719B" }}>
            <Row>
              <div id="comment" className="mt-4 ml-5 mr-4">
                <p className="mb-1" style={{ color: "white", fontSize: "11px" }}>
                  David_Wang 2h
                </p>
                <p style={{ color: "white", fontSize: "12px" }}>Also: Justin reviews the outlook for convertibles and discusses how investors can consider taking advantage of the asset...</p>
                <p style={{ color: "white", fontSize: "9px", textAlign: "right" }}>Reply</p>
                <Row display="flex" className="ml-1">
                  <div class="vl"></div>
                  <Col>
                    <div id="replies">
                      <p className="mb-1" style={{ color: "white", fontSize: "9px" }}>
                        David_Wang 2h
                    </p>
                      <p style={{ color: "white", fontSize: "12px" }}>Also: Justin reviews the outlook for convertibles and discusses how investors can consider taking advantage of the asset...</p>
                      <p style={{ color: "white", fontSize: "9px", textAlign: "right" }}>Reply</p>
                    </div>

                    <div id="replies">
                      <p className="mb-1" style={{ color: "white", fontSize: "9px" }}>
                        David_Wang 2h
                    </p>
                      <p style={{ color: "white", fontSize: "12px" }}>Also: Justin reviews the outlook for convertibles and discusses how investors can consider taking advantage of the asset...</p>
                      <p style={{ color: "white", fontSize: "9px", textAlign: "right" }}>Reply</p>
                    </div>


                  </Col>
                </Row>
              </div>
              <div id="comment" className="mt-4 ml-5 mr-4">
                <p className="mb-1" style={{ color: "white", fontSize: "9px" }}>
                  David_Wang 2h
                </p>
                <p style={{ color: "white", fontSize: "12px" }}>Also: Justin reviews the outlook for convertibles and discusses how investors can consider taking advantage of the asset...</p>
                <p style={{ color: "white", fontSize: "9px", textAlign: "right" }}>Reply</p>
                <Row display="flex" className="ml-1">
                  <div class="vl2"></div>
                  <Col>
                    <div id="replies">
                      <p className="mb-1" style={{ color: "white", fontSize: "9px" }}>
                        David_Wang 2h
                    </p>
                      <p style={{ color: "white", fontSize: "12px" }}>Also: Justin reviews the outlook for convertibles and discusses how investors can consider taking advantage of the asset...</p>
                      <p style={{ color: "white", fontSize: "9px", textAlign: "right" }}>Reply</p>
                    </div>


                  </Col>
                </Row>
              </div>
            </Row>
            <Row>
              <Container style={{ borderRadius: "30px 30px 0px 0px", height: "180px", backgroundColor: "#7597B0", display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: "center", boxShadow: "0px -4px 3px rgba(50, 50, 50, 0.35)" }}>
                <TextField
                  id="first-name"
                  label="Add Comment"
                  margin="normal"
                />
              </Container>
            </Row>
          </Col>
        </Row>
      </Container >



    );
  };
};

export default Discussion

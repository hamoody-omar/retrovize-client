import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import LoginModal from "../auth/LoginModal";
import SignupModal2 from "../auth/SinupModal2";
import store from "../../store";
import {
  setShowLoginModal,
  setShowSignupModal1,
  setShowSignupModal2,
  setCloseLoginModal,
  setCloseSignupModal1,
  setCloseSignupModal2
} from "../../actions/modalActions";
import { Favorite, Sms, Person, LocalTaxi, Search } from "@material-ui/icons";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      showLoginModal: props.showLoginModal,
      showSingupModal1: props.showSingupModal1,
      showSingupModal2: props.showSingupModal2
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      showLoginModal: nextProps.showLoginModal,
      showSingupModal2: nextProps.showSingupModal2
    });
  }

  handleShowLoginModal() {
    store.dispatch(setShowLoginModal());
  }

  handleCloseLoginModal() {
    store.dispatch(setCloseLoginModal());
  }

  handleShowSignupModal2() {
    store.dispatch(setShowSignupModal2());
  }

  handleCloseSignupModal2() {
    store.dispatch(setCloseSignupModal2());
  }

  handleShowSignupModal1() {
    store.dispatch(setShowSignupModal1());
  }

  handleCloseSignupModal1() {
    store.dispatch(setCloseSignupModal1());
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const navLinkStyle0 = {
      backgroundColor: "black",
      marginLeft: "7px",
      color: "white"
    };
    const navLinkStyle = {
      backgroundColor: "black",
      marginLeft: "20px",
      color: "white"
    };
    const { isAuthenticated } = this.props.auth;

    const authNav = (
      <Navbar.Collapse id="authtNav" className="_114hotj">
        <Nav className="_h0klba">
          <Nav.Item className="_fkdhqt">
            <Nav.Link href="/">
              <div className="_9ox9qdx">
                <Search fontSize="large" />
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="_fkdhqt">
            <Nav.Link href="#">
              <div className="_9ox9qdx">
                <Favorite fontSize="large" />
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="_fkdhqt">
            <Nav.Link href="#">
              <div className="_9ox9qdx">
                <LocalTaxi fontSize="large" />
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="_fkdhqt">
            <Nav.Link href="#">
              <div className="_9ox9qdx">
                <Sms fontSize="large" />
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className="_fkdhqt">
            <Nav.Link href="/account-settings">
              <div className="_9ox9qdx">
                <Person fontSize="large" />
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    );

    const guestNav = (
      <Navbar.Collapse id="guestNav">
        <Nav>
          <Nav.Item>
            <Nav.Link
              style={navLinkStyle}
              onClick={this.handleShowSignupModal2.bind(this)}
            >
              Sign up
            </Nav.Link>
          </Nav.Item>
          <SignupModal2
            show={this.state.showSingupModal2}
            onHide={this.handleCloseSignupModal2.bind(this)}
            next="/login"
          />
          <Nav.Item>
            <Nav.Link
              style={navLinkStyle}
              onClick={this.handleShowLoginModal.bind(this)}
            >
              Log in
            </Nav.Link>
          </Nav.Item>
          <LoginModal
            show={this.state.showLoginModal}
            onHide={this.handleCloseLoginModal.bind(this)}
            next="/"
          />
        </Nav>
      </Navbar.Collapse>
    );
    return (
      <React.Fragment>
        <Navbar className="bar top-nav-bar" sticky="top">
          <Navbar.Brand href="/">
            <img
              alt="Retrovize Logo"
              src={require("../../logo/retrovize_logo.JPG")}
              width="40"
              height="28"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle />
          {isAuthenticated ? null : guestNav}
        </Navbar>

        <Navbar>{isAuthenticated ? authNav : null}</Navbar>
      </React.Fragment>
    );
  }
}

NavigationBar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  showLoginModal: PropTypes.bool.isRequired,
  showSingupModal1: PropTypes.bool.isRequired,
  showSingupModal2: PropTypes.bool.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  showLoginModal: state.modal.showLoginModal,
  showSingupModal1: state.modal.showSingupModal1,
  showSingupModal2: state.modal.showSingupModal2
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(NavigationBar);

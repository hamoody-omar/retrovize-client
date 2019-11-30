import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Link } from "react-router-dom";
import {
  Card,
  Button,
  ButtonToolbar,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Row
} from "react-bootstrap";

export class AccountSettings extends Component {
  handleLogout(e) {
    e.preventDefault();
    this.props.logoutUser();
  }
  render() {
    const buttonStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginTop: "2px"
    };
    const linkStyle = {
      backgroundColor: "black",
      color: "white"
    };
    const divStyle = {
      marginTop: "20px"
    };
    return (
      <Card className="profile-settings" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Hi {this.props.auth.user.firstName}!</Card.Header>
        <Card.Body>
          <div style={divStyle}>
            <Link to="#" style={linkStyle}>
              Personal Info
            </Link>
          </div>
          <div style={divStyle}>
            <Link to="/host-car" style={linkStyle}>
              Host a car
            </Link>
          </div>
          <div style={divStyle}>
            <Link to="view-listings" style={linkStyle}>
              Your listings
            </Link>
          </div>
        </Card.Body>
        <Card.Footer>
          <ButtonToolbar>
            <Button
              style={buttonStyle}
              size="lg"
              onClick={this.handleLogout.bind(this)}
              block
            >
              Log out
            </Button>
          </ButtonToolbar>
        </Card.Footer>
      </Card>
    );
  }
}

AccountSettings.propTypes = {
  logoutUser: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(AccountSettings);

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Button, ButtonToolbar } from "react-bootstrap";

class Host extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const buttonStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginTop: "17px"
    };
    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Hi {this.props.auth.user.firstName}!</Card.Header>
        <Card.Body>
          <p>
            We’re excited to have you as a host on Retrovize. Let’s get started
            listing your car.
          </p>
          <ButtonToolbar>
            <Button
              style={buttonStyle}
              size="lg"
              onClick={e => {
                this.props.history.push("/host-personal-car");
              }}
              block
            >
              Host a personal car
            </Button>
            <Button
              style={buttonStyle}
              size="lg"
              onClick={e => {
                this.props.history.push("/host-company-car");
              }}
              block
            >
              Host a company car
            </Button>
          </ButtonToolbar>
        </Card.Body>
      </Card>
    );
  }
}

Host.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps)(Host);

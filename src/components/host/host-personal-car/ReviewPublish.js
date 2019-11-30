import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  FormGroup,
  FormControl,
  FormCheck,
  FormLabel,
  Row,
  Col
} from "react-bootstrap";

export class CarDetails extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleCarPublish(e) {
    e.preventDefault();
    this.props.handleCarPublish(
      { ID: this.props.values.ID, user: this.props.values.user },
      this.props.histroy
    );
  }

  render() {
    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Review and publish</Card.Header>
        <Card.Body>
          <h4>Driving license</h4>
          <h4>Car details</h4>
          <h4>Car registration</h4>
          <h4>Car location</h4>
          <h4>Car description and features</h4>
          <h4>Car availability and price</h4>
          <h4>Car photos</h4>
        </Card.Body>
        <Card.Footer>
          <ButtonToolbar>
            <Button
              style={this.props.backButtonStyle}
              size="lg"
              onClick={this.handlePrev.bind(this)}
            >
              Back
            </Button>
            <Button
              style={this.props.continueButtonStyle}
              size="lg"
              onClick={this.handleCarPublish.bind(this)}
            >
              Publish
            </Button>
          </ButtonToolbar>
        </Card.Footer>
      </Card>
    );
  }
}

export default CarDetails;

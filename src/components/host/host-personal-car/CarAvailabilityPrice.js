import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
  Col
} from "react-bootstrap";

export class CarAvailabilityPrice extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();
    this.props.handleNext();
  }
  render() {
    const {
      values,
      handleChange,
      formControlStyle,
      continueButtonStyle,
      backButtonStyle
    } = this.props;

    const advanceNoticeOptions = [
      "Advance notice",
      "12 hours",
      "1 day",
      "2 days",
      "3 days"
    ];
    const selectAdvanceNoticeOptions = advanceNoticeOptions.map(option => {
      return option === "Advance notice" ? (
        <option key={`advance-notice-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`advance-notice-${option}`} value={option}>
          {option}
        </option>
      );
    });

    const minimumTripOptions = [
      "Minimum trip",
      "Any",
      "1 day",
      "2 days",
      "3 days",
      "4 days",
      "5 days"
    ];
    const selectMinimumTripOptions = minimumTripOptions.map(option => {
      return option === "Minimum trip" ? (
        <option key={`minimum-trip-${option}`} value={option} disabled>
          {option}
        </option>
      ) : (
        <option key={`minimum-trip-${option}`} value={option}>
          {option}
        </option>
      );
    });

    const maximumTripOptions = [
      "Maximum trip",
      "Any",
      "5 days",
      "1 week",
      "2 weeks",
      "3 weeks",
      "1 month"
    ];
    const selectMaximumTripOptions = maximumTripOptions.map(option => {
      return option === "Maximum trip" ? (
        <option key={`maximum-trip-${option}`} value={option} disabled>
          {option}
        </option>
      ) : (
        <option key={`maximum-trip-${option}`} value={option}>
          {option}
        </option>
      );
    });

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car price and availability</Card.Header>
        <Card.Body>
          <label>Daily price</label>
          <Row style={{ marginBottom: "15px" }}>
            <InputGroup as={Col}>
              <InputGroup.Prepend>
                <InputGroup.Text style={{ color: "black" }}>$</InputGroup.Text>
              </InputGroup.Prepend>

              <FormControl
                name="dailyPrice"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.dailyPrice}
                size="lg"
              />
              <InputGroup.Append>
                <InputGroup.Text style={{ color: "black" }}>
                  .00
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Advance notice</FormLabel>
              <FormControl
                as="select"
                name="advanceNotice"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.advanceNotice}
                size="lg"
              >
                {selectAdvanceNoticeOptions}
              </FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Minimum trip</FormLabel>
              <FormControl
                as="select"
                name="minimumTrip"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.minimumTrip}
                size="lg"
              >
                {selectMinimumTripOptions}
              </FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Maximum trip</FormLabel>
              <FormControl
                as="select"
                name="maximumTrip"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.maximumTrip}
                size="lg"
              >
                {selectMaximumTripOptions}
              </FormControl>
            </FormGroup>
          </Row>
        </Card.Body>
        <Card.Footer>
          <ButtonToolbar>
            <Button
              style={backButtonStyle}
              size="lg"
              onClick={this.handlePrev.bind(this)}
            >
              Back
            </Button>
            <Button
              style={continueButtonStyle}
              size="lg"
              onClick={this.handleNext.bind(this)}
            >
              Continue
            </Button>
          </ButtonToolbar>
        </Card.Footer>
      </Card>
    );
  }
}

export default CarAvailabilityPrice;

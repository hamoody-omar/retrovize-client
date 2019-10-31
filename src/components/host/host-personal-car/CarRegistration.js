import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl,
  FormCheck
} from "react-bootstrap";

export class CarRegistration extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();
    this.props.handleNext();
  }
  render() {
    const { values, handleChange } = this.props;
    const odometerOptions = [
      "0-50K miles",
      "50K-100K miles",
      "100K-150K miles",
      "150K+ miles"
    ];
    const selectOdometerOptions = odometerOptions.map(option => (
      <option key={`month-${option}`} value={option}>
        {option}
      </option>
    ));
    const plateStateOrProvinceStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "28%",
      maxWidth: "28%",
      marginBottom: "7px"
    };
    const odometerStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "70%",
      maxWidth: "70%",
      marginBottom: "7px"
    };

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car registration</Card.Header>
        <Card.Body>
          <label>License plate number</label>
          <InputGroup>
            <FormControl
              name="plateNumber"
              type="text"
              placeholder="Plate number"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue={values.plateNumber}
              size="lg"
            />
          </InputGroup>
          <label>State</label>

          <InputGroup>
            <FormControl
              as="select"
              name="plateStateOrProvince"
              style={plateStateOrProvinceStyle}
              onChange={handleChange}
              defaultValue={values.plateStateOrProvince}
              size="lg"
            >
              {this.props.selectStateOptions}
            </FormControl>
          </InputGroup>
          <label>Odometer</label>
          <InputGroup>
            <FormControl
              as="select"
              name="odometer"
              onChange={handleChange}
              defaultValue={values.odometer}
              style={odometerStyle}
              size="lg"
            >
              {selectOdometerOptions}
            </FormControl>
          </InputGroup>
          <InputGroup>
            <FormCheck
              checked={values.isClean}
              label="isClean"
              name="isClean"
              id="isClean"
              onChange={this.props.handleCheckBoxChange}
              size="lg"
            />
          </InputGroup>
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

export default CarRegistration;

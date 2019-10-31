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

export class CarDetails extends Component {
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

    const yearOptions = [
      1990,
      1991,
      1992,
      1993,
      1994,
      1995,
      1996,
      1997,
      1998,
      1999,
      2000,
      2001,
      2002,
      2003,
      2004,
      2005,
      2006,
      2007,
      2008,
      2009,
      2010,
      2011,
      2012,
      2013,
      2014,
      2015,
      2016,
      2017,
      2918,
      2019,
      2020
    ];
    const selectYearOptions = yearOptions.map(option => (
      <option key={`year-${option}`} value={option}>
        {option}
      </option>
    ));

    const VINlicenseNumberStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "53%",
      marginBottom: "7px"
    };
    const issuingDayStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      maxWidth: "20%",
      minWidth: "20%",
      marginBottom: "7px"
    };

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car details</Card.Header>
        <Card.Body>
          <label>VIN</label>
          <InputGroup>
            <FormControl
              name="VIN"
              type="text"
              placeholder="VIN"
              onChange={handleChange}
              style={VINlicenseNumberStyle}
              defaultValue={values.VIN}
              size="lg"
            />
          </InputGroup>
          <label>Make and model</label>
          <InputGroup>
            <FormControl
              as="select"
              name="make"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue={values.make}
              size="lg"
            ></FormControl>
            <FormControl
              as="select"
              name="modal"
              onChange={handleChange}
              style={this.props.formControlStyle2}
              defaultValue={values.modal}
              size="lg"
            ></FormControl>
            <FormControl
              as="select"
              name="year"
              onChange={handleChange}
              style={this.props.formControlStyle2}
              defaultValue={values.year}
              size="lg"
            >
              {selectYearOptions}
            </FormControl>
          </InputGroup>
          <label style={{ marginTop: "7px", marginBottom: "7px" }}>
            Transmission
          </label>
          <InputGroup>
            <FormCheck
              type="radio"
              label="Automatic"
              name="automatic"
              id="automatic"
              size="lg"
            />
            <FormCheck
              type="radio"
              label="Manual"
              name="manual"
              style={{ marginLeft: "30px" }}
              id="manual"
              size="lg"
            />
            <FormCheck
              type="radio"
              label="Both"
              name="both"
              style={{ marginLeft: "30px" }}
              id="both"
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

export default CarDetails;

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  Card,
  Button,
  ButtonToolbar,
  InputGroup,
  FormControl
} from "react-bootstrap";

export class DrivingLicense extends Component {
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
    /*const selectStyleMonth1 = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "22%",
      maxWidth: "22%",
      marginRight: "6px",
      marginBottom: "7px"
    };
    const selectStyleMonth2 = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "22%",
      maxWidth: "22%",
      marginRight: "6px",
      marginBottom: "7px"
    };
    const selectStyleDay = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "22%",
      maxWidth: "22%",
      marginRight: "6px",
      marginLeft: "6px",
      marginBottom: "7px"
    };
    const selectStyleYear1 = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "33%",
      maxWidth: "33%",
      marginLeft: "6px",
      marginBottom: "7px"
    };
    const selectStyleYear2 = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "33%",
      maxWidth: "33%",
      marginLeft: "6px",
      marginBottom: "7px"
    };
    const selectStyleCountry = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "44%",
      maxWidth: "44%",
      marginRight: "6px",
      marginBottom: "7px"
    };
    const selectStyleSateOrProvince = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "23%",
      maxWidth: "23%",
      marginLeft: "6px",
      marginBottom: "7px"
    };*/

    const licenseNumberStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "45%",
      marginRight: "6px",
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

    const monthOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const selectMonthOptions = monthOptions.map(option => (
      <option key={`month-${option}`} value={option}>
        {option}
      </option>
    ));
    const dayOptions = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31
    ];
    const selectDayOptions = dayOptions.map(option => (
      <option key={`month-${option}`} value={option}>
        {option}
      </option>
    ));
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
      2019
    ];
    const selectYearOptions = yearOptions.map(option => (
      <option key={`year-${option}`} value={option}>
        {option}
      </option>
    ));
    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Driving license information</Card.Header>
        <Card.Body>
          <label>First name</label>
          <InputGroup>
            <FormControl
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue={values.firstName}
              size="lg"
            />
          </InputGroup>
          <label>Middle name</label>
          <InputGroup>
            <FormControl
              name="middleName"
              type="text"
              placeholder="middle name"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue={values.middleName}
              size="lg"
            />
          </InputGroup>
          <label>Last name</label>
          <InputGroup>
            <FormControl
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue={values.lastName}
              size="lg"
            />
          </InputGroup>
          <label>License number</label>
          <InputGroup>
            <FormControl
              name="licenseNumber"
              type="number"
              placeholder="Number"
              onChange={handleChange}
              style={licenseNumberStyle}
              defaultValue={values.licenseNumber}
              size="lg"
            />
            <FormControl
              as="select"
              name="issuingMonth"
              onChange={handleChange}
              defaultValue={values.issuingMonth}
              style={issuingDayStyle}
              size="lg"
            >
              {selectMonthOptions}
            </FormControl>
            <FormControl
              as="select"
              name="issuingYear"
              onChange={handleChange}
              defaultValue={values.issuingYear}
              style={this.props.formControlStyle2}
              size="lg"
            >
              {selectYearOptions}
            </FormControl>
          </InputGroup>
          <label style={{ whiteSpace: "pre-wrap" }}>Issuing place</label>
          <InputGroup>
            <FormControl
              name="issuingCountry"
              type="text"
              onChange={handleChange}
              style={this.props.formControlStyle}
              defaultValue="United states"
              disabled={true}
              size="lg"
            />
            <FormControl
              as="select"
              name="issuingStateOrProvince"
              onChange={handleChange}
              defaultValue={values.issuingStateOrProvince}
              style={this.props.formControlStyle2}
              size="lg"
            >
              {this.props.selectStateOptions}
            </FormControl>
          </InputGroup>
          <label>Date of birth</label>
          <InputGroup>
            <FormControl
              as="select"
              name="birthMonth"
              onChange={handleChange}
              defaultValue={values.birthMonth}
              style={this.props.formControlStyle}
              size="lg"
            >
              {selectMonthOptions}
            </FormControl>
            <FormControl
              as="select"
              name="birthDay"
              onChange={handleChange}
              defaultValue={values.birthDay}
              style={this.props.formControlStyle2}
              size="lg"
            >
              {selectDayOptions}
            </FormControl>
            <FormControl
              as="select"
              name="birthYear"
              onChange={handleChange}
              defaultValue={values.birthYear}
              style={this.props.formControlStyle2}
              size="lg"
            >
              {selectYearOptions}
            </FormControl>
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

export default DrivingLicense;

import React, { Component } from "react";

import {
  Card,
  Button,
  ButtonToolbar,
  FormControl,
  Row,
  Col,
  FormLabel,
  FormGroup
} from "react-bootstrap";

export class DrivingLicense extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();
    const { values, handleDrivingLicenseSave } = this.props;
    const drivingLicense = {
      user: values.user,
      firstName: values.firstName,
      middleName: values.middleName,
      lastName: values.lastName,
      licenseNumber: values.licenseNumber,
      issuingMonth: values.issuingMonth,
      issuingYear: values.issuingYear,
      issuingCountry: values.issuingCountry,
      issuingStateOrProvince: values.issuingStateOrProvince,
      birthDay: values.birthDay,
      birthMonth: values.birthMonth,
      birthYear: values.birthYear
    };

    handleDrivingLicenseSave(drivingLicense, "nextStep");

    //this.props.handleNext();
  }
  render() {
    const {
      values,
      handleChange,
      formControlStyle,
      backButtonStyle,
      continueButtonStyle
    } = this.props;

    const monthOptions = ["Month", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const selectMonthOptions = monthOptions.map(option => {
      return option === "Month" ? (
        <option key={`month-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`month-${option}`} value={option}>
          {option}
        </option>
      );
    });
    const dayOptions = [
      "Day",
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
    const selectDayOptions = dayOptions.map(option => {
      return option === "Day" ? (
        <option key={`day-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`day-${option}`} value={option}>
          {option}
        </option>
      );
    });
    const birthYearOptions = [
      1940,
      1941,
      1942,
      1943,
      1944,
      1945,
      1946,
      1947,
      1948,
      1949,
      1950,
      1951,
      1952,
      1953,
      1954,
      1955,
      1956,
      1957,
      1958,
      1959,
      1960,
      1961,
      1962,
      1963,
      1964,
      1965,
      1966,
      1967,
      1968,
      1969,
      1970,
      1971,
      1972,
      1973,
      1974,
      1975,
      1976,
      1977,
      1978,
      1979,
      1980,
      1981,
      1982,
      1983,
      1984,
      1985,
      1986,
      1987,
      1988,
      1989,
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
      "Year"
    ];
    const selectBirthYearOptions = birthYearOptions.reverse().map(option => {
      return option === "Year" ? (
        <option key={`issuing-year-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`issuing-year-${option}`} value={option}>
          {option}
        </option>
      );
    });
    const issuingYearOptions = [
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
      2018,
      2019,
      "Year"
    ];
    const selectIssuingYearOptions = issuingYearOptions
      .reverse()
      .map(option => {
        return option === "Year" ? (
          <option key={`issuing-year-${option}`} value="" selected disabled>
            {option}
          </option>
        ) : (
          <option key={`issuing-year-${option}`} value={option}>
            {option}
          </option>
        );
      });
    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Driving license</Card.Header>
        <Card.Body>
          <p>
            Please provide information as it appears on your driving license
          </p>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.firstName ? { color: "#cc0000" } : null}
              >
                First name
              </FormLabel>
              <FormControl
                name="firstName"
                type="text"
                placeholder="First name"
                onChange={handleChange}
                style={this.props.formControlStyle}
                defaultValue={values.firstName}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.middleName ? { color: "#cc0000" } : null}
              >
                Middle name
              </FormLabel>
              <FormControl
                name="middleName"
                type="text"
                placeholder="middle name"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.middleName}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.lastName ? { color: "#cc0000" } : null}
              >
                Last name
              </FormLabel>
              <FormControl
                name="lastName"
                type="text"
                placeholder="Last name"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.lastName}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={
                  values.errors.licenseNumber ? { color: "#cc0000" } : null
                }
              >
                License number
              </FormLabel>
              <FormControl
                name="licenseNumber"
                type="number"
                placeholder="Number"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.licenseNumber}
                size="lg"
              />
            </FormGroup>
            {/*values.errors.licenseNumber && (
              <p style={{ color: "#cc0000" }}>{values.errors.licenseNumber}</p>
            )*/}
          </Row>
          <Row>
            <FormGroup as={Col} md="6">
              <FormLabel
                style={
                  values.errors.issuingCountry ? { color: "#cc0000" } : null
                }
              >
                Issuing country
              </FormLabel>
              <FormControl
                name="issuingCountry"
                type="text"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.issuingCountry}
                disabled={true}
                size="lg"
              />
            </FormGroup>
            <FormGroup as={Col} md="6">
              <FormLabel
                style={
                  values.errors.issuingStateOrProvince
                    ? { color: "#cc0000" }
                    : null
                }
              >
                Issuing state / province
              </FormLabel>
              <FormControl
                as="select"
                name="issuingStateOrProvince"
                onChange={handleChange}
                defaultValue={values.issuingStateOrProvince}
                style={formControlStyle}
                size="lg"
              >
                {this.props.selectStateOptions}
              </FormControl>
            </FormGroup>
            {/*values.errors.issuingCountry ||
              (values.errors.issuingStateOrProvince && (
                <p style={{ color: "#cc0000" }}>
                  {values.errors.issuingCountry
                    ? values.errors.licenseNumber
                    : values.errors.issuingStateOrProvince}{" "}
                </p>
                  ))*/}
          </Row>
          <Row>
            <FormGroup as={Col} md="3">
              <FormLabel
                style={values.errors.issuingMonth ? { color: "#cc0000" } : null}
              >
                Issuing month
              </FormLabel>
              <FormControl
                as="select"
                name="issuingMonth"
                onChange={handleChange}
                defaultValue={values.issuingMonth}
                style={formControlStyle}
                size="lg"
              >
                {selectMonthOptions}
              </FormControl>
            </FormGroup>
            <FormGroup as={Col} md="3">
              <FormLabel
                style={values.errors.issuingYear ? { color: "#cc0000" } : null}
              >
                Issuing year
              </FormLabel>
              <FormControl
                as="select"
                name="issuingYear"
                onChange={handleChange}
                defaultValue={values.issuingYear}
                style={formControlStyle}
                size="lg"
              >
                {selectIssuingYearOptions}
              </FormControl>
            </FormGroup>
            {/*values.errors.issuingYear ||
              (values.errors.issuingMonth && (
                <p style={{ color: "#cc0000" }}>
                  {values.errors.issuingYear
                    ? values.errors.issuingYear
                    : values.errors.issuingMonth}{" "}
                </p>
                  ))*/}
          </Row>
          <FormLabel
            style={
              values.errors.birthDay ||
              values.errors.birthMonth ||
              values.errors.birthYear
                ? { color: "#cc0000" }
                : null
            }
          >
            Birth date
          </FormLabel>
          <Row>
            <FormGroup as={Col} md="3">
              <FormControl
                as="select"
                name="birthMonth"
                onChange={handleChange}
                defaultValue={values.birthMonth}
                style={formControlStyle}
                size="lg"
              >
                {selectMonthOptions}
              </FormControl>
            </FormGroup>
            <FormGroup as={Col} md="3">
              <FormControl
                as="select"
                name="birthDay"
                onChange={handleChange}
                defaultValue={values.birthDay}
                style={formControlStyle}
                size="lg"
              >
                {selectDayOptions}
              </FormControl>
            </FormGroup>
            <FormGroup as={Col} md="6">
              <FormControl
                as="select"
                name="birthYear"
                onChange={handleChange}
                defaultValue={values.birthYear}
                style={formControlStyle}
                size="lg"
              >
                {selectBirthYearOptions}
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

export default DrivingLicense;

import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import DrivingLicense from "./DrivingLicense";
import CarDetails from "./CarDetails";
import CarRegistration from "./CarRegistration";

export class HostPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      VIN: "",
      make: "",
      model: "",
      year: "",
      location: "",
      odometer: "",
      transmission: "",
      isClean: true,
      plateNumber: "",
      plateStateOrProvince: "",
      description: "",
      features: [],
      phoneNumberExists: false, //props.profile.phoneNumberExist,
      phoneNumber: "",
      drivingLicenseExists: false, //props.profile.drivingLicenseExists,
      firstName: this.props.auth.user.firstName,
      middleName: "",
      lastName: this.props.auth.user.lastName,
      licenseNumber: "",
      issuingMonth: "",
      issuingYear: "",
      issuingCountry: "",
      issuingStateOrProvince: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      advanceNotice: "",
      minimumTrip: "",
      maximumTrip: "",
      dailyPrice: "",
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleChange(e) {
    const targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
    if (this.state.errors.hasOwnProperty(targetName)) {
      this.setState({ errors: { ...this.state.errors, [targetName]: "" } });
    }
  }

  handleCheckBoxChange(e) {
    const targetName = e.target.name;
    const newVal = !this.state[targetName];
    this.setState({ [targetName]: newVal });
  }

  nextStep() {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  prevStep() {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  render() {
    const {
      step,
      VIN,
      make,
      model,
      year,
      odometer,
      transmission,
      isClean,
      plateNumber,
      plateStateOrProvince,
      description,
      location,
      features,
      phoneNumberExists,
      phoneNumber,
      drivingLicenseExists,
      firstName,
      middleName,
      lastName,
      licenseNumber,
      issuingMonth,
      issuingYear,
      issuingCountry,
      issuingStateOrProvince,
      birthMonth,
      birthDay,
      birthYear,
      advanceNotice,
      minimumTrip,
      maximumTrip,
      dailyPrice,
      errors
    } = this.state;

    const drivingLicenseValues = {
      firstName,
      middleName,
      lastName,
      licenseNumber,
      issuingMonth,
      issuingYear,
      issuingCountry,
      issuingStateOrProvince,
      birthMonth,
      birthDay,
      birthYear,
      errors
    };
    const carDetailValues = {
      VIN,
      make,
      model,
      year,
      transmission,
      errors
    };
    const carRegistrationValues = {
      plateNumber,
      plateStateOrProvince,
      odometer,
      isClean,
      errors
    };
    const carDescriptionFeaturesLocation = {
      description,
      features,
      location,
      errors
    };
    const carAvailabilityPrice = {
      advanceNotice,
      minimumTrip,
      maximumTrip,
      dailyPrice,
      errors
    };
    const backButtonStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      minWidth: "120px",
      marginTop: "5px"
    };
    const continueButtonStyle = {
      backgroundColor: "white",
      color: "black",
      border: "1px solid white",
      marginTop: "5px",
      right: "35px",
      position: "absolute"
    };
    const formControlStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginBottom: "7px"
    };

    const formControlStyle2 = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginLeft: "6px",
      marginBottom: "7px"
    };
    const stateOptions = [
      "AL",
      "AK",
      "AZ",
      "AR",
      "CA",
      "CO",
      "CT",
      "DE",
      "FL",
      "GA",
      "HI",
      "ID",
      "IL",
      "IN",
      "IA",
      "KS",
      "KY",
      "LA",
      "ME",
      "MD",
      "MA",
      "MI",
      "MN",
      "MS",
      "MO",
      "MT",
      "NE",
      "NV",
      "NH",
      "NJ",
      "NM",
      "NY",
      "NC",
      "ND",
      "OH",
      "OK",
      "OR",
      "PA",
      "RI",
      "SC",
      "SD",
      "TN",
      "TX",
      "UT",
      "VT",
      "VA",
      "WA",
      "WV",
      "WI",
      "WY"
    ];
    const selectStateOptions = stateOptions.map(option => (
      <option key={option} value={option}>
        {option}
      </option>
    ));

    switch (step) {
      case 1: {
        if (drivingLicenseExists) {
          this.nextStep();
        } else {
          return (
            <DrivingLicense
              values={drivingLicenseValues}
              handleChange={this.handleChange}
              handlePrev={this.prevStep}
              handleNext={this.nextStep}
              backButtonStyle={backButtonStyle}
              continueButtonStyle={continueButtonStyle}
              formControlStyle={formControlStyle}
              formControlStyle2={formControlStyle2}
              selectStateOptions={selectStateOptions}
            />
          );
        }
        break;
      }
      case 2: {
        return (
          <CarDetails
            values={carDetailValues}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            formControlStyle2={formControlStyle2}
          />
        );
        break;
      }

      case 3:
        return (
          <CarRegistration
            values={carRegistrationValues}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            handleCheckBoxChange={this.handleCheckBoxChange}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            formControlStyle2={formControlStyle2}
            selectStateOptions={selectStateOptions}
          />
        );
      default:
        return <div style={{ color: "black" }}> driving license</div>;
    }
  }
}
HostPersonal.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(mapStateToProps)(HostPersonal);

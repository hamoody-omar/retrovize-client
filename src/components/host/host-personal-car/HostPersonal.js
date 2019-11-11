import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import DrivingLicense from "./DrivingLicense";
import CarDetails from "./CarDetails";
import CarRegistration from "./CarRegistration";
import CarLocation from "./CarLocation";
import CarDescriptionFeatures from "./CarDescriptionFeatures";
import CarAvailabilityPrice from "./CarAvailabilityPrice";
import { saveDrivingLicense } from "../../../actions/profileActions";
import {
  saveCarSpecification,
  getCarSpecification,
  saveCarRegistration,
  saveCarLocation,
  saveCarDesFtr
} from "../../../actions/hostActions";
import {
  clearError,
  clearCarSpecification,
  incrementHostStep,
  decrementHostStep
} from "../../../actions/commonActions";
import store from "../../../store";

export class HostPersonal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: this.props.host.step,
      VIN: "",
      make: "",
      model: "",
      year: "",
      odometer: "",
      transmission: "",
      isClean: true,
      plateNumber: "",
      plateStateOrProvince: "",
      description: "",
      phoneNumberExists: false, //props.profile.phoneNumberExist,
      phoneNumber: "",
      drivingLicenseExists: false, //props.profile.drivingLicenseExists,
      firstName: this.props.auth.user.firstName,
      middleName: "",
      lastName: this.props.auth.user.lastName,
      licenseNumber: "",
      issuingMonth: "",
      issuingYear: "",
      issuingCountry: "United states",
      issuingStateOrProvince: "",
      birthMonth: "",
      birthDay: "",
      birthYear: "",
      locationCountry: "United States",
      locationStreetAddress: "",
      locationAptSuite: null,
      locationCity: "",
      locationStateOrProvince: "",
      locationZipCode: null,
      advanceNotice: "",
      minimumTrip: "",
      maximumTrip: "",
      dailyPrice: "",
      features: {
        GPS: [false, "GPS"],
        Bluetooth: [false, "Bluetooth"],
        USBInput: [false, "USB Input"],
        audioInput: [false, "Audio Input"],
        EVHybrid: [false, "EV / Hybrid"],
        allWheelDrive: [false, "All wheel Drive"],
        convertible: [false, "Convertible"],
        sunRoof: [false, "Sun roof"]
      },
      profile: this.props.profile,
      host: this.props.host,
      modifyingVIN: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    this.handleFeatureCheckBox = this.handleFeatureCheckBox.bind(this);
    this.handleDrivingLicenseSave = this.handleDrivingLicenseSave.bind(this);
    this.handleGetCarSpecification = this.handleGetCarSpecification.bind(this);
    this.handleCarSpecificationSave = this.handleCarSpecificationSave.bind(
      this
    );
    this.handleModifyVIN = this.handleModifyVIN.bind(this);
    this.handleTransmissionRadioButtonChange = this.handleTransmissionRadioButtonChange.bind(
      this
    );
    this.handleCarRegistrationSave = this.handleCarRegistrationSave.bind(this);
    this.handleCarLocationSave = this.handleCarLocationSave.bind(this);
    this.handleCarDesFtrnSave = this.handleCarDesFtrnSave.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { errors, profile, host } = nextProps;
    const newVal = host.carSpecification && !errors.VIN ? true : false;
    this.setState({
      errors: errors,
      profile: profile,
      host: host,
      step: host.step,
      modifyingVIN: newVal
    });
  }

  handleChange(e) {
    const targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
    if (targetName === "VIN") {
      this.setState({
        modifyingVIN: false,
        isClean: true,
        transmission: "",
        odometer: ""
      });
      store.dispatch(clearCarSpecification());
    }
    if (this.state.errors.hasOwnProperty(targetName)) {
      store.dispatch(clearError(targetName));
    }
  }

  handleCheckBoxChange(e) {
    const targetName = e.target.name;
    const newVal = !this.state[targetName];
    this.setState({ [targetName]: newVal });
    if (this.state.errors.hasOwnProperty(targetName)) {
      store.dispatch(clearError(targetName));
    }
  }

  handleTransmissionRadioButtonChange(e) {
    const targetName = e.target.name;
    const transmission = targetName === "automatic" ? "Automatic" : "Manual";
    this.setState({ transmission: transmission });
    if (this.state.errors.hasOwnProperty("transmission")) {
      store.dispatch(clearError("transmission"));
    }
  }

  handleFeatureCheckBox(e) {
    const targetName = e.target.name;
    const features = this.state.features;
    features[targetName][0] = !features[targetName][0];
    this.setState({ features: features });
    if (this.state.errors.hasOwnProperty(targetName)) {
      store.dispatch(clearError(targetName));
    }
  }

  nextStep() {
    //const { step } = this.state;
    //this.setState({ step: step + 1 });
    store.dispatch(incrementHostStep());
    console.log("Errors");
    console.log(this.state.errors);
    console.log("profile");
    console.log(this.state.profile);
    console.log("host");
    console.log(this.state.host);
  }

  prevStep() {
    //const { step } = this.state;
    ///this.setState({ step: step - 1 });
    store.dispatch(decrementHostStep());
  }

  handleDrivingLicenseSave(drivingLicense, next) {
    this.props.saveDrivingLicense(drivingLicense, next);
  }

  handleGetCarSpecification() {
    const carVIN = { VIN: this.state.VIN };
    this.props.getCarSpecification(carVIN, null);
  }

  handleCarSpecificationSave(carData, next) {
    this.props.saveCarSpecification(carData, next);
  }

  handleModifyVIN() {
    this.setState({ modifyingVIN: false });
  }

  handleCarRegistrationSave(carData, next) {
    this.props.saveCarRegistration(carData, next);
  }

  handleCarLocationSave(locationData, next) {
    this.props.saveCarLocation(locationData, next);
  }

  handleCarDesFtrnSave(carDesFtr, next) {
    this.props.saveCarDesFtr(carDesFtr, next);
  }

  render() {
    const {
      step,
      VIN,
      odometer,
      transmission,
      isClean,
      plateNumber,
      plateStateOrProvince,
      description,
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
      locationCountry,
      locationStreetAddress,
      locationAptSuite,
      locationCity,
      locationStateOrProvince,
      locationZipCode,
      advanceNotice,
      minimumTrip,
      maximumTrip,
      dailyPrice,
      host,
      modifyingVIN,
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
      host,
      modifyingVIN,
      transmission,
      odometer,
      isClean,
      errors
    };
    const carRegistrationValues = {
      plateNumber,
      plateStateOrProvince,
      errors
    };
    const carDescriptionFeatures = {
      description,
      features,
      errors
    };
    const carLocationValues = {
      locationCountry,
      locationStreetAddress,
      locationAptSuite,
      locationCity,
      locationStateOrProvince,
      locationZipCode,
      errors
    };
    const carAvailabilityPrice = {
      advanceNotice,
      minimumTrip,
      maximumTrip,
      dailyPrice,
      errors
    };
    const buttonStyle = {
      backgroundColor: "white",
      color: "black",
      border: "1px solid white",
      marginTop: "2px"
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
      border: "1px solid white"
    };

    const stateOptions = [
      "State",
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
    const selectStateOptions = stateOptions.map(option => {
      return option === "State" ? (
        <option key={`state-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`state-${option}`} value={option}>
          {option}
        </option>
      );
    });

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
              selectStateOptions={selectStateOptions}
              handleDrivingLicenseSave={this.handleDrivingLicenseSave}
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
            handleCheckBoxChange={this.handleCheckBoxChange}
            handleCarSpecificationSave={this.handleCarSpecificationSave}
            handleGetCarSpecification={this.handleGetCarSpecification}
            handleModifyVIN={this.handleModifyVIN}
            handleTransmissionRadioButtonChange={
              this.handleTransmissionRadioButtonChange
            }
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            buttonStyle={buttonStyle}
          />
        );
      }
      case 3: {
        return (
          <CarRegistration
            values={carRegistrationValues}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            handleCarRegistrationSave={this.handleCarRegistrationSave}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            selectStateOptions={selectStateOptions}
          />
        );
      }
      case 4: {
        return (
          <CarLocation
            values={carLocationValues}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            handleCarLocationSave={this.handleCarLocationSave}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            selectStateOptions={selectStateOptions}
            buttonStyle={buttonStyle}
          />
        );
      }
      case 5: {
        return (
          <CarDescriptionFeatures
            values={carDescriptionFeatures}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            handleCarDesFtrnSave={this.handleCarDesFtrnSave}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            handleFeatureCheckBox={this.handleFeatureCheckBox}
          />
        );
      }
      case 6: {
        return (
          <CarAvailabilityPrice
            values={carAvailabilityPrice}
            handleChange={this.handleChange}
            handlePrev={this.prevStep}
            handleNext={this.nextStep}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
          />
        );
      }
      default:
        return <div style={{ color: "black" }}> driving license</div>;
    }
  }
}
HostPersonal.propTypes = {
  saveDrivingLicense: PropTypes.func.isRequired,
  getCarSpecification: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  host: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
  profile: state.profile,
  host: state.host,
  step: state.host.step
});
export default connect(
  mapStateToProps,
  {
    saveDrivingLicense,
    saveCarSpecification,
    getCarSpecification,
    saveCarRegistration,
    saveCarLocation,
    saveCarDesFtr
  }
)(withRouter(HostPersonal));

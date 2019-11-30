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
import CarPhotos from "./CarPhotos";
import ReviewPublish from "./ReviewPublish";
import { saveDrivingLicense } from "../../../actions/profileActions";
import {
  saveCarSpecification,
  getCarSpecification,
  saveCarRegistration,
  saveCarLocation,
  saveCarDesFtr,
  savePriceAvailability,
  uploadCarPhoto,
  publishCar
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
      ID:
        this.props.auth.user.firstName +
        Math.random()
          .toString(36)
          .substr(2, 9) +
        Date.now(),
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
      imagePreviewUrls: [],
      profile: this.props.profile,
      host: this.props.host,
      modifyingVIN: false,
      errors: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.prevStep = this.prevStep.bind(this);
    this.handleImageUpload = this.handleImageUpload.bind(this);
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
    this.handleCarPriceAvailabitliySave = this.handleCarPriceAvailabitliySave.bind(
      this
    );
    this.handleUploadCarPhoto = this.handleUploadCarPhoto.bind(this);
    this.handleCarPublish = this.handleCarPublish.bind(this);
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
    store.dispatch(incrementHostStep());
  }

  prevStep() {
    store.dispatch(decrementHostStep());
  }

  handleImageUpload(e) {
    e.preventDefault();
    console.log("come here ");
    console.log(e);

    const file = e.target.files[0];
    let imageFormObject = new FormData();

    imageFormObject.append("ID", this.state.ID);
    imageFormObject.append("userid", this.props.auth.user.id);
    imageFormObject.append("imageData", file);
    /*imageFormObject.append(
      "imageData",
      new Blob([file], { type: "image/png", name: this.state.ID })
    );*/

    this.props.uploadCarPhoto(imageFormObject, null);
    //const { errors } = this.props;
    //console.log(errors);
    //if (Object.keys(errors).length === 0) {
    const UpdateImagePreviewUrls = this.state.imagePreviewUrls;
    UpdateImagePreviewUrls.push(URL.createObjectURL(file));
    this.setState({
      imagePreviewUrls: UpdateImagePreviewUrls
    });
    //}
    /*reader.onloadend = () => {
      const UpdateImagePreviewUrls = this.state.imagePreviewUrls;
      //console.log(reader);
      UpdateImagePreviewUrls.push(reader.result);
      this.setState({
        imagePreviewUrls: UpdateImagePreviewUrls
      });
    };

    this.props.uploadCarPhoto(e.target.files[0], null);
    console.log("e file");
    console.log(e.target.value);
    //const { errors } = this.props;
    //if (!errors)
    reader.readAsDataURL(file);*/
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

  handleCarPriceAvailabitliySave(carPriceAvailabitliy, next) {
    this.props.savePriceAvailability(carPriceAvailabitliy, next);
  }

  handleUploadCarPhoto(carPhoto, next) {
    this.props.uploadCarPhoto(carPhoto, next);
  }

  handleCarPublish(data, history) {
    this.props.publishCar(data, history);
  }

  render() {
    const {
      ID,
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
      imagePreviewUrls,
      host,
      modifyingVIN,
      errors
    } = this.state;

    const drivingLicenseValues = {
      user: this.props.auth.user,
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
      user: this.props.auth.user,
      ID,
      VIN,
      host,
      modifyingVIN,
      transmission,
      odometer,
      isClean,
      errors
    };
    const carRegistrationValues = {
      user: this.props.auth.user,
      ID,
      plateNumber,
      plateStateOrProvince,
      errors
    };
    const carDescriptionFeatures = {
      user: this.props.auth.user,
      ID,
      description,
      features,
      errors
    };
    const carLocationValues = {
      user: this.props.auth.user,
      ID,
      locationCountry,
      locationStreetAddress,
      locationAptSuite,
      locationCity,
      locationStateOrProvince,
      locationZipCode,
      errors
    };
    const carAvailabilityPrice = {
      user: this.props.auth.user,
      ID,
      advanceNotice,
      minimumTrip,
      maximumTrip,
      dailyPrice,
      errors
    };
    const carPhotos = {
      user: this.props.auth.user,
      ID,
      imagePreviewUrls,
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
            handleFeatureCheckBox={this.handleFeatureCheckBox}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
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
            handleCarPriceAvailabitliySave={this.handleCarPriceAvailabitliySave}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
          />
        );
      }
      case 7: {
        return (
          <CarPhotos
            values={carPhotos}
            handlePrev={this.prevStep}
            handleImageUpload={this.handleImageUpload}
            handleNext={this.handleNext}
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
          />
        );
      }
      case 8: {
        return (
          <ReviewPublish
            backButtonStyle={backButtonStyle}
            continueButtonStyle={continueButtonStyle}
            formControlStyle={formControlStyle}
            handleCarPublish={this.handleCarPublish}
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
  errors: PropTypes.object.isRequired,
  host: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors,
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
    saveCarDesFtr,
    savePriceAvailability,
    uploadCarPhoto,
    publishCar
  }
)(withRouter(HostPersonal));

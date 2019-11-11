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
  handleNext(e) {
    e.preventDefault();
    const { values, handleCarSpecificationSave } = this.props;
    const carSpecification = {
      specification: values.host.carSpecification,
      odometer: values.odometer,
      transmission: values.transmission,
      isClean: values.isClean
    };
    handleCarSpecificationSave(carSpecification, "nextStep");
  }

  handleValidateVIN(e) {
    e.preventDefault();
    this.props.handleGetCarSpecification();
  }

  handleModifyVIN(e) {
    e.preventDefault();
    this.props.handleModifyVIN();
  }

  render() {
    const {
      values,
      handleChange,
      formControlStyle,
      backButtonStyle,
      continueButtonStyle,
      buttonStyle,
      handleCheckBoxChange,
      handleTransmissionRadioButtonChange
    } = this.props;

    const odometerOptions = [
      "Odometer",
      "0-50K miles",
      "50K-100K miles",
      "100K-150K miles",
      "150K+ miles"
    ];
    const selectOdometerOptions = odometerOptions.map(option => {
      return option === "Odometer" ? (
        <option key={`odometer-${option}`} value="" selected disabled>
          {option}
        </option>
      ) : (
        <option key={`odometer-${option}`} value={option}>
          {option}
        </option>
      );
    });

    let specification;
    if (values.host.carSpecification)
      specification = (
        <div
          style={{
            marginTop: "20px",
            marginBottom: "15px",
            whiteSpace: "pre-wrap"
          }}
        >
          <Row as={Col}>
            {values.host.carSpecification.make}
            {"  "}
            {values.host.carSpecification.model}
            {"  "}
            {values.host.carSpecification.year}
          </Row>
          <Row as={Col} style={{ marginTop: "15px" }}>
            {values.host.carSpecification.style}
            {"  "}
            {values.host.carSpecification.standard_seating} seats
            {"  "}
            {values.host.carSpecification.trim_level}
          </Row>
        </div>
      );

    const transmissionColor = values.errors.transmission ? "#cc0000" : null;

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car details</Card.Header>
        <Card.Body>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>VIN</FormLabel>
              <FormControl
                disabled={values.modifyingVIN}
                name="VIN"
                type="text"
                placeholder="VIN"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.VIN}
                size="lg"
              />
              {values.errors.VIN && (
                <p style={{ color: "#cc0000" }}>{values.errors.VIN}</p>
              )}
            </FormGroup>
          </Row>
          <ButtonToolbar>
            <Button
              style={buttonStyle}
              size="lg"
              onClick={
                values.modifyingVIN
                  ? this.handleModifyVIN.bind(this)
                  : this.handleValidateVIN.bind(this)
              }
              block
            >
              {values.modifyingVIN ? "Modify VIN" : "Validate"}
            </Button>
          </ButtonToolbar>
          {values.host.carSpecification ? (
            <div>
              {specification}
              <Row>
                <FormGroup as={Col}>
                  <FormLabel
                    style={values.errors.odometer ? { color: "#cc0000" } : null}
                  >
                    Odometer
                  </FormLabel>
                  <FormControl
                    as="select"
                    name="odometer"
                    onChange={handleChange}
                    defaultValue={values.odometer}
                    style={formControlStyle}
                    size="lg"
                  >
                    {selectOdometerOptions}
                  </FormControl>
                </FormGroup>
              </Row>
              <FormLabel
                style={{
                  marginTop: "7px",
                  marginBottom: "7px",
                  color: transmissionColor
                }}
              >
                Transmission
              </FormLabel>
              <Row>
                <FormGroup as={Col} md="4">
                  <FormCheck
                    type="radio"
                    label="Automatic"
                    name="automatic"
                    id="automatic"
                    size="lg"
                    checked={values.transmission === "Automatic"}
                    onChange={handleTransmissionRadioButtonChange}
                  />
                </FormGroup>
                <FormGroup as={Col}>
                  <FormCheck
                    type="radio"
                    label="Manual"
                    name="manual"
                    id="manual"
                    size="lg"
                    checked={values.transmission === "Manual"}
                    onChange={handleTransmissionRadioButtonChange}
                  />
                </FormGroup>
                {/*<FormCheck
              type="radio"
              label="Both"
              name="both"
              style={{ marginLeft: "30px" }}
              id="both"
              size="lg"
           /> */}
              </Row>
              <FormGroup style={{ marginTop: "14px", marginBottom: "7px" }}>
                <FormCheck
                  checked={values.isClean}
                  label="My car does not have a salvage or rebuilt title."
                  name="isClean"
                  id="isClean"
                  onChange={handleCheckBoxChange}
                  size="lg"
                />
              </FormGroup>
            </div>
          ) : null}
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
              disabled={!values.host.carSpecification}
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

export default CarDetails;

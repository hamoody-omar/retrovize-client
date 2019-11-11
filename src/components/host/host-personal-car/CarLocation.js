import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  FormGroup,
  FormControl,
  FormLabel,
  Col,
  Row
} from "react-bootstrap";

export class CarLocation extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();

    const { values, handleCarLocationSave } = this.props;

    const carLocation = {
      locationCity: values.locationCity,
      locationStateOrProvince: values.locationStateOrProvince,
      locationStreetAddress: values.locationStreetAddress,
      locationZipCode: values.locationZipCode,
      locationAptSuite: values.locationAptSuite,
      locationCountry: values.locationCountry
    };
    handleCarLocationSave(carLocation, "nextStep");
  }
  handleCurrentLocation(e) {}
  render() {
    const {
      values,
      handleChange,
      buttonStyle,
      formControlStyle,
      selectStateOptions,
      backButtonStyle,
      continueButtonStyle
    } = this.props;

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car location</Card.Header>
        <Card.Body>
          <p>
            Guests will only get your exact address once you have accepted their
            reservation requests.
          </p>
          <ButtonToolbar>
            <Button
              style={buttonStyle}
              size="lg"
              onClick={this.handleCurrentLocation.bind(this)}
              block
            >
              Use current location
            </Button>
          </ButtonToolbar>
          <Row style={{ marginTop: "20px" }}>
            <FormGroup as={Col}>
              <FormLabel
                style={
                  values.errors.locationCountry ? { color: "#cc0000" } : null
                }
              >
                Country
              </FormLabel>
              <FormControl
                disabled
                name="locationCountry"
                type="text"
                placeholder="eg. United States"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.locationCountry}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={
                  values.errors.locationStreetAddress
                    ? { color: "#cc0000" }
                    : null
                }
              >
                Street address
              </FormLabel>
              <FormControl
                name="locationStreetAddress"
                type="text"
                placeholder="eg. 123 Main St."
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.locationStreetAddress}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel>Apt, suite (optional)</FormLabel>
              <FormControl
                name="locationAptSuite"
                type="text"
                placeholder="eg. 109"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.locationAptSuite}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.locationCity ? { color: "#cc0000" } : null}
              >
                City
              </FormLabel>
              <FormControl
                name="locationCity"
                type="text"
                placeholder="eg. Raleigh"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.locationCity}
                size="lg"
              />
            </FormGroup>
            <FormGroup as={Col} md="3">
              <FormLabel
                style={
                  values.errors.locationStateOrProvince
                    ? { color: "#cc0000" }
                    : null
                }
              >
                State/province
              </FormLabel>
              <FormControl
                as="select"
                name="locationStateOrProvince"
                style={formControlStyle}
                onChange={handleChange}
                defaultValue={values.locationStateOrProvince}
                size="lg"
              >
                {selectStateOptions}
              </FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={
                  values.errors.locationZipCode ? { color: "#cc0000" } : null
                }
              >
                Zip code
              </FormLabel>
              <FormControl
                name="locationZipCode"
                type="number"
                placeholder="eg. 27610"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.locationZipCode}
                size="lg"
              />
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

export default CarLocation;

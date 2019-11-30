import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col
} from "react-bootstrap";

export class CarRegistration extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();

    const { values, handleCarRegistrationSave } = this.props;
    const carRegistration = {
      user: values.user,
      ID: values.ID,
      plateNumber: values.plateNumber,
      plateStateOrProvince: values.plateStateOrProvince
    };
    handleCarRegistrationSave(carRegistration, "nextStep");
  }
  render() {
    const {
      values,
      handleChange,
      formControlStyle,
      selectStateOptions,
      continueButtonStyle,
      backButtonStyle
    } = this.props;

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car registration</Card.Header>
        <Card.Body>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.plateNumber ? { color: "#cc0000" } : null}
              >
                License plate number
              </FormLabel>
              <FormControl
                name="plateNumber"
                type="text"
                placeholder="Plate number"
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.plateNumber}
                size="lg"
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup as={Col} md="6">
              <FormLabel
                style={
                  values.errors.plateStateOrProvince
                    ? { color: "#cc0000" }
                    : null
                }
              >
                State / province
              </FormLabel>
              <FormControl
                as="select"
                name="plateStateOrProvince"
                style={formControlStyle}
                onChange={handleChange}
                defaultValue={values.plateStateOrProvince}
                size="lg"
              >
                {selectStateOptions}
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

export default CarRegistration;

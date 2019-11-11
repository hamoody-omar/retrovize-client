import React, { Component } from "react";
import {
  Card,
  Button,
  ButtonToolbar,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
  Col
} from "react-bootstrap";

export class CarDescriptionFeatures extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();
    const { values, handleCarDesFtrnSave } = this.props;
    let ftrs = [];
    Object.keys(values.features).forEach(function(feature) {
      if (values.features[feature][0]) {
        ftrs.push(values.features[feature][1]);
      }
    });
    const carDesFtr = {
      description: values.description,
      features: ftrs
    };
    handleCarDesFtrnSave(carDesFtr, "nextStep");
  }
  render() {
    const {
      values,
      handleChange,
      formControlStyle,
      continueButtonStyle,
      backButtonStyle,
      handleFeatureCheckBox
    } = this.props;
    let features = [];
    Object.keys(values.features).forEach(function(feature) {
      features.push(
        <FormGroup key={feature}>
          <FormCheck
            checked={values.features[feature][0]}
            label={values.features[feature][1]}
            name={feature}
            id={feature}
            onChange={handleFeatureCheckBox}
            size="lg"
          />
        </FormGroup>
      );
    });

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car features</Card.Header>
        <Card.Body>
          <Row>
            <FormGroup as={Col}>
              <FormLabel
                style={values.errors.description ? { color: "#cc0000" } : null}
              >
                Car description
              </FormLabel>
              <FormControl
                as="textarea"
                name="description"
                type="text"
                placeholder="Tell your guests why your car is their best option."
                onChange={handleChange}
                style={formControlStyle}
                defaultValue={values.description}
                size="lg"
              />
            </FormGroup>
          </Row>
          {features}
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

export default CarDescriptionFeatures;

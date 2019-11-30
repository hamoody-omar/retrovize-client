import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
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
import { getListings } from "../../actions/listingsActions";

export class ViewListings extends Component {
  componentDidMount() {
    console.log(this.props.auth);
    this.props.getListings(this.props.auth);
  }

  render() {
    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Review and publish</Card.Header>
        <Card.Body>
          <h4>Driving license</h4>
          <h4>Car details</h4>
          <h4>Car registration</h4>
          <h4>Car location</h4>
          <h4>Car description and features</h4>
          <h4>Car availability and price</h4>
          <h4>Car photos</h4>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    );
  }
}

ViewListings.propTypes = {
  getListings: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  {
    getListings
  }
)(withRouter(ViewListings));

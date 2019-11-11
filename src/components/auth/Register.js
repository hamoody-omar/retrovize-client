import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Card, Button, Form } from "react-bootstrap";
import { registerUser } from "../../actions/authActions";
import {
  setCloseLoginModal,
  setCloseSignupModal1,
  setCloseSignupModal2
} from "../../actions/modalActions";
import store from "../../store";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
      mktUpdtEmails: true,
      errors: {},
      validated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTermsChange = this.handleTermsChange.bind(this);
    this.handleMktUpdtEmailsChange = this.handleMktUpdtEmailsChange.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if (this.props.next) {
        if (this.props.next === "/") {
          this.props.history.push("/");
        }
      } else {
        this.props.history.push("/");
      }
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      //this.props.history.push("/dashabord");
      if (this.props.next) {
        if (this.props.next === "/") {
          store.dispatch(setCloseLoginModal());
          store.dispatch(setCloseSignupModal1());
          store.dispatch(setCloseSignupModal2());
        }
      } else {
        this.props.history.push("/");
      }
    }
  }

  handleChange(e) {
    const targetName = e.target.name;
    this.setState({ [targetName]: e.target.value });
    if (this.state.errors.hasOwnProperty(targetName)) {
      this.setState({ errors: { ...this.state.errors, [targetName]: "" } });
    }
  }

  handleTermsChange(e) {
    this.setState(prevState => ({ terms: !prevState.terms }));
    if (this.state.errors.hasOwnProperty("terms")) {
      this.setState({ errors: { ...this.state.errors, terms: "" } });
    }
  }

  handleMktUpdtEmailsChange(e) {
    this.setState(prevState => ({ mktUpdtEmails: !prevState.mktUpdtEmails }));
  }

  handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      terms: this.state.terms,
      mktUpdtEmails: this.state.mktUpdtEmails
    };
    this.props.registerUser(newUser, this.props.next);
  }

  render() {
    const loginButton = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginTop: "17px"
    };
    const formControlStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginBottom: "7px"
    };
    const checkBoxStyle = {
      marginBottom: "7px"
    };
    const { errors } = this.state;
    return (
      <Card
        className="register-page-card"
        style={{
          backgroundColor: "black"
        }}
      >
        <p style={{ fontSize: "20px", textAlign: "center" }}>
          Sign up with
          <span style={{ color: "#66E3FE" }}> Facebook </span>
          or
          <span style={{ color: "#66E3FE" }}> Google</span>
        </p>
        <hr style={{ backgroundColor: "white" }} />

        <Form
          //noValidate
          //validated={this.state.validated}
          onSubmit={this.handleSubmit}
        >
          <Form.Group controlId="firstName">
            <Form.Control
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={this.handleChange}
              style={formControlStyle}
              size="lg"
            />
            {errors.firstName && (
              <p style={{ color: "#cc0000" }}>{errors.firstName}</p>
            )}
          </Form.Group>
          <Form.Group controlId="lastName">
            <Form.Control
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={this.handleChange}
              isInvalid={!!errors.lastName}
              style={formControlStyle}
              size="lg"
            />
            {errors.lastName && (
              <p style={{ color: "#cc0000" }}>{errors.lastName}</p>
            )}
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Control
              name="email"
              type="email"
              placeholder="email"
              onChange={this.handleChange}
              style={formControlStyle}
              size="lg"
            />
            {errors.email && <p style={{ color: "#cc0000" }}>{errors.email}</p>}
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleChange}
              style={formControlStyle}
              size="lg"
            />
            {errors.password && (
              <p style={{ color: "#cc0000", whiteSpace: "pre-wrap" }}>
                {errors.password}
              </p>
            )}
          </Form.Group>
          <Form.Group controlId="5">
            <Form.Check
              name="terms"
              label="Agree to terms and conditions"
              feedback="You must agree before submitting"
              onChange={this.handleTermsChange}
              style={checkBoxStyle}
              size="lg"
            />
            {errors.terms && <p style={{ color: "#cc0000" }}>{errors.terms}</p>}
          </Form.Group>
          <Form.Group controlId="5">
            <Form.Check
              name="mktUpdtEmails"
              label="I don’t want to receive marketing messages from Retrovize"
              onChange={this.handleMktUpdtEmailsChange}
              style={checkBoxStyle}
              size="lg"
            />
          </Form.Group>
          <Button type="submit" style={loginButton} size="lg" block>
            Sign up
          </Button>
        </Form>

        <hr style={{ backgroundColor: "white" }} />
        <p style={{ fontSize: "20px" }}>
          Already have an account?
          <span style={{ color: "#66E3FE" }}> Sign in</span>
        </p>
      </Card>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Register));

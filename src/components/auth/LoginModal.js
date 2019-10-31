import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Modal, Button, Form } from "react-bootstrap";
import { loginUser } from "../../actions/authActions";
import { setCloseLoginModal } from "../../actions/modalActions";
import store from "../../store";

class LoginModal extends Component {
  constructor(props) {
    super(props);
    console.log("props");
    console.log(props);
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      if (this.props.next === "/") {
        store.dispatch(setCloseLoginModal());
      }
    }
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      //this.props.history.push("/dashabord");
      if (this.props.next === "/") {
        store.dispatch(setCloseLoginModal());
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

  handleSubmit(e) {
    /*const form = e.currentTarget;
    if (form.checkValidity() === false) {
      console.log("sign up form submit has errors");
      e.preventDefault();
      e.stopPropagation();
    } else {*/
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  }
  render() {
    const facebookButton = { border: "1px solid white" };
    const googleButton = {
      backgroundColor: "white",
      color: "black",
      border: "1px solid white",
      marginBottom: "30px"
    };
    const loginButton = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginTop: "5px"
    };
    const formControlStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginBottom: "7px"
    };
    const { errors } = this.state;
    return (
      <Modal
        style={{ backgroundColor: "black" }}
        {...this.props}
        size=""
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <div
          style={{
            border: "1px solid white",
            backgroundColor: "black",
            color: "white",
            borderRadius: "5px"
          }}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Button style={facebookButton} size="lg" block>
              Log in with Facebook
            </Button>
            <Button style={googleButton} size="lg" block>
              <span style={{ color: "black" }}>Log in with Google</span>
            </Button>
            <hr style={{ backgroundColor: "white" }} />
            <Form
              //noValidate
              //validated={this.state.validated}
              onSubmit={this.handleSubmit}
            >
              <Form.Group controlId="1">
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="email"
                  onChange={this.handleChange}
                  style={formControlStyle}
                  size="lg"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
              </Form.Group>
              <Form.Group controlId="2">
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={this.handleChange}
                  style={formControlStyle}
                  size="lg"
                />
                {errors.password && (
                  <p style={{ color: "red" }}>{errors.password}</p>
                )}
              </Form.Group>
              <Button type="submit" style={loginButton} size="lg" block>
                Log in
              </Button>
            </Form>
            <hr style={{ backgroundColor: "white" }} />
            <p style={{ fontSize: "20px" }}>
              Don't have an account?
              <span style={{ color: "#66E3FE" }}> Sign up</span>
            </p>
          </Modal.Body>
        </div>
      </Modal>
    );
  }
}

LoginModal.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { loginUser }
)(LoginModal);

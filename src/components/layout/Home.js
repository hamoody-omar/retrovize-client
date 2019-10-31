import React, { Component } from "react";
import { Card, Button, Form, Col } from "react-bootstrap";
import DateTimePicker from "../utils/DateTimePicker";

class Home extends Component {
  handleSubmit(e) {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    //setValidated(true);
  }
  render() {
    const searchButton = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white"
    };
    const formControlStyle = {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
      marginBottom: "7px"
    };
    return (
      <div>
        {/*<div className="home">
          <section className="home-search-box-section">
            <div className="home-search-box-outer">
              <div className="home-search-box-inner">
                <form>
                  <div className="row">
                    <h3
                      style={{
                        textAlign: "center",
                        color: "white"
                      }}
                    >
                      Start your reservation.
                    </h3>
                  </div>
                  <div className="row">
                    <div className="large-12 columns">
                      <label>
                        <span style={{ color: "white" }}>Where</span>
                        <input type="text" placeholder="Raleigh" />
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-6 columns">
                      <label>
                        <span style={{ color: "white" }}>Pickup</span>
                        <DateTimePicker />
                      </label>
                    </div>
                    <div className="arge-6 columns">
                      <label>
                        <span style={{ color: "white" }}>Return</span>
                        <DateTimePicker />
                      </label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
                    </div>*/}
        <Card className="home-search-card" style={{ backgroundColor: "black" }}>
          <Card.Header as="h3" className="text-center">
            Start your reservation.
          </Card.Header>
          <Card.Body>
            <Form
              noValidate
              validated={false}
              onSubmit={this.handleSubmit.bind(this)}
            >
              <Form.Row>
                <Form.Group as={Col} md="12" controlId="where">
                  <Form.Label>WHERE</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder='Try "Raleigh"'
                    size="lg"
                    style={formControlStyle}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} md="6" controlId="pickup">
                  <Form.Label>PICKUP</Form.Label>
                  <DateTimePicker />
                </Form.Group>
                <Form.Group as={Col} md="6" controlId="return">
                  <Form.Label>RETURN</Form.Label>
                  <DateTimePicker />
                </Form.Group>
              </Form.Row>
              <Button type="submit" size="lg" style={searchButton}>
                Search
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default Home;

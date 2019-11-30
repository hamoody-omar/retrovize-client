import React, { Component } from "react";
import { Card, Button, ButtonToolbar } from "react-bootstrap";

export class CarPhotos extends Component {
  handlePrev(e) {
    e.preventDefault();
    this.props.handlePrev();
  }
  handleNext(e) {
    e.preventDefault();
    this.props.handleNext();
  }
  render() {
    const {
      values,
      handleImageUpload,
      continueButtonStyle,
      backButtonStyle
    } = this.props;

    let { imagePreviewUrls } = values;
    let $imagePreview = null;
    let imagePreviews = [];
    for (let i = 0; i < imagePreviewUrls.length; i++) {
      $imagePreview = (
        <span key={`car-photo-${i}`}>
          <img className="imgPreview" src={imagePreviewUrls[i]} alt="" />
        </span>
      );
      imagePreviews.push($imagePreview);
    }
    imagePreviews.push(
      <span key="car-photo-default">
        <div className="imgPreview">
          <label
            htmlFor="file"
            style={{
              padding: "90px",
              backgroundColor: "black",
              color: "white",
              border: "solid black"
            }}
          >
            <i></i> + Add photo
          </label>
          <input
            id="file"
            type="file"
            name="file"
            accept={[".jpeg", ".jpg", ".png"]}
            style={{ visibility: "hidden" }}
            onChange={e => {
              console.log("I tet");
              handleImageUpload(e);
            }}
            //multiple
          />
        </div>
      </span>
    );

    return (
      <Card className="hosting-card" style={{ backgroundColor: "black" }}>
        <Card.Header as="h3">Car photos</Card.Header>
        <Card.Body>
          <p>
            Let's get to the fun part. Upload your stunning car photos to stand
            out.
          </p>
          <div style={{ textAlign: "center" }}>
            {imagePreviews ? (
              imagePreviews
            ) : (
              <span>
                <div className="imgPreview">
                  <label
                    htmlFor="file"
                    style={{
                      padding: "90px",
                      backgroundColor: "black",
                      color: "white",
                      border: "solid black"
                    }}
                  >
                    <i></i> + Add photo
                  </label>
                  <input
                    id="file"
                    type="file"
                    name="file"
                    accept={[".jpeg", ".jpg", ".png"]}
                    style={{ visibility: "hidden" }}
                    onChange={e => {
                      console.log("I tet");
                      handleImageUpload(e);
                    }}
                    //multiple
                  />
                </div>
              </span>
            )}
          </div>
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

export default CarPhotos;

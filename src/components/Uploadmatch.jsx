import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Uploadmatch = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <h1 className="upload mt-3 bg-primary">Upload A Match</h1>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Team A</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Team B</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stadium</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Match Date</Form.Label>
              <Form.Control type="date" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Match Time</Form.Label>
              <Form.Control type="time" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Ticket No</Form.Label>
              <Form.Control type="number" />
            </Form.Group>
            <Button variant="primary" size="lg" id="btn">
              Upload
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Uploadmatch;

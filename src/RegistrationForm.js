import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col } from 'react-bootstrap';

export default class RegistrationForm extends Component {
  render() {
    return (
      <div className="container-fluid">
        <h2>Registration</h2>
        <form>

          <FormGroup controlId="firstName">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>
          <FormGroup controlId="firstName2">
            <Col sm={2} md={1}>
              <ControlLabel>firstName</ControlLabel>
            </Col>
            <Col sm={4} md={2}>
              <FormControl type="text" placeholder="Enter First Name" />
            </Col>
          </FormGroup>

          <hr />
          <div className="row">
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Username</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" id="exampleInputEmail1" className="form-control" placeholder="Username" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Username</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Username" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Company</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
            <div className="col-sm-2 col-md-1">
              <label htmlFor="exampleInputEmail1">Email</label>
            </div>
            <div className="col-sm-4 col-md-2">
              <input type="text" className="form-control" placeholder="Email" />
            </div>
          </div>
        </form>
      </div>
    );
  }
}
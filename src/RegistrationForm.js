import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Row, Col, Checkbox, Button } from 'react-bootstrap';

export default class RegistrationForm extends Component {
  render() {
    return (
      <form>
        <Row>
          <Col sm={6} smPush={6}>
            <FormGroup controlId="sharedUsernameMessage">
              <ControlLabel></ControlLabel>
              <p className="form-control-static">Username must be <font color="blue">6-100</font> lower-case characters a-z and 0-9.</p>
            </FormGroup>
          </Col>
          <Col sm={6} smPull={6}>
            <FormGroup controlId="username">
              <ControlLabel>Shared Username</ControlLabel>
              <FormControl type="text" placeholder="Shared Username" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup controlId="password">
              <ControlLabel>Password</ControlLabel>
              <FormControl type="password" placeholder="**********" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="confirmPassword">
              <ControlLabel>Confirm Password</ControlLabel>
              <FormControl type="password" placeholder="**********" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <FormGroup controlId="email">
              <ControlLabel>Work Email Address</ControlLabel>
              <FormControl type="text" placeholder="Email" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="confirmEmail">
              <ControlLabel>Confirm Email Address</ControlLabel>
              <FormControl type="text" placeholder="Confirm Email" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup controlId="company">
              <ControlLabel>Company Name</ControlLabel>
              <FormControl type="text" placeholder="Company" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="department">
              <ControlLabel>Department</ControlLabel>
              <FormControl type="text" placeholder="Department" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup controlId="jobType">
              <ControlLabel>Job Type</ControlLabel>
              <FormControl type="text" placeholder="Select one..." />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="jobTitle">
              <ControlLabel>Job Title</ControlLabel>
              <FormControl type="text" placeholder="Job Title" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup controlId="address">
              <ControlLabel>Address</ControlLabel>
              <FormControl type="text" placeholder="Address" />
            </FormGroup>
          </Col>
          <Col sm={6}>
            <FormGroup controlId="address2">
              <ControlLabel>Address 2</ControlLabel>
              <FormControl type="text" placeholder="Address 2" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={8} sm={4}>
            <FormGroup controlId="firstName">
              <ControlLabel>First Name</ControlLabel>
              <FormControl type="text" placeholder="First Name" />
            </FormGroup>
          </Col>
          <Col xs={4} sm={2}>
            <FormGroup controlId="middleInitial">
              <ControlLabel>M. I.</ControlLabel>
              <FormControl type="text" placeholder="M. I." />
            </FormGroup>
          </Col>
          <Col xs={8} sm={4}>
            <FormGroup controlId="lastName">
              <ControlLabel>Last Name</ControlLabel>
              <FormControl type="text" placeholder="Last Name" />
            </FormGroup>
          </Col>
          <Col xs={4} sm={2}>
            <FormGroup controlId="suffix">
              <ControlLabel>Suffix</ControlLabel>
              <FormControl type="text" placeholder="Suffix" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <FormGroup controlId="country">
              <ControlLabel>Country</ControlLabel>
              <FormControl type="text" placeholder="Country" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12} sm={6}>
            <FormGroup controlId="city">
              <ControlLabel>City</ControlLabel>
              <FormControl type="text" placeholder="City" />
            </FormGroup>
          </Col>
          <Col xs={6} sm={3}>
            <FormGroup controlId="state">
              <ControlLabel>State/Province/Region</ControlLabel>
              <FormControl type="text" placeholder="State" />
            </FormGroup>
          </Col>
          <Col xs={6} sm={3}>
            <FormGroup controlId="zip">
              <ControlLabel>Postal / Zip Code</ControlLabel>
              <FormControl type="text" placeholder="Zip" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <FormGroup controlId="phone">
              <ControlLabel>Phone (e.g. 212-555-1212)</ControlLabel>
              <FormControl type="text" placeholder="Phone" />
            </FormGroup>
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Checkbox>
              Keep me informed of new Bloomberg BNA offers and promotions via email and other means.
            </Checkbox>
          </Col>
        </Row>

        <hr />
        
        <Row>
          <Col xs={12} style={{textAlign: "center"}}>
            <Button bsStyle="success">
              Continue
            </Button>
            &nbsp;&nbsp;
            <Button>
              Cancel
            </Button>
          </Col>
        </Row>

      </form>
    );
  }
}
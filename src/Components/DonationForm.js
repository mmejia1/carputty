import React, { useState } from 'react';

import {
  Button,
  Card,
  Form,
  Container,
  ProgressBar,
  Alert,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import ProgressBar from 'react-bootstrap/ProgressBar';

function DonationForm() {
  //info for bar component
  const [totalAmount, setTotalAmount] = useState(5000);
  //for checking that the amount submitted is 5 || greater
  const [amountRaised, setAmountRaised] = useState(0);
  const [donors, setDonators] = useState(0);
  const [inputAmount, setInputAmount] = useState('');
  const [tooLow, setTooLow] = useState(false);
  const [weHitTarget, setWeHitTarget] = useState(false);
  const [isNum, setIsNum] = useState(false);

  //function setTotalAmount() {}

  function handleSubmit(evt) {
    evt.preventDefault();
    //const stringAmount = inputAmount;
    console.log('MADE IT HERE', inputAmount);
    if (isNaN(inputAmount)) {
      setIsNum(true);
      //what is this doing
      setTooLow(false);

      console.log('in set imput');
    }

    setInputAmount('');
  }

  function onChange(evt) {
    console.log(evt.target.value);
    let num = inputAmount.slice();
    console.log(num);
    num = evt.target.value;
    console.log('numArray', num);
    console.log(typeof amountRaised);
    setInputAmount(num);
  }
  function handleSum() {
    //here well do our check for $5

    if (Number(inputAmount) > 5) {
      setIsNum(false);
      setTooLow(false);
      console.log('inputamount', inputAmount);
      const amountNeeded = totalAmount - inputAmount;
      console.log(typeof totalAmount);
      let amount = amountRaised + Number(inputAmount);
      console.log('amount', amount);
      console.log(amountNeeded);
      //add donor
      let numberOfDonors = donors + 1;
      setTotalAmount(amountNeeded);
      console.log('numberOfDonors', numberOfDonors);
      setDonators(numberOfDonors);
      setAmountRaised(amount);
    }
    if (Number(inputAmount) > Number(totalAmount)) {
      setWeHitTarget(true);
      let numberOfDonors = donors + 1;
      setDonators(numberOfDonors);
    }
    if (Number(inputAmount) < 5) {
      console.log('OOPS!');
      setIsNum(false);
      setTooLow(true);
    }
  }

  return (
    <>
      <Container className='d-flex vh-100'>
        <Row className='m-auto text-center w-50'>
          <Alert class='alert alert-primary text-center' role='alert'>
            {weHitTarget && <p>we did it!</p>}{' '}
            {!weHitTarget && (
              <p>${totalAmount} still needed to fund this project</p>
            )}
          </Alert>

          <Col>
            <Card
              class='card text-center w-50'
              style={{
                boxShadow: '0px 0px 5px 2px rgba(100, 100, 100, 0.6) ',
              }}
            >
              <Card.Body>
                <ProgressBar
                  data-toggle='popover'
                  data-placement='top'
                  now={(amountRaised / 5000) * 100}
                  variant='info'
                  // label={(amountRaised / 5000) * 100}
                ></ProgressBar>
                <Card.Title className='mt-5 mb-5'>
                  <h2>Only a few days left to fund this project</h2>
                </Card.Title>
                <p id='join'>
                  Join the {donors} other donors who have already suported this
                  project
                </p>
                <Form onSubmit={handleSubmit}>
                  {/* <Form.Group controlId='formHorizontal'> */}
                  <div className='App'>
                    <label htmlFor='amount'></label>
                    <Form.Row>
                      <Col className='ml-5'>
                        <Form.Control
                          placeholder='$'
                          name='input amount'
                          onChange={(evt) => onChange(evt)}
                          value={inputAmount}
                        />
                      </Col>
                      <Col>
                        <Button
                          variant='info'
                          type='submit'
                          onClick={handleSum}
                        >
                          Give Now
                        </Button>
                      </Col>
                    </Form.Row>
                  </div>

                  {tooLow && <p>minimum donation is $5 </p>}
                  {weHitTarget && <p>YAY! We hit our target! </p>}
                  {isNum && <p>Please input a dollar amount</p>}
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default DonationForm;

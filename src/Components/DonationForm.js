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

function DonationForm() {
  const [totalAmountNeeded, setTotalAmount] = useState(5000);
  const [amountRaised, setAmountRaised] = useState(0);
  const [donors, setDonators] = useState(0);
  const [inputAmount, setInputAmount] = useState('');
  const [tooLow, setTooLow] = useState(false);
  const [weHitTarget, setWeHitTarget] = useState(false);
  const [isNum, setIsNum] = useState(false);

  function handleSubmit(evt) {
    evt.preventDefault();
    //checking input and making sure its a number and not a letter
    if (isNaN(inputAmount)) {
      setIsNum(true);
      //we reset tooLow in case it was triggered
      setTooLow(false);
    }
    setInputAmount('');
  }

  function onChange(evt) {
    let num = evt.target.value;
    setInputAmount(num);
  }
  function handleSum() {
    //here well do our check for $5
    //we input nums as strings '55' we need it as a num
    if (Number(inputAmount) > 5) {
      //In case these cases were triggered previously we need to reset them
      setIsNum(false);
      setTooLow(false);

      const amountNeeded = totalAmountNeeded - inputAmount;
      let amount = amountRaised + Number(inputAmount);
      let numberOfDonors = donors + 1;
      setTotalAmount(amountNeeded);
      setDonators(numberOfDonors);
      setAmountRaised(amount);
    }
    if (Number(inputAmount) > Number(totalAmountNeeded)) {
      setWeHitTarget(true);
      let numberOfDonors = donors + 1;
      setDonators(numberOfDonors);
    }
    if (Number(inputAmount) < 5) {
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
              <p>${totalAmountNeeded} still needed to fund this project</p>
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
                ></ProgressBar>
                <Card.Title className='mt-5 mb-5'>
                  <h2>Only a few days left to fund this project</h2>
                </Card.Title>
                <p id='join'>
                  Join the {donors} other donors who have already suported this
                  project
                </p>
                <Form onSubmit={handleSubmit}>
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

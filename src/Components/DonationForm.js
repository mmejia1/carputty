import React, { useState } from 'react';
//import ProgressBar from './ProgressBar';
import { Button, Card, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';

function DonationForm() {
  //info for bar component
  const [totalAmount, setTotalAmount] = useState(5000);
  //for checking that the amount submitted is 5 || greater
  const [amountRaised, setAmountRaised] = useState(0);
  const [donors, setDonators] = useState(0);
  const [inputAmount, setInputAmount] = useState('');
  const [tooLow, setTooLow] = useState(false);
  const [weHitTarget, setWeHitTarget] = useState(false);

  //function setTotalAmount() {}

  function handleSubmit(evt) {
    evt.preventDefault();
    //const stringAmount = inputAmount;
    console.log('MADE IT HERE');
  }

  function onChange(evt) {
    console.log(evt.target.value);
    let numArray = inputAmount.slice();
    console.log(numArray);
    numArray = evt.target.value;
    console.log('numArray', numArray);
    console.log(typeof amountRaised);
    setInputAmount(numArray);
  }
  function handleSum() {
    //here well do our check for $5
    if (Number(inputAmount) > 5) {
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
      setTooLow(true);
    }
  }

  return (
    <>
      <Container className='justify-content-center'>
        <Card class='card text-center w-50 mt-5 '>
          <Card.Body>
            {/* <ProgressBar variant='info' class='w-25'></ProgressBar> */}
            <ProgressBar
              now={(amountRaised / 5000) * 100}
              variant='info'

              // needed={totalAmount}
              // completed={amountRaised}
            />

            <Card.Title className='mt-5 mb-5'>
              <h2>Only a few days left to fund this project</h2>
            </Card.Title>
            <p id='join'>
              Join the {donors} other donors who have already suported this
              project
            </p>

            <div>total raised is {totalAmount}</div>
            <Form onSubmit={handleSubmit}>
              <div className='App'>
                <label htmlFor='amount'></label>
                <input
                  placeholder='$'
                  name='input amount'
                  onChange={(evt) => onChange(evt)}
                  value={inputAmount}
                />
                <Button variant='info' type='submit' onClick={handleSum}>
                  Give Now
                </Button>
              </div>
              {tooLow && <p>Please input $5 or a higher amount! </p>}
              {weHitTarget && <p>YAY! We hit our target! </p>}
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

export default DonationForm;

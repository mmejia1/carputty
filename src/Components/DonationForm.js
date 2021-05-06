import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <ProgressBar needed={totalAmount} completed={amountRaised} />
      <h2 className='mt-5 mb-5'>Only a few days left to fund this project</h2>
      <p id='join'>
        Join the {donors} other donors that have already suported this project
      </p>

      <div>total raised is {totalAmount}</div>
      <form onSubmit={handleSubmit}>
        <div className='App'>
          <label htmlFor='amount'></label>
          <input
            placeholder='$'
            name='input amount'
            onChange={(evt) => onChange(evt)}
            value={inputAmount}
          />
          <Button type='submit' onClick={handleSum}>
            Give Now
          </Button>
        </div>
        {tooLow && <p>Please input $5 or a higher amount! </p>}
        {weHitTarget && <p>YAY! We hit our target! </p>}
      </form>
    </>
  );
}

export default DonationForm;

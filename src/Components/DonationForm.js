import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

function DonationForm() {
  //info for bar component
  const [totalAmount, setTotalAmount] = useState(5000);
  //for checking that the amount submitted is 5 || greater
  //this info gets used for calculating how much needed
  // const [amountRaised, setAmountRaised] = useState(0);
  const [donaters, setDonators] = useState(0);
  const [inputAmount, setInputAmount] = useState('');
  const [tooLow, setTooLow] = useState(false);
  const [tooHigh, setTooHigh] = useState(false);

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

    //console.log('amount', amount);
    setInputAmount(numArray);
  }
  function handleSum() {
    //here well do our check for $5
    if (Number(inputAmount) > 5 && Number(inputAmount) < Number(totalAmount)) {
      console.log('inputamount', inputAmount);
      const amountNeeded = totalAmount - inputAmount;
      console.log(typeof totalAmount);
      // let amount = amountRaised + Number(inputAmount);
      // console.log('amount', amount);
      console.log(amountNeeded);
      setTotalAmount(amountNeeded);
      //  setAmountRaised(amount);
    }
    if (Number(inputAmount) > Number(totalAmount)) {
      setTooHigh(true);
    }
    if (Number(inputAmount) < 5) {
      console.log('OOPS!');
      setTooLow(true);
    }
  }

  return (
    <>
      <ProgressBar needed={totalAmount} />
      <div>CARPUTTY ☕️ hey</div>
      <div>total is {totalAmount}</div>
      <form onSubmit={handleSubmit}>
        <div className='App'>
          <label htmlFor='amount'>amount:</label>
          <input
            name='input amount'
            onChange={(evt) => onChange(evt)}
            value={inputAmount}
          />
          <button type='submit' onClick={handleSum}>
            click
          </button>
        </div>
        {tooLow && <p>Please input $5 or a higher amount! </p>}
        {tooHigh && (
          <p>Please input an amount lower or equal to {totalAmount}! </p>
        )}
      </form>
    </>
  );
}

export default DonationForm;

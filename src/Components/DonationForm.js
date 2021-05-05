import React, { useState } from 'react';

function App() {
  //adding amount donated to state
  //const totalAmount = 5000
  const [totalAmount, setTotalAmount] = useState(5000);
  //for checking that the amount submitted is 5 || greater
  //sets nums as strings
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
    setInputAmount(numArray);
    // console.log(inputAmount);
  }
  function handleSum() {
    //here well do our check for $5
    if (Number(inputAmount) > 5 && Number(inputAmount) < Number(totalAmount)) {
      console.log('inputamount', inputAmount);
      const amountNeeded = totalAmount - inputAmount;
      console.log(typeof totalAmount);
      console.log(amountNeeded);
      setTotalAmount(amountNeeded);
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

export default App;

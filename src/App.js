import React, { useState } from 'react';

function App() {
  //adding amount donated to state
  // const [totalAmount, setTotalAmount] = useState(0);
  //for checking that the amount submitted is 5 || greater
  //sets nums as strings
  const [inputAmount, setInputAmount] = useState(0);

  //function setTotalAmount() {}

  function handleSubmit(evt) {
    evt.preventDefault();
    setInputAmount();
  }

  function onChange(evt) {
    console.log(evt.target.value);
  }

  return (
    <>
      <div>CARPUTTY ☕️ hey</div>
      <div>total is {}</div>
      <form onSubmit={handleSubmit}>
        <div className='App'>
          <label htmlFor='amount'>amount:</label>
          <input
            name='input amount'
            onChange={(evt) => onChange(evt)}
            value={inputAmount}
          />
          <button type='submit'>click</button>
        </div>
      </form>
    </>
  );
}

export default App;

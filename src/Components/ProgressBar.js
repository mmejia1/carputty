import React, { useState } from 'react';

const ProgressBar = (props) => {
  //we need amount raised and amount still needed for bar
  console.log('prop num', props.completed);
  console.log('prp', typeof props.completed);

  //const complete = (Number(props.completed) / 5000) * 100;
  //console.log('complete', complete);
  const bgcolor = '#00695c';
  //const completed = 60;
  //const [completed, setComplete] = useState(0);

  const containerStyles = {
    height: 20,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${(props.completed / 5000) * 100}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };

  return (
    <>
      <p>${props.needed} still needed to fund this project</p>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${
            (props.completed / 5000) * 100
          }%`}</span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
